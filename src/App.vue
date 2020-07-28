<template>
<div class="app">
	<div class="carts">
		<div class="compCarts">
			<p>карты компьютера</p>
			<ActCards />
		</div>

		<Bit />

		<div class="myCarts">
			<p>Ваши карты</p>
			<PlCards />
		</div>
	</div>
	<div class="deck">
		<p>24</p>
		<img class="deckImg" src="./assets/images/13_2.jpg" alt="">	
	</div>
</div>
</template>

<script>
import PlCards from '@/components/PlCards.vue'
import ActCards from '@/components/ActCards.vue'
import Bit from '@/components/Bit.vue'


export default {
	name: 'App',
  	components: {
	PlCards,
	ActCards,
	Bit
  }

}
</script>

<style lang="scss">
@import './styles/reset.css';
@import './styles/fonts.css';

.app {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #233f23;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
	// width: 1280px;
	max-width: 1280px;
	
	margin: 20px auto;
}

.carts {
	width: 550px;
	max-width: 550px;
	padding: 20px;

}

.deckImg {
	padding: 0 20px;

}



</style>
