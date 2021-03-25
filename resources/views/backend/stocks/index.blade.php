@extends('layouts.dashboard')
@section('title')
{{ __('All Stocks') }}
@endsection
@section('content')
<div class="content-wrapper">
	<div class="container-fluid">
		<section class="content-header">
			<h3>Stock <small>all</small></h3>
			<ol class="breadcrumb">
				<li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Stocks</li>
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
						<h3 class="box-title"><i class="fa fa-credit-card mr-1"></i> {{ __('All Stocks') }}</h3>
						<div class="box-tools float-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
							</button>
							<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
						</div>
					</div>
                    @php($moderator = false)
                    @moderator
                        @php($moderator = true)
                    @endmoderator
					<div class="box-body">
						<table id="dataTables" class="display nowrap" cellspacing="0" width="100%">
							<thead>
								<tr>
									<th>ID</th>
									<th>Product</th>
									<th>Amount</th>
                                    @if($moderator)
                                        <th>Agent</th>
                                    @endif
                                    <th>Sent By</th>
                                    <th class="text-center">Received</th>
                                    <th>Created At</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
								</tr>
							</thead>
							<tbody>
								@foreach($stocks as $stock)
								<tr>
									<td>{{ $stock->id }}</td>
									<td><a href="{{ route('products.show', $stock->product_id) }}">{{ $stock->product->name }}</a></td>
									<td>{{ $stock->amount }}</td>
                                    @if($moderator)
									<td><a href="{{ route('users.show', $stock->user_id) }}">{{ $stock->user->name }}</a></td>
                                        <th><a href="{{ route('users.show', $stock->created_by) }}">{{ $stock->creator->name }}</a></th>
                                    @else
                                        <th>{{ $stock->creator->name }}</th>
                                    @endif

                                    @if($stock->accepted_by)
                                        <td class="alert text-center"><i class="fa fa-check"></i> Received</td>
                                    @elseif($stock->user_id == $user->id)
                                        <td class="text-center"><a class="btn btn-success" href="{{ route('stocks-accept', $stock->id) }}">Receive</a></td>
                                    @else
                                        <th class="alert alert-danger text-center"><i class="fa fa-exclamation-circle"></i> Not Received</th>
                                    @endif
                                    <td>{{ $stock->created_at->format('jS M Y') }}</td>
                                    <td>
                                        @if($stock->created_by == $user->id && !$stock->accepted_by)
                                            <a class="fa fa-edit text-success" href="{{ route('stocks.edit', $stock->id) }}"></a>
                                        @else
                                            <i class="fa fa-lock text-secondary"></i>
                                        @endif
                                    </td>
                                    <td>
                                        @if($stock->created_by == $user->id && !$stock->accepted_by)
                                            <a href="{{ route('stocks.destroy', $stock->id) }}" onclick="event.preventDefault(); document.getElementById('delete-form').action = this.href; document.getElementById('delete-form').submit.click();" class="text-danger fa fa-trash"></a>
                                        @else
                                            <i class="fa fa-lock text-secondary"></i>
                                        @endif
                                    </td>
								</tr>
								@endforeach
							</tbody>
							<tfoot>
								<tr>
									<th>ID</th>
									<th>Product</th>
									<th>amount</th>
                                    @if($moderator)
                                        <th>Agent</th>
                                    @endif
                                    <th>Sent By</th>
                                    <th class="text-center">Received</th>
                                    <th>Created At</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
@section('style')
	<!-- dataTables plugin -->
	<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet" media="all"/>
	<link href="https://cdn.datatables.net/responsive/2.1.0/css/responsive.dataTables.min.css" rel="stylesheet" media="screen">
	<link href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.dataTables.min.css" rel="stylesheet" media="all"/>
	<!-- /dataTables plugin -->
@endsection
@section('script')
	<!---dataTables plugin JavaScript -->
	<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
	<script src="https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
	<script src="{{ asset('js/dataTables.js') }}"></script>
	<!--/dataTables plugin JavaScript -->
@endsection
