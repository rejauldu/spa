@extends('layouts.dashboard')
@section('title')
{{ __('Dashboard') }}
@endsection
@section('content')
<div class="content-wrapper">
	<div class="container-fluid">
		<section class="content-header">
			<h3>Dashboard</h3>
			<ol class="breadcrumb">
				<li class="active">Dashboard</li>
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
						<h3 class="box-title"><i class="fa fa-credit-card mr-1"></i> {{ __('Dashboard') }}</h3>
						<div class="box-tools float-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="row">
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-danger text-white">
									<div class="inner">
										<h3>{{ $status->incomplete }}</h3>
										<h4>Incomplete Orders</h4>
									</div>
									<div class="icon">
										<i class="ion ion-bag"></i>
									</div>
									<a href="{{ route('orders.incomplete') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-info">
									<div class="inner">
										<h3>{{ $status->t }}</h3>
										<h4>Total Orders</h4>
									</div>
									<div class="icon">
										<i class="ion ion-stats-bars"></i>
									</div>
									<a href="{{ route('orders.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
                            @moderator
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-warning">
									<div class="inner">
										<h3>{{ $status->sale }}</h3>
										<h4>Total Sales</h4>
									</div>
									<div class="icon">
										<i class="ion ion-pie-graph"></i>
									</div>
									<a href="{{ route('orders.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
							<!-- /.col -->
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-primary">
									<div class="inner">
										<h3>{{ $users }}</h3>
										<h4>Registered Users</h4>
									</div>
									<div class="icon">
										<i class="ion ion-person-add"></i>
									</div>
									<a href="{{ route('users.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-primary text-white">
									<div class="inner">
										<h3>{{ $products->total }}</h3>
										<h4>Total products</h4>
									</div>
									<div class="icon">
										<i class="ion ion-bag"></i>
									</div>
									<a href="{{ route('manage-products.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box small-box bg-danger">
									<div class="inner">
										<h3>{{ $products->out_of_stock }}</h3>
										<h4>Out of stock</h4>
									</div>
									<div class="icon">
										<i class="ion ion-stats-bars"></i>
									</div>
									<a href="{{ route('manage-products.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-success">
									<div class="inner">
										<h3>{{ $products->available }}</h3>
										<h4>Active products</h4>
									</div>
									<div class="icon">
										<i class="ion ion-person-add"></i>
									</div>
									<a href="{{ route('manage-products.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
							<!-- /.col -->
                            @endmoderator
							<div class="col-md-3 col-sm-6 col-12">
								<div class="small-box bg-danger">
									<div class="inner">
										<h3>{{ $user->unreadNotifications()->groupBy('notifiable_type')->count() }}</h3>
										<h4>Unseen notifications</h4>
									</div>
									<div class="icon">
										<i class="ion ion-pie-graph"></i>
									</div>
									<a href="{{ route('notifications.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
								</div>
								<!-- /.info-box -->
							</div>
                            <!-- /.col -->
                            @agent
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="small-box bg-success">
                                    <div class="inner">
                                        <h3>{{ $stock->style }}</h3>
                                        <h4>Total Style</h4>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="{{ route('stocks.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="small-box bg-primary">
                                    <div class="inner">
                                        <h3>{{ $stock->quantity }}</h3>
                                        <h4>Stock</h4>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="{{ route('stocks.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="small-box bg-secondary">
                                    <div class="inner">
                                        <h3>{{ $stock->received }}</h3>
                                        <h4>Received</h4>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="{{ route('stocks.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="small-box bg-warning">
                                    <div class="inner">
                                        <h3>{{ $stock->sent }}</h3>
                                        <h4>Sent</h4>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="{{ route('stocks-sent') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="small-box bg-danger">
                                    <div class="inner">
                                        <h3>{{ $stock->incomplete }}</h3>
                                        <h4>Incomplete Stock</h4>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="{{ route('stocks.index') }}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                <!-- /.info-box -->
                            </div>
                            <!-- /.col -->
                            @endagent
						</div>
					</div>
				</div>
			</div>


			<div class="col-12 col-md-6">
				<div class="box box-info">
					<div class="box-header with-border">
						<h3 class="box-title">Traffic Comparison</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
						</div>
					</div>
					<div class="box-body chart">
						<div class="chart-responsive">
							<canvas id="lineChart"></canvas>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="box box-info">
					<div class="box-header with-border">
						<h3 class="box-title">Traffic Comparison</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
						</div>
					</div>
					<div class="box-body chart">
						<div class="chart-responsive">
							<canvas id="areaChart"></canvas>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12">
				<div class="box">
					<div class="box-header with-border">
						<h3 class="box-title">Monthly Sales Report</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse">
								<i class="fa fa-minus"></i>
							</button>
							<div class="btn-group">
								<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<i class="fa fa-wrench"></i>
								</button>
								<ul class="dropdown-menu" role="menu">
									<li>
										<a href="#">Action</a>
									</li>
									<li>
										<a href="#">Another action</a>
									</li>
									<li>
										<a href="#">Something else here</a>
									</li>
									<li>
										<a href="#">Separated link</a>
									</li>
								</ul>
							</div>
							<button type="button" class="btn btn-box-tool" data-widget="remove">
								<i class="fa fa-times"></i>
							</button>
						</div>
					</div>
					<div class="box-body">
						<div class="row">
							<div class="col-md-8">
								<p class="text-center">
									<strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
								</p>

								<div class="chart">
									<canvas id="barChart" style="height: 124px; width: 486px;" height="124" width="486"></canvas>
								</div>
							</div>
							<div class="col-md-4">
								<p class="text-center">
									<strong>Order Statuses</strong>
								</p>

								<div class="progress-group">
									<span class="progress-text">Failed Order</span>
									<span class="progress-number"><b>{{ $status->failed }}</b>/{{ $status->total }}</span>
									<div class="progress sm">
										@if($status->total)
										<div class="progress-bar progress-bar-aqua" style="width: {{ round($status->failed*100/$status->total) }}%"></div>
										@else
										<div class="progress-bar progress-bar-aqua" style="width: 0%"></div>
										@endif
									</div>
								</div>
								<div class="progress-group">
									<span class="progress-text">Incomplete Order</span>
									<span class="progress-number"><b>{{ $status->incomplete }}</b>/{{ $status->total }}</span>

									<div class="progress sm">
									    @if($status->total)
										<div class="progress-bar progress-bar-red" style="width: {{ round($status->incomplete*100/$status->total) }}%"></div>
										@else
										<div class="progress-bar progress-bar-red" style="width: 0%"></div>
										@endif
									</div>
								</div>
								<div class="progress-group">
									<span class="progress-text">Total Sale</span>
									<span class="progress-number"><b>{{ $status->sale }}</b>/{{ $status->total }}</span>

									<div class="progress sm">
									    @if($status->total)
										<div class="progress-bar progress-bar-green" style="width: {{ round($status->sale*100/$status->total) }}%"></div>
										@else
										<div class="progress-bar progress-bar-green" style="width: 0%"></div>
										@endif
									</div>
								</div>
								<div class="progress-group">
									<span class="progress-text">Cancelled Order</span>
									<span class="progress-number"><b>{{ $status->cancelled }}</b>/{{ $status->total }}</span>

									<div class="progress sm">
									    @if($status->total)
										<div class="progress-bar progress-bar-yellow" style="width: {{ round($status->cancelled*100/$status->total) }}%"></div>
										@else
										<div class="progress-bar progress-bar-yellow" style="width: 0%"></div>
										@endif
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="box-footer">
						<div class="row">
							<div class="col-sm-3 col-xs-6">
								<div class="description-block border-right">
									<span class="description-percentage text-green"><i class="fa fa-caret-up"></i></span>
									<h5 class="description-header">${{ $cashbook->revenue ?? 0 }}</h5>
									<span class="description-text">TOTAL REVENUE</span>
								</div>
							</div>
							<div class="col-sm-3 col-xs-6">
								<div class="description-block border-right">
									<span class="description-percentage text-red"><i class="fa fa-caret-down"></i></span>

									<h5 class="description-header">${{ $cashbook->cost ?? 0 }}</h5>
									<span class="description-text">TOTAL CASH-OUT</span>
								</div>
							</div>
							<div class="col-sm-3 col-xs-6">
								<div class="description-block border-right">
									<span class="description-percentage text-yellow"><i class="fa fa-caret-right"></i></span>
									<h5 class="description-header">${{ $cashbook->revenue - $cashbook->cost }}</h5>
									<span class="description-text">REMAINING AMOUNT</span>
								</div>
							</div>
							<div class="col-sm-3 col-xs-6">
								<div class="description-block">
									<span class="description-percentage text-yellow"><i class="fa fa-caret-right"></i></span>
									@if($cashbook->revenue)
									<h5 class="description-header">{{ round(($cashbook->revenue - $cashbook->cost)*100/$cashbook->revenue, 2) ?? 0 }}%</h5>
									@else
									<h5 class="description-header">0%</h5>
									@endif
									<span class="description-text">REMAINING PERCENTAGE</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--Browser-->
			<div class="col-12 col-md-6">
				<div class="box box-default">
					<div class="box-header with-border">
						<h3 class="box-title">Browser Usage</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse">
								<i class="fa fa-minus"></i>
							</button>
							<button type="button" class="btn btn-box-tool" data-widget="remove">
								<i class="fa fa-times"></i>
							</button>
						</div>
					</div>
					<!-- /.box-header -->
					<div class="box-body">
						<div class="row">
							<div class="col-8">
								<div class="chart-responsive">
									<canvas id="pieChart"></canvas>
								</div>
								<!-- ./chart-responsive -->
							</div>
							<!-- /.col -->
							<div class="col-4">
								<ul class="chart-legend clearfix">
									@php($colors = ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'info', 'warning'])
									@foreach($browsers as $key => $value)
									<li><i class="fa fa-circle-o text-{{ array_shift($colors) }}"></i> {{ $key }}</li>
									@endforeach
								</ul>
							</div>
							<!-- /.col -->
						</div>
						<!-- /.row -->
					</div>
					<!-- /.box-body -->
				</div>
				<!-- /.box -->
			</div>
			<!--Browser-->
			<div class="col-12 col-md-6">
				<div class="box box-default">
					<div class="box-header with-border">
						<h3 class="box-title">Computer Vs Mobile</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse">
								<i class="fa fa-minus"></i>
							</button>
							<button type="button" class="btn btn-box-tool" data-widget="remove">
								<i class="fa fa-times"></i>
							</button>
						</div>
					</div>
					<!-- /.box-header -->
					<div class="box-body">
						<div class="row">
							<div class="col-8">
								<div class="chart-responsive">
									<canvas id="pieChart-device"></canvas>
								</div>
								<!-- ./chart-responsive -->
							</div>
							<!-- /.col -->
							<div class="col-4">
								<ul class="chart-legend clearfix">
									@php($colors = ['success', 'info', 'danger'])
									@foreach($devices as $key => $value)
									<li><i class="fa fa-circle-o text-{{ array_shift($colors) }}"></i> {{ $key }}</li>
									@endforeach
								</ul>
							</div>
							<!-- /.col -->
						</div>
						<!-- /.row -->
					</div>
					<!-- /.box-body -->
				</div>
				<!-- /.box -->
			</div>
			@if(isset($view))
			<div class="col-12 col-md-6">
				<div class="box box-info">
					<!-- Info Boxes Style 2 -->
					<div class="info-box bg-yellow">
						<span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>
						<div class="info-box-content">
							<span class="info-box-text">{{ $views[0]->name ?? '' }}</span>
							<span class="info-box-number">{{ $views[0]->view ?? 0 }}</span>
							<div class="progress">
							    @if($total_view)
								<div class="progress-bar" style="width: {{ $views[0]->view*100/$total_view }}%"></div>
								@else
								<div class="progress-bar" style="width: 0%"></div>
								@endif
							</div>
							<span class="progress-description">{{ $views[0]->description ?? '' }}</span>
						</div>
						<!-- /.info-box-content -->
					</div>
					<!-- /.info-box -->
					<div class="info-box bg-green">
						<span class="info-box-icon"><i class="ion ion-ios-heart-outline"></i></span>
						<div class="info-box-content">
							<span class="info-box-text">{{ $views[1]->name ?? '' }}</span>
							<span class="info-box-number">{{ $views[1]->view ?? 0 }}</span>
							<div class="progress">
							    @if($total_view)
								<div class="progress-bar" style="width: {{ $views[1]->view*100/$total_view }}%"></div>
								@else
								<div class="progress-bar" style="width: 0%"></div>
								@endif
							</div>
							<span class="progress-description">{{ $views[1]->description ?? '' }}</span>
						</div>
						<!-- /.info-box-content -->
					</div>
					<!-- /.info-box -->
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="box box-info">
					<div class="info-box bg-red">
						<span class="info-box-icon"><i class="ion ion-ios-cloud-download-outline"></i></span>
						<div class="info-box-content">
							<span class="info-box-text">{{ $views[2]->name ?? '' }}</span>
							<span class="info-box-number">{{ $views[2]->view ?? 0 }}</span>
							<div class="progress">
							    @if($total_view)
								<div class="progress-bar" style="width: {{ $views[2]->view*100/$total_view }}%"></div>
								@else
								<div class="progress-bar" style="width: 0%"></div>
								@endif
							</div>
							<span class="progress-description">{{ $views[2]->description ?? '' }}</span>
						</div>
						<!-- /.info-box-content -->
					</div>
					<!-- /.info-box -->
					<div class="info-box bg-aqua">
						<span class="info-box-icon"><i class="ion-ios-chatbubble-outline"></i></span>
						<div class="info-box-content">
							<span class="info-box-text">{{ $views[3]->name ?? '' }}</span>
							<span class="info-box-number">{{ $views[3]->view ?? 0 }}</span>
							<div class="progress">
							@if($total_view)
							<div class="progress-bar" style="width: {{ $views[3]->view*100/$total_view }}%"></div>
							@else
							<div class="progress-bar" style="width: 0%"></div>
							@endif
							</div>
							<span class="progress-description">{{ $views[3]->description ?? '' }}</span>
						</div>
						<!-- /.info-box-content -->
					</div>
				<!-- /.info-box -->
				</div>
			</div>
			@endif
        </div>
        <!-- /.row -->
    </div>
	<!-- /.col -->
