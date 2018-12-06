<template>
	<div class="section1">
		<div class="row justify-center">
			<h1 class="font-size-header-48 font-weight-normal text-navbar">Game Tutorial Ular Tangga</h1>
		</div>
		<div class="row">
			<div class="col-md-6 col-xs-12 col-sm-12">
				
				<div class="column items-start right">
					<div>
						<p class="T1">Tutorial 1</p> 
						<p class="description">Pemain melempar dadu secara bergiliran, angka yang terbanyak, memainkan permainan
terlebih dahulu</p>
					</div>
					<div>
						<p class="T1">Tutorial 2</p>
						<p class="description">Pion dijalankan bergiliran sesuai dengan dadu ke kotak-kotak menurut arah panah</p>
					</div>
					<div>
						<p class="T1">Tutorial 3</p>
						<p class="description">Dimanapun pion berhenti, pemain dapat membeli hak sewa rumah atau bangunan, dan
						membayar sewa jika rumah atau bangunan tersebut telah dimiliki pemain lain</p>
					</div>
				</div>
					<div class="row justify-center">
						<q-btn text-color="white" icon-right="arrow_forward_ios" no-caps="true" class="btn-lanjut">
							Lebih Lanjut
						</q-btn>
					</div>
			</div>
			<div class="col-md-6 col-xs-12 col-sm-12">
				
     <img class="image" :src="gameTutorial2" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import {imageProduct1, gameTutorial2} from '../../../config/images.js'
export default {
	data(){
		return{
			gameTutorial2
		}
	}
}
</script>
<style scoped>
.image{
	width: 100%;
	height: 100%;
}
.section1{
	padding-top: 30px;
	background: #cfe1e3;
	height: 100%;
}
.test{
	padding: 0
}
.T1{
 width: 137px;
  height: 45px;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #6e819e;
}

.right{
	margin-left: 50px;
	margin-top: 50px;
}
.description{
	/* width: 709px; */
  /* width: 727px; */
  height: 48px;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #6e819e
}
.btn-lanjut{
	width: 245px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
	background-color: #ec6e82;
	margin-top:50px;
}
</style>

