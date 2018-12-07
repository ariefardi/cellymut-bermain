<template>
	<q-layout>
			<q-page-container>
					<div class="column wrap items-center">
							<img :src="logo" alt="">
							<div class="row wrap form" style="width:100%">
								<div class="col-md-6 col-xs-12 col-sm-12 section1">
									<div class="column items-center">
										<p class="text-auth font-size-header-48">Sign In</p>
										<div>
											<label  class="forLabel" for="pass">Email Address:</label><br>
    									<input type="text" id="pass">	
										</div>
										<div>
											<label class="forLabel" for="pass">Password:</label><br>
											<input type="text" id="pass">	
										</div><br><br>
										<q-btn label="Sign In" class="btn-auth" /><br><br>
										<p class="text-auth">Forgot Your Password</p>
										<p class="text-auth">Or</p>
										
										<q-btn icon="fab fa-facebook-f" label="Sign In With Facebook" class="btn-fb" />
									</div>
								</div>
									<div class="col-md-6 col-xs-12 col-sm-12">
												<div class="column items-center">
										<p class="text-auth font-size-header-48">Sign Up</p>
										<div>
											<label  class="forLabel" for="pass">Email Address:</label><br>
    									<input type="text" id="pass">	
										</div>
											<div>
											<label  class="forLabel" for="pass">Phone Number:</label><br>
    									<input type="text" id="pass">	
										</div>
										<div>
											<label class="forLabel" for="pass">Password:</label><br>
											<input type="text" id="pass">	
										</div><br><br>
										<div>
													<input type="checkbox"> <label class="text-auth"> I have read Terms and Conditions</label>
										<!-- <p class="text-auth">I have read Terms and Conditions</p> -->
										</div>
								
										<br>
										<q-btn label="Register" class="btn-auth" />									
									</div>
								</div>
							</div>
					</div>
			</q-page-container>
	</q-layout>
</template>
<script>
import {logo} from '../config/images.js'
export default {
  data (){
		return{
			logo
		}
	}
}
</script>

<style scoped>
input[type=text] {
  width: 400px;
  padding: 12px 20px;
	margin-top: 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.forLabel{
	width: 120px;
  height: 21px;
  font-family: 'HelveticaNeue',sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.06;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
}
.btn-auth{
	 width: 174px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #766a77;
	color: white
}
.btn-fb{
	width: 40%;
	height: 46px;
	border-radius: 20px;
	box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
	background-color: #496cb2;
	color: white
}
.section1{
	border-right: 1px dotted;
	color:  #766a77;
}
.form{
	margin-top:60px;
}
@media only screen and (max-width: 400px){
	input[type=text] {
  width: 100%;
}
}

</style>

