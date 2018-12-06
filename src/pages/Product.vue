<template>
	<q-page>
			<SectionProduct1/>
			<SectionProduct2/>
			<SectionProduct3/>
			<SectionProduct4/>

	</q-page>

</template>

<script>
import SectionProduct1 from '../components/ProductComponents/SectionProduct1'
import SectionProduct2 from '../components/ProductComponents/SectionProduct2'
import SectionProduct3 from '../components/ProductComponents/SectionProduct3'
import SectionProduct4 from '../components/ProductComponents/SectionProduct4'
export default {
	components: {
		SectionProduct1,
		SectionProduct2,
		SectionProduct3,
		SectionProduct4
	}
}
</script>

