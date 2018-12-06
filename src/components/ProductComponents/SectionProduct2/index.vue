<template>
    <div class="section2"> 
			<div class="row">
				<div class="col-md-4 col-xs-12 col-sm-12">
						<!-- <p class="pilihan">Pilihan Produk</p> -->
				</div>
				<div class="col-md-4 col-xs-12 col-sm-12">
					<div class="row wrap justify-center">

						<p class="pilihan">Pilihan Produk</p>
					</div>
				</div>
				<div class="col-md-4 col-xs-12 col-sm-12">
					<div class="row wrap justify-end left">
						<q-btn round color="grey-6" icon="arrow_back_ios" />
					<q-btn round color="grey-6" icon="arrow_forward_ios" />
					</div>
					
				</div>

			</div>

        <div class="column items-center">
					 	
					<div class="row">
						<div class="col-md-4 col-xs-12 col-sm-12">
								<div class="container">
									<img :src="pilihan1" alt=""  class="image1">
									<div class="mid-absolute">
											<p class="mid">monopoly cellymut</p>	
									<q-btn text-color="white" icon="shopping_cart" no-caps="true" class="btn-lanjut">
										Tambah ke Keranjang
									</q-btn>
									</div>
													
								</div>
								
						</div>
							<div class="col-md-4 col-xs-12 col-sm-12">
							<img :src="pilihan2" alt="" class="image">
						</div>
							<div class="col-md-4 col-xs-12 col-sm-12">
								<div class="container">
									<img :src="pilihan3" alt=""  class="image1">
									<p class="mid">coming soon</p>					
								</div>
								
						</div>
					</div>
        </div>
    </div>
</template>
<script>
import {pilihan1,pilihan2,pilihan3} from '../../../config/images.js'
export default {
	data(){
		return{
			pilihan1,
			pilihan2,
			pilihan3
		}
	}
}
</script>



<style scoped>
.section2{
		background-color: #e9e7f1;
		height: 500px;
		padding-top: 50px;
		
}
.pilihan{
	/* width: 321px; */
	/* margin-top:80px; */
  height: 57px;
  font-size: 48px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #766a77;
}
.image1{
	width: 100%;
	height: 100%;
	padding:30px;
	opacity: 0.5;
}
.image{
	width: 100%;
	height: 100%;
	padding: 30px;
}
.left{
	margin-right:25px
}
.list{
	margin-top:80px;
}
.mid{
	position: absolute;
  top: 50%;
  left: 50%;
	transform: translate(-50%, -50%);
	width: 234px;
	height: 38px;
	opacity: 0.89;
	font-size: 25px;
	font-weight: 500;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.22;
	letter-spacing: normal;
	text-align: center;
	color: #ec6e82;
}
.container{
	position: relative;
    text-align: center;
    color: white;
}
.btn-lanjut{
  margin-top:100px;
	width: 288px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background-color: #ec6e82;
}
.mid-absolute{
		position: absolute;
  top: 50%;
  left: 50%;
	transform: translate(-50%, -50%);
}
@media only screen and (max-width: 400px){
	.section2{
		height: 100%;
	}
}
</style>