</div>
@endsection
@section('style')
	<!-- Ionicons -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
@endsection
@section('script')
	<!-- InputMask -->
	<script src="https://adminlte.io/themes/AdminLTE/bower_components/chart.js/Chart.js"></script>
	<script>
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$(function () {
		/* ChartJS
		 * -------
		 * Here we will create a few charts using ChartJS
		 */

		//--------------
		//- AREA CHART -
		//--------------

		// Get context with jQuery - using jQuery's .get() method.
		var areaChartCanvas = $('#areaChart').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var areaChart       = new Chart(areaChartCanvas);

		var chartData = {
		  labels  : [],
		  datasets: [
			{
			  label               : 'Last Year',
			  fillColor           : 'rgba(210, 214, 222, 1)',
			  strokeColor         : 'rgba(210, 214, 222, 1)',
			  pointColor          : 'rgba(210, 214, 222, 1)',
			  pointStrokeColor    : '#c1c7d1',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(220,220,220,1)',
			  data                : []
			},
			{
			  label               : 'This Year',
			  fillColor           : 'rgba(60,141,188,0.9)',
			  strokeColor         : 'rgba(60,141,188,0.8)',
			  pointColor          : '#3b8bba',
			  pointStrokeColor    : 'rgba(60,141,188,1)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(60,141,188,1)',
			  data                : []
			}
		  ]
		};
		var areaChartData = chartData;
		areaChartData.labels = [@foreach($traffic['this_year'] as $item) months[{{ $item['month'] }}-1], @endforeach];
		areaChartData.datasets[0].data = [@foreach($traffic['last_year'] as $item) {{ $item['total'] }}, @endforeach];
		areaChartData.datasets[1].data = [@foreach($traffic['this_year'] as $item) {{ $item['total'] }}, @endforeach];

		var areaChartOptions = {
		  //Boolean - If we should show the scale at all
		  showScale               : true,
		  //Boolean - Whether grid lines are shown across the chart
		  scaleShowGridLines      : false,
		  //String - Colour of the grid lines
		  scaleGridLineColor      : 'rgba(0,0,0,.05)',
		  //Number - Width of the grid lines
		  scaleGridLineWidth      : 1,
		  //Boolean - Whether to show horizontal lines (except X axis)
		  scaleShowHorizontalLines: true,
		  //Boolean - Whether to show vertical lines (except Y axis)
		  scaleShowVerticalLines  : true,
		  //Boolean - Whether the line is curved between points
		  bezierCurve             : true,
		  //Number - Tension of the bezier curve between points
		  bezierCurveTension      : 0.3,
		  //Boolean - Whether to show a dot for each point
		  pointDot                : false,
		  //Number - Radius of each point dot in pixels
		  pointDotRadius          : 4,
		  //Number - Pixel width of point dot stroke
		  pointDotStrokeWidth     : 1,
		  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		  pointHitDetectionRadius : 20,
		  //Boolean - Whether to show a stroke for datasets
		  datasetStroke           : true,
		  //Number - Pixel width of dataset stroke
		  datasetStrokeWidth      : 2,
		  //Boolean - Whether to fill the dataset with a color
		  datasetFill             : true,
		  //String - A legend template
		  legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		  //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		  maintainAspectRatio     : true,
		  //Boolean - whether to make the chart responsive to window resizing
		  responsive              : true
		};

		//Create the line chart
		areaChart.Line(areaChartData, areaChartOptions);

		//-------------
		//- LINE CHART -
		//--------------
		var lineChartCanvas          = $('#lineChart').get(0).getContext('2d');
		var lineChart                = new Chart(lineChartCanvas);
		var lineChartOptions         = areaChartOptions;
		lineChartOptions.datasetFill = false;
		lineChart.Line(areaChartData, lineChartOptions);

		//-------------
		//- PIE CHART -
		//-------------
		// Get context with jQuery - using jQuery's .get() method.
		var pieOptions     = {
		  //Boolean - Whether we should show a stroke on each segment
		  segmentShowStroke    : true,
		  //String - The colour of each segment stroke
		  segmentStrokeColor   : '#fff',
		  //Number - The width of each segment stroke
		  segmentStrokeWidth   : 2,
		  //Number - The percentage of the chart that we cut out of the middle
		  percentageInnerCutout: 50, // This is 0 for Pie charts
		  //Number - Amount of animation steps
		  animationSteps       : 100,
		  //String - Animation easing effect
		  animationEasing      : 'easeOutBounce',
		  //Boolean - Whether we animate the rotation of the Doughnut
		  animateRotate        : true,
		  //Boolean - Whether we animate scaling the Doughnut from the centre
		  animateScale         : false,
		  //Boolean - whether to make the chart responsive to window resizing
		  responsive           : true,
		  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		  maintainAspectRatio  : true,
		  //String - A legend template
		  legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
		};
		var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
		var colors = ['#3490dc', '#38c172', '#6cb2eb', '#ffed4a', '#e3342f', '#6c757d', '#6cb2eb', '#ffed4a'];
		var PieData        = [];
		@foreach($browsers as $key => $value)
			var entry = {
				value    : {{ $value }},
				color    : colors.shift(),
				highlight: '#888888',
				label    : '{{ $key }}'
			};
			PieData.push(entry);
		@endforeach
		var pieChart       = new Chart(pieChartCanvas);
		pieChart.Doughnut(PieData, pieOptions);

		var pieChartDeviceCanvas = $('#pieChart-device').get(0).getContext('2d');
		var colors = ['#38c172', '#ffed4a', '#e3342f'];
		var PieData        = [];
		@foreach($devices as $key => $value)
			var entry = {
				value    : {{ $value }},
				color    : colors.shift(),
				highlight: '#888888',
				label    : '{{ $key }}'
			};
			PieData.push(entry);
		@endforeach
		var pieChart       = new Chart(pieChartDeviceCanvas);
		pieChart.Doughnut(PieData, pieOptions);

		//Create pie or douhnut chart
		// You can switch between pie and douhnut using the method below.

		//-------------
		//- BAR CHART -
		//-------------
		areaChartData.datasets[0].data = [@foreach($orders['last_year'] as $item) {{ $item['total'] }}, @endforeach];
		areaChartData.datasets[1].data = [@foreach($orders['this_year'] as $item) {{ $item['total'] }}, @endforeach];
		var barChartCanvas                   = $('#barChart').get(0).getContext('2d');
		var barChart                         = new Chart(barChartCanvas);
		var barChartData                     = areaChartData;
		barChartData.datasets[1].fillColor   = '#00a65a';
		barChartData.datasets[1].strokeColor = '#00a65a';
		barChartData.datasets[1].pointColor  = '#00a65a';
		var barChartOptions                  = {
		  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		  scaleBeginAtZero        : true,
		  //Boolean - Whether grid lines are shown across the chart
		  scaleShowGridLines      : true,
		  //String - Colour of the grid lines
		  scaleGridLineColor      : 'rgba(0,0,0,.05)',
		  //Number - Width of the grid lines
		  scaleGridLineWidth      : 1,
		  //Boolean - Whether to show horizontal lines (except X axis)
		  scaleShowHorizontalLines: true,
		  //Boolean - Whether to show vertical lines (except Y axis)
		  scaleShowVerticalLines  : true,
		  //Boolean - If there is a stroke on each bar
		  barShowStroke           : true,
		  //Number - Pixel width of the bar stroke
		  barStrokeWidth          : 2,
		  //Number - Spacing between each of the X value sets
		  barValueSpacing         : 5,
		  //Number - Spacing between data sets within X values
		  barDatasetSpacing       : 1,
		  //String - A legend template
		  legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		  //Boolean - whether to make the chart responsive
		  responsive              : true,
		  maintainAspectRatio     : true
		};

		barChartOptions.datasetFill = false;
		barChart.Bar(barChartData, barChartOptions);
	});
</script>
@endsection
