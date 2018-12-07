<template>
    <q-page>
        <DetailSection1/>
        <DetailSection2/>
        <DetailSection3/>
    </q-page>
</template>

<script>
import DetailSection1 from '../components/ProductComponents/ProductDetail'
import DetailSection2 from '../components/ProductComponents/ProductDetailSection2'
import DetailSection3 from '../components/ProductComponents/ProductDetailSection3'
export default {
    components: {
        DetailSection1,
        DetailSection2,
        DetailSection3
    }
}
</script>


