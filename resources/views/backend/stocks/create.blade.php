@extends('layouts.dashboard')
@section('title')
{{ __(isset($stock)?'Update stock':'Create stock') }}
@endsection
@section('content')
<div class="content-wrapper">
	<div class="container-fluid">
		<section class="content-header">
			<h3>Stock <small>{{ isset($stock)?'edit':'create' }}</small></h3>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li><a href="#">Stocks</a></li>
				<li class="active">{{ isset($stock)?'Edit':'Create' }}</li>
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
						<h3 class="box-title"><i class="fa fa-edit"></i> {{ __(isset($stock)?'Update stock':'Create stock') }}</h3>
						<div class="box-tools float-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
							</button>
							<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
						</div>
					</div>
                    @php($agent = false)
                    @agent
                    @php($agent = true)
                    @endagent
					<div class="box-body">
						<div class="row pt-2">
							<div class="col-12"><!--left col-->
								<form action="@if(isset($stock)) {{ route('stocks.update', $stock->id) }} @else {{ route('stocks.store') }} @endif" method="post" enctype="multipart/form-data">
									@csrf
									@if(isset($stock))
										@method('PUT')
									@endif
									@if($agent)
									    <div class="alert alert-danger">Please write a short note or reason for sending.</div>
									@endif
                                    <select id="change-role" @if(isset($stock)) disabled @endif name="product_id"  class="custom-select mb-3">
                                        <option value="0" selected>--Select Product--</option>
                                        @foreach($products as $product)
                                            <option value="{{ $product->id }}" @if(isset($stock) && $stock->product_id == $product->id) selected @endif>{{ $product->style_number ?? 'empty' }}-{{ $product->size->code ?? '0' }}-{{ $product->color->code ?? '0' }}</option>
                                        @endforeach
                                    </select>
                                    <div class="form-group">
                                        <label for="amount">Amount</label>
                                        <input id="amount" type="text" class="form-control" name="amount" value="{{ $stock->amount ?? '' }}" placeholder="Amount" title="Enter amount" />
                                    </div>
                                    @if($agent)
                                        <div class="form-group">
                                            <label for="note">Note:</label>
                                            <textarea name="note" class="form-control editor-tools" rows="5" id="note" required>{!! $stock->note ?? '' !!}</textarea>
                                            <div class="valid-feedback">Valid.</div>
                                            <div class="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                    @else
                                        <select id="change-role" name="user_id" class="custom-select mb-3">
                                            <option value="0" selected>--Select Agent--</option>
                                            @foreach($agents as $agent)
                                                <option value="{{ $agent->id }}" @if(isset($stock) && $stock->user_id == $agent->id) selected @endif>{{ $agent->name }}</option>
                                            @endforeach
                                        </select>
                                    @endif
									<div class="form-group mt-3">
										<button class="btn btn-success btn-theme" type="submit">{{ __(isset($stock)?'Update':'Save') }}</button>
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
        placeholder: 'Enter reason',
        tabsize: 2,
        height: 100
      });
    </script>
@endsection
