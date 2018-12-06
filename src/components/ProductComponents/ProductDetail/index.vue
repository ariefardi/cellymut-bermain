<template>
	<div class="section1 row">
			<div class="col-md-7 col-xs-12 col-sm-12"> 
				<div class="container">
					<img  :src="ularTangga" width="100%" alt="">
					<div class="row wrap justify-around show">
						<div class="col-4">
							<img  :src="ularTangga" width="100px" height="87px" alt="" class="image">
						</div>
						<div class="col-4">
							<img  :src="pilihan3" width="100px" height="87px" alt="" class="image">
						</div>
							<div class="col-4">
							<img  :src="pilihan3" width="100px" height="87px" alt="" class="image">
						</div>
					</div>		
				</div>
				
			</div>
			<div class="col-md-5 col-xs-12 col-sm-12">
				<q-card flat>
					<q-card-title align="left" class="text-navbar">
						<h1 class="font-size-header-48 font-weight-normal">Ular Tangga Cellymut</h1>
						<h1 class="font-size-header-48 font-weight-normal">Rp500,000</h1>
					</q-card-title>
					<q-card-main class="row">
						<div class="row wrap col-3">
							<div class="column">
								<p class="text-navbar font-size-subheader-28 font-weight-normal">Size</p>
								<q-select
								v-model="select"
								:options="selectOptions"
								/>
							</div>
						</div>
						<div class="row wrap col-9">
							<div class="column">
								<p class="text-navbar font-size-subheader-28 font-weight-normal">Name</p>
									<!-- <q-input class="inputText" v-model="text" placeholder="Your Name" /> -->
									<input type="text" placeholder="Your Name" class="inputText">
							</div>
						</div>
					</q-card-main>
					<q-card-main>
						<div class="column">
						<p class="text-navbar font-size-subheader-28 font-weight-normal">Color</p>
						<div class="row">
							<div v-for="(color,index) in colors" :key=index>
								<img :src="color" width="35px" height="35px" alt="">
							</div>
						</div>	<br>
							<button class="light disabled btn-sold">Sold Out</button><br><br>
							<p>Included with the purchase of this product:</p>
							<ul>
								<li>
									Kartu tantangan
								</li>
								<li>
									Boneka Ular
								</li>
								<li>
									Boneka Dadu Kecil
								</li>
								<li>
									Kartu balita (untuk pembelian selimut ular tangga untuk anak balita)
								</li>
							</ul>

						</div>
					</q-card-main>
      	</q-card>
			</div>
	</div>
</template>
<script>
import {ularTangga,pilihan3, blush, cedar, charcoal, denim, dijon, flint, mullberry, mustard, ocean, orange, penny, red, roselight, rosewood, squash} from '../../../config/images.js'
export default {
	data(){
		return{
			ularTangga,
			pilihan3,
			selectOptions: [
				{
					label: 'Small',
				},
				{
					label: 'Medium',
				},
				{
					label: 'Large',
				}
			],
			colors: [
				blush,
				cedar,
				charcoal,
				denim,
				dijon,
				flint,
				mullberry,
				mustard,
				ocean,
				orange,
				penny,
				red,
				roselight,
				rosewood,
				squash
			]
		}
	}
}
</script>

<style scoped>
.section1{
	margin-top:120px;
	padding: 20px
} 
.inputText{
	width: 300px;
}
.btn-sold{
	width: 100px;
}
.show{
	position: absolute;
    bottom: 15px;
	right: 35px;
	padding: 10px
}
.container{
	position: relative;
    text-align: center;
    color: white;
}
.image{
	padding: 5px;
}
</style>

