<template>
    <div class="row section4" style="width:100%">
        <div class="col-md-6 col-xs-12 col-sm-12">
            <div class="row wrap justify-start">
                <p class="copy">© Copyright 2018 Cellymut</p>
            </div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12">
            <div class="row wrap justify-end right">
                <div class="col-md-1 col-xs-6 col-sm-6">
                      <img :src="facebook" alt="">
                </div>
                 <div class="col-md-1 col-xs-6 col-sm-6">
                      <img :src="instagram" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {facebook, instagram} from '../../../config/images.js'
export default {
    data(){
        return{
            facebook,
            instagram
        }
    }
}
</script>

<style scoped>
.section4{
    height: 100px;
}
.copy{
    position: absolute;
    margin-top: 40px;
    margin-left: 73px;
}
.right{
    /* position: absolute; */
    margin-top: 40px;
    margin-right: 73px;
}
@media only screen and (max-width: 400px){
    .right{
        margin-left: 126px;
        margin-top: 70px;
    }
}
</style>

