<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
		<!-- Sidebar user panel -->
		<div class="user-panel">
			<div class="pull-left image" style="height:35px">
				<img src="/assets/profile/{{ $user->photo }}" class="rounded-circle" alt="User Image">
			</div>
			<div class="pull-left info">
				<p>{{ $user->name ?? '' }}</p>
				<a href="#"><i class="fa fa-circle text-success"></i> {{ __('Online') }}</a>
			</div>
		</div>
		<!-- search form -->
		<form action="#" method="get" class="sidebar-form">
			<div class="input-group">
				<input type="text" name="q" class="form-control border-0" placeholder="Search...">
				<span class="input-group-btn">
					<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
				</span>
			</div>
		</form>
		<!-- /.search form -->
		<ul class="sidebar-menu" data-widget="tree">
			<li class="header"></li>
			<li class="{{ Request::is('admin/dashboard') ? 'active' : '' }}">
				<a href="{{ route('dashboard') }}">
					<i class="fa fa-dashboard"></i><span>{{ __('Dashboard') }}</span>
				</a>
			</li>
			@user
			<li class="{{ Request::is('admin/orders*') ? 'active' : '' }}">
				<a href="{{ route('orders.user') }}"><i class="fa fa-shopping-cart"></i><span>{{ __('My Orders') }}</span></a>
			</li>
			@enduser
			<li class="treeview {{ Request::is('admin/orders*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa  fa-shopping-cart" aria-hidden="true"></i> <span>Order</span>
					<span class="pull-right-container">
						<i class="fa fa-angle-left pull-right"></i>
						<small><span class="badge badge-danger">{{ $incomplete_for_admin ?? 0 }}</span></small>
					</span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/orders-incomplete') ? 'active' : '' }}"><a href="{{ route('orders.incomplete') }}"><i class="fa fa-circle-o"></i>Incomplete Orders <small class="label pull-right"><span class="badge badge-danger">{{ $incomplete_for_admin ?? 0 }}</span></small></a></li>
					<li class="{{ Request::is('admin/orders') ? 'active' : '' }}"><a href="{{ route('orders.index') }}"><i class="fa fa-circle-o"></i> All Orders</a></li>
				</ul>
			</li>
			@moderator(Order)
			<li class="{{ Request::is('admin/cashbooks') ? 'active' : '' }}">
				<a href="{{ route('cashbooks.index') }}"><i class="fa fa-bell"></i><span>{{ __('Cashbook') }}</span></a>
			</li>
			@endmoderator
			@moderator(Product)
			<li class="treeview {{ Request::is('admin/manage-products*') || Request::is('admin/manage-products/create') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-product-hunt" aria-hidden="true"></i> <span>Product</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/manage-products') ? 'active' : '' }}"><a href="{{ route('manage-products.index') }}"><i class="fa fa-circle-o"></i> Manage Product</a></li>
					<li class="{{ Request::is('admin/manage-products/create') ? 'active' : '' }}"><a href="{{ route('manage-products.create') }}"><i class="fa fa-circle-o"></i> Add New Product</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Notification)
			<li class="treeview {{ Request::is('admin/notifications*') ? 'active' : '' }}" data-toggle="collapse" href="#lm-email">
				<a href="#">
					<i class="fa fa-bell"></i><span>{{ __('Notification') }}</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu {{ Request::is('admin/notifications*') || Request::is('admin/requested-more-infos*') || Request::is('admin/make-an-offers*') ? 'show' : '' }}">
					@moderator(Notification)
					<li class="{{ Request::is('admin/notifications-all') ? 'active' : '' }}"><a href="{{ route('notifications.all') }}"><i class="fa fa-circle-o"></i> {{ __('All Notifications') }}</a></li>
					<li class="{{ Request::is('admin/notifications/create') ? 'active' : '' }}"><a href="{{ route('notifications.create') }}"><i class="fa fa-circle-o"></i> {{ __('Send Notification') }}</a></li>
					@endmoderator
					<li class="{{ Request::is('admin/notifications') ? 'active' : '' }}"><a href="{{ route('notifications.index') }}"><i class="fa fa-circle-o"></i> {{ __('My Notifications') }}</a></li>
				</ul>
			</li>
			@else
			<li class="{{ Request::is('admin/notifications') ? 'active' : '' }}">
				<a href="{{ route('notifications.index') }}"><i class="fa fa-bell"></i><span>{{ __('My Notifications') }}</span></a>
			</li>
			@endmoderator
			<li class="treeview {{ Request::is('admin/users*') ? 'active' : '' }}">
				<a href="#">
					@moderator(User)
					<i class="fa fa-user"></i><span>{{ __('User Management') }}</span>
					@else
					<i class="fa fa-user"></i><span>{{ __('Profile') }}</span>
					@endmoderator
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu {{ Request::is('admin/users*') ? 'show' : '' }}">
					<li class="{{ Request::route()->getName() == 'users.edit' ? 'active' : '' }}"><a href="{{ route('users.edit', $user->id) }}"><i class="fa fa-circle-o"></i> {{ __('My Profile') }}</a></li>
					@moderator(User)
					<li class="{{ Request::route()->getName() == 'users.index' ? 'active' : '' }}"><a href="{{ route('users.index') }}"><i class="fa fa-circle-o"></i> {{ __('All Users') }}</a></li>
					@endmoderator
					<li><a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-circle-o"></i> {{ __('Logout') }}</a></li>
				</ul>
			</li>
			<li class="{{ Request::is('admin/chat') ? 'active' : '' }}">
				<a href="{{ route('chats.index') }}"><i class="fa fa-envelope"></i><span>{{ __('Chat') }}</span></a>
			</li>
			@moderator(Product)
			<li class="treeview {{ Request::is('admin/blogs*') || Request::is('admin/manage-blogs') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-product-hunt" aria-hidden="true"></i> <span>Blog</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/manage-blogs') ? 'active' : '' }}"><a href="{{ route('manage-blogs') }}"><i class="fa fa-circle-o"></i> Manage Blog</a></li>
					<li class="{{ Request::is('admin/blogs/create') ? 'active' : '' }}"><a href="{{ route('blogs.create') }}"><i class="fa fa-circle-o"></i> Create New Post</a></li>
				</ul>
			</li>
			@endmoderator
            <li class="treeview {{ Request::is('admin/stocks*') ? 'active' : '' }}">
                <a href="#">
                    <i class="fa fa-houzz" aria-hidden="true"></i> <span>Stock</span>
                    <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                </a>
                <ul class="treeview-menu">
                    <li class="{{ Request::is('admin/stocks') ? 'active' : '' }}"><a href="{{ route('stocks.index') }}"><i class="fa fa-circle-o"></i> Manage Stock</a></li>
                    <li class="{{ Request::is('admin/stocks-sent') ? 'active' : '' }}"><a href="{{ route('stocks-sent') }}"><i class="fa fa-circle-o"></i> Stock Sent</a></li>
                    <li class="{{ Request::is('admin/stocks/create') ? 'active' : '' }}"><a href="{{ route('stocks.create') }}"><i class="fa fa-circle-o"></i> Add New Stock</a></li>
                </ul>
            </li>
			@moderator(Supplier)
			<li class="treeview {{ Request::is('admin/suppliers*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-industry" aria-hidden="true"></i> <span> {{ __('Supplier') }}</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/suppliers') ? 'active' : '' }}"><a href="{{ route('suppliers.index') }}"><i class="fa fa-circle-o"></i> Manage Supplier</a></li>
					<li class="{{ Request::is('admin/suppliers/create') ? 'active' : '' }}"><a href="{{ route('suppliers.create') }}"><i class="fa fa-circle-o"></i> Add New Supplier</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Category)
			<li class="treeview {{ Request::is('admin/categories*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-list" aria-hidden="true"></i> <span>Category</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/categories') ? 'active' : '' }}"><a href="{{ route('categories.index') }}"><i class="fa fa-circle-o"></i> Manage Category</a></li>
					<li class="{{ Request::is('admin/categories/create') ? 'active' : '' }}"><a href="{{ route('categories.create') }}"><i class="fa fa-circle-o"></i> Add New Category</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Payment)
			<li class="treeview {{ Request::is('admin/payments*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-credit-card" aria-hidden="true"></i> <span>Payment</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/payments') ? 'active' : '' }}"><a href="{{ route('payments.index') }}"><i class="fa fa-circle-o"></i> Manage Payment</a></li>
					<li class="{{ Request::is('admin/payments/create') ? 'active' : '' }}"><a href="{{ route('payments.create') }}"><i class="fa fa-circle-o"></i> Add New Payment</a></li>
				</ul>
			</li>
			@endmoderator
            @moderator(Payment)
            <li class="treeview {{ Request::is('admin/promos*') ? 'active' : '' }}">
                <a href="#">
                    <i class="fa fa-credit-card" aria-hidden="true"></i> <span>Promo</span>
                    <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                </a>
                <ul class="treeview-menu">
                    <li class="{{ Request::is('admin/promos') ? 'active' : '' }}"><a href="{{ route('promos.index') }}"><i class="fa fa-circle-o"></i> Manage Promo</a></li>
                    <li class="{{ Request::is('admin/promos/create') ? 'active' : '' }}"><a href="{{ route('promos.create') }}"><i class="fa fa-circle-o"></i> Add New Promo</a></li>
                </ul>
            </li>
            @endmoderator
			@moderator(Unit)
			<li class="treeview {{ Request::is('admin/units*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-balance-scale" aria-hidden="true"></i> <span>Unit</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/units') ? 'active' : '' }}"><a href="{{ route('units.index') }}"><i class="fa fa-circle-o"></i> Manage Unit</a></li>
					<li class="{{ Request::is('admin/units/create') ? 'active' : '' }}"><a href="{{ route('units.create') }}"><i class="fa fa-circle-o"></i> Add New Unit</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Location)
			<li class="treeview {{ Request::is('admin/regions*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-address-card" aria-hidden="true"></i> <span>Location</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/regions') ? 'active' : '' }}"><a href="{{ route('regions.index') }}"><i class="fa fa-circle-o"></i> Manage Region</a></li>
					<li class="{{ Request::is('admin/regions/create') ? 'active' : '' }}"><a href="{{ route('regions.create') }}"><i class="fa fa-circle-o"></i> Add New Region</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Size)
			<li class="treeview {{ Request::is('admin/sizes*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-arrows-alt" aria-hidden="true"></i> <span>Size</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/sizes') ? 'active' : '' }}"><a href="{{ route('sizes.index') }}"><i class="fa fa-circle-o"></i> Manage Size</a></li>
					<li class="{{ Request::is('admin/sizes/create') ? 'active' : '' }}"><a href="{{ route('sizes.create') }}"><i class="fa fa-circle-o"></i> Add New Size</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Color)
			<li class="treeview {{ Request::is('admin/colors*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-paint-brush" aria-hidden="true"></i> <span>Color</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/colors') ? 'active' : '' }}"><a href="{{ route('colors.index') }}"><i class="fa fa-circle-o"></i> Manage Color</a></li>
					<li class="{{ Request::is('admin/colors/create') ? 'active' : '' }}"><a href="{{ route('colors.create') }}"><i class="fa fa-circle-o"></i> Add New Color</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Order Status)
			<li class="treeview {{ Request::is('admin/order-statuses*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-info-circle" aria-hidden="true"></i> <span>Order Status</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/order-statuses') ? 'active' : '' }}"><a href="{{ route('order-statuses.index') }}"><i class="fa fa-circle-o"></i> Manage Order Status</a></li>
					<li class="{{ Request::is('admin/order-statuses/create') ? 'active' : '' }}"><a href="{{ route('order-statuses.create') }}"><i class="fa fa-circle-o"></i> Add New Status</a></li>
				</ul>
			</li>
			@endmoderator
			@moderator(Shipper)
			<li class="treeview {{ Request::is('admin/shippers*') ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-ship" aria-hidden="true"></i> <span>Shipper</span>
					<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ Request::is('admin/shippers') ? 'active' : '' }}"><a href="{{ route('shippers.index') }}"><i class="fa fa-circle-o"></i> Manage Shipper</a></li>
					<li class="{{ Request::is('admin/shippers/create') ? 'active' : '' }}"><a href="{{ route('shippers.create') }}"><i class="fa fa-circle-o"></i> Add New Shipper</a></li>
				</ul>
			</li>
			@endmoderator
			@admin
			<li class="{{ Request::is('admin/permissions') ? 'active' : '' }}">
				<a href="{{ route('permissions.index') }}"><i class="fa fa-lock"></i><span>{{ __('Permission') }}</span></a>
			</li>
			@endadmin
		</ul>
	</section>
	<!-- /.sidebar -->
</aside>
