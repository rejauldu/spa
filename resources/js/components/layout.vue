<template>
	<div>
		<div class="height-55 bg-theme navbar sticky-top">
			<router-link to="/" class="h-100"><img src="/assets/logo-bold.png" class="width-230 h-100 d-none d-md-inline" /></router-link>
			<button id="left-menu-toggle" class="btn btn-sm ml-md-3 border border-info">
				<svg style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="25px" height="25px" viewBox="0 0 100 100">
					<path d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"></path>
				</svg>
			</button>
			<form class="form-inline col" action="/action_page.php">
				<div class="input-group w-100 mx-md-5">
					<input type="text" class="form-control border-right-0 bg-theme-light text-theme focus-theme" placeholder="Search..">
					<div class="input-group-append cursor-pointer">
						<span class="input-group-text border-left-0 bg-theme-light px-2 px-md-3 px-lg-4">
							<svg style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="12px" height="12px" x="0px" y="0px" viewBox="0 0 100 100"><path d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"></path><path d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"></path></svg>
						</span>
					</div>
				</div>
			</form>
			<router-link to="/login" class="btn border border-info mr-md-3">
				<svg x="0px" y="0px" viewBox="0 0 535.5 535.5" style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="12px" height="12px">
					<g id="lock">
						<path d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51
							v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408
							c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51
							c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
					</g>
				</svg> Login
			</router-link>
		</div>
		<div id="left-menu" class="border">
			<div class="">
			</div>
		</div>
		<div class="clearfix overflow-hidden">
			<router-view></router-view>
		</div>
	</div>
</template>