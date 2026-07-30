Vue.component('site-item', {
	props:['site'],
	template:`
	<div class="col-12 col-md-3 col-sm-6 mb-3 px-2">
		<div class="card" style="width:100%;">
			<img :src="site.img" class="card-img-top" alt="...">
			<div class="card-body">
			<h5 class="card-title">
				<span class="span_link" :class="{ closed_site: !site.isopen }"  @click="$emit('openurl', site.url, site.isopen)">{{site.title}}</span>
			</h5>
			<p class="card-text">{{site.detail}}</p>
			</div>
		</div>
	</div>	
	`
});