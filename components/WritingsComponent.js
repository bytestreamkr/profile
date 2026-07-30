Vue.component('writings-component', {
	props:['writings'],
	template:`
	<div>
		<div v-for="(book, idx) in writings" :key="book.id" class="row mt-4 mb-4 border rounded py-3">
			<div class="col-12 col-md-2 div-book-img">
				<span class="span_link2" @click="$emit('openurl', book.url)"><img :src="book.img"></span>
			</div>
			<div class="col-12 col-md-10">
				<h5>
				<span class="span_link3" @click="$emit('openurl', book.url)">{{book.title}} [ {{book.pub_date}} 출간 ]</span>
				</h5>
				<p>{{book.detail}}</p>
			</div>
		</div>
	</div>
	`
});