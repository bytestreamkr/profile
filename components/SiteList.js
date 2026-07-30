Vue.component('site-list', {
	props:['sites'],
	template:`
		<div class="row mt-4">
			<site-item :site="site"
				v-for="site in sites"
				:key="site.id"
				@openurl="$emit('openurl', site.url, site.isopen)"
			></site-item>
		</div>
	`

});