@extends('layouts.common')
@section('title')
{{ __('Best Mangoes in Bangladesh') }}
@endsection
@section('content')
<div class="row">
    <div class="col-sm-0 col-lg-2"></div>
    <div class="col-sm-12 col-lg-6 bg-white py-5">
        @foreach($posts as $post)
        <div class="row my-2">
            <div class="col-12 col-md-6 col-lg-4"><img src="{{ url('/') }}/assets/blogs/{{ $post->thumbnail }}" class="img-thumbnail" /></div>
            <div class="col-12 col-md-6 col-lg-8">
                <h4><a href="{{ route('blogs.show', $post->id) }}">{{ $post->title }}</a></h4>
                <hr/>
                <span class="text-secondary">By {{ $post->user->name }}</span> <span class="float-right">At {{ $post->created_at->format('jS M Y') }}</span>
                <hr/>
                <div class="text-justify">{!! excerpt($post->body, 400) !!} <a class="btn btn-link" href="{{ route('blogs.show', $post->id) }}">...more</a></div>
            </div>
        </div>
        @endforeach
    </div>
    <div class="col-sm-0 col-lg-2 bg-white py-5">
        <div class="card">
            <div class="card-header">Categories</div>
            <div class="card-body">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="btn btn-link" href="{{ route('blogs.index') }}">All Posts</a></li>
                    @foreach($categories as $category)
                    <li class="nav-item"><a class="btn btn-link" href="{{ route('blogs.index') }}?category={{ $category->id }}">{{ $category->name }}</a></li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="pagination-nav d-flex justify-content-center">
            {{ $posts->links() }}
        </div>
    </div>
</div>
@endsection