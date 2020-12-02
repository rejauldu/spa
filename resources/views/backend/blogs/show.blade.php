@extends('layouts.common')
@section('title')
{{ __($post->name) }}
@endsection
@section('content')
<div class="row">
    <div class="col-sm-0 col-lg-2"></div>
    <div class="col-sm-12 col-lg-6 bg-white py-5">
        <!-- Title -->
        <h3 class="mt-4">{{ $post->title ?? 'No Title' }}</h3>
        <!-- Preview Image -->
        <div><img class="img-fluid rounded img-thumbnail w-100" src="{{ url('/') }}/assets/blogs/{{ $post->photo }}" alt=""></div>
        <div class="mb-4">
            <hr/>
            <span class="text-secondary">By {{ $post->user->name }}</span> <span class="float-right">At {{ $post->created_at->format('jS M Y') }}</span>
            <hr/>
        </div>
        <!-- Post Content -->
        <div class="text-justify lead">{!! $post->body !!}</div>
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
</div>
@endsection