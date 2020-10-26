<template>
	<div>
		<div class="height-55 p-2 bg-theme">
		<button id="left-menu-toggle">
			<svg style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="25px" height="25px" viewBox="0 0 100 100">
				<path d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"></path>
			</svg>
		</button>
		</div>
		<div id="left-menu" class="bg-success">
			<div class="">
			</div>
		</div>
		<div class="clearfix overflow-hidden">
			<router-view></router-view>
		</div>
	</div>
</template>