@extends('layouts.dashboard')
@section('title')
{{ __(isset($post)?'Update post':'Create post') }}
@endsection
@section('content')
<div class="content-wrapper">
    <div class="container-fluid">
        <section class="content-header">
            <h3>Category <small>{{ isset($post)?'edit':'create' }}</small></h3>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
                <li><a href="#">Blogs</a></li>
                <li class="active">{{ isset($post)?'Edit':'Create' }}</li>
            </ol>
        </section>
        @if(session()->has('message'))
        <div class="alert alert-warning">
            {{ session()->get('message') }}
        </div>
        @endif
        <div class="row">
            <div class="col-12">
                <div class="box box-info">
                    <div class="box-header with-border">
                        <h3 class="box-title"><i class="fa fa-edit"></i> {{ __(isset($post)?'Update post':'Create post') }}</h3>
                        <div class="box-tools float-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div class="box-body">
                        <div class="row pt-2">
                            <div class="col-12"><!--left col-->
                                <form action="@if(isset($post)) {{ route('blogs.update', $post->id) }} @else {{ route('blogs.store') }} @endif" method="post" enctype="multipart/form-data">
                                    @csrf
                                    @if(isset($post))
                                    @method('PUT')
                                    @endif
                                    <div class="form-group">
                                        <label for="title">Title</label>
                                        <input id="title" type="text" class="form-control" name="title" value="{{ $post->title ?? '' }}" placeholder="First name" title="Enter your first name if any." />
                                    </div>
                                    <div class="form-group">
                                        <label for="body">Body:</label>
                                        <textarea name="body" class="form-control editor-tools" rows="5" id="body" required>{!! $post->body ?? '' !!}</textarea>
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="row">	
                                        <div class="col-6 form-group">
                                            <label for="body">Photo (900x300)</label>
                                            <input type="file" id="photo" name="photo" class="form-control bg-theme text-white" onchange="displayPhotoOnSelect(this, 'photo-view')" accept="image/*" value="Upload image" @if(!isset($product->photo)) required @endif/>	
                                            <div class="valid-feedback">Valid.</div>	
                                            <div class="invalid-feedback">Please fill out this field.</div>	
                                        </div>	
                                        <div class="col-6 form-group">	
                                            <img id="photo-view" style="width:150px; height:50px" src="{{ asset('/assets/blogs') }}/{{ $post->photo ?? 'not-found.jpg' }}" class="img-thumbnail" alt="Product">	
                                        </div>	
                                    </div>
                                    <div class="row">	
                                        <div class="col-6 form-group">
                                            <label for="body">Thumbnail (300x300)</label>
                                            <input type="file" id="thumbnail" name="thumbnail" class="form-control bg-theme text-white" onchange="displayPhotoOnSelect(this, 'thumbnail-view')" accept="image/*" value="Upload image" @if(!isset($product->thumbnail)) required @endif/>	
                                            <div class="valid-feedback">Valid.</div>	
                                            <div class="invalid-feedback">Please fill out this field.</div>	
                                        </div>	
                                        <div class="col-6 form-group">	
                                            <img id="thumbnail-view" style="width:50px; height:50px" src="{{ asset('/assets/blogs') }}/{{ $post->thumbnail ?? 'not-found.jpg' }}" class="img-thumbnail" alt="Product">	
                                        </div>	
                                    </div>
                                    <div class="form-group">
                                        <label for="category">Category</label>
                                        <select id="category" name="category_id" class="custom-select" required>
                                            <option value="0">--Select Category--</option>
                                            @foreach($categories as $category)
                                            <option value="{{ $category->id }}" @if(isset($post) && $post->category_id == $category->id) selected @endif>{{ $category->name }}</option>
                                            @endforeach
                                        </select>
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <button class="btn btn-success btn-theme" type="submit">{{ __(isset($post)?'Update':'Save') }}</button>
                                    </div>
                                </form>
                            </div><!--/col-9-->
                        </div><!--/row-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('style')
<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-bs4.css" rel="stylesheet">
@endsection
@section('script')
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-bs4.js"></script>
<script>
                                            $('.editor-tools').summernote({
                                                placeholder: 'Enter post body',
                                                tabsize: 2,
                                                height: 100
                                            });
</script>
@endsection