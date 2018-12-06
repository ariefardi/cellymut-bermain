<template>
	<div class="section1 row">
			<div class="col-7"> 
				<img  :src="ularTangga" alt="">
			</div>
			<div class="col-5">
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
									<q-input class="inputText" v-model="text" placeholder="Your Name" />
							</div>
						</div>
					</q-card-main>
					<q-card-main>
						<p class="text-navbar font-size-subheader-28 font-weight-normal">Color</p>
					</q-card-main>
      	</q-card>
			</div>
	</div>
</template>
<script>
import {ularTangga} from '../../../config/images.js'
export default {
	data(){
		return{
			ularTangga,
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
</style>

