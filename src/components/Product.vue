<template>
  <div class="product">
    <div class="product-bg"></div>
    <div class="product-content container-fluid">
      <div class="product-content-text">
        <div class="row">
          <div class="title col-sm-4">
            <p>BPLAY GAME</p>
            <p>OUR PRODUCTS</p>
          </div>
          <div class="text col-sm-8">
            <p>
              BPlay’s high quality iGaming Platform offers a complete solution
              for your casino. Get the full White Label turnkey solution or the
              Seamless API with our comprehensive selection of games. Through
              our global network of premium partners such as Vivo Gaming, SBTech
              and HoGaming you will have access to the best Live Casino,
              Sportsbook, Slots, Table Games, Number Games and Fishing Games on
              the market.
            </p>
          </div>
        </div>
      </div>

      <div class="product-content-list">
        <div class="row">
          <div
            class="product-content-item col-md-4"
            v-for="product in listProducts"
            :key="product.id"
          >
            <img :src="require(`../assets/images/${product.image}`)" alt="" />
            <div class="product-content-item-name">
              {{ product.name }}
            </div>
            <p>{{ product.information }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  setup() {
    const listProducts = ref([
      {
        id: 1,
        name: 'Live Casino',
        information: 'Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino',
        image: 'casino1.png',
      },
      {
        id: 2,
        name: 'Fishing Game',
        information: 'BPlay Fishing 2D, BPlay Fishing 3D',
        image: 'casino2.svg',
      },
      {
        id: 3,
        name: 'Sport Book',
        information: 'BTI Sportsbook, BPlay Sportsbook',
        image: 'casino3.svg',
      },
      {
        id: 4,
        name: 'Quick Number',
        information: 'Keno, Number Games, Lottery',
        image: 'casino4.svg',
      },
      {
        id: 5,
        name: 'White Label',
        information: 'White Label',
        image: 'casino5.svg',
      },
      {
        id: 6,
        name: 'Slots',
        information: 'BPlay Slots, Jackpot Slots',
        image: 'casino6.svg',
      },
      {
        id: 7,
        name: 'Seamless API',
        information: 'Seamless API',
        image: 'casino7.svg',
      },
      {
        id: 8,
        name: 'Full Package',
        information: 'Full Package',
        image: 'casino8.svg',
      },
      {
        id: 9,
        name: 'Table Game',
        information: 'Table Game',
        image: 'casino9.svg',
      },
    ]);

    return {
      listProducts,
    };
  },
};
</script>

<style>
.product {
  width: 100%;
  position: relative;
  background: url(../assets/images/bg_wave.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 2673px;
}
.product-bg {
  background: url(../assets/images/bg_gambling.svg);
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1a1c25;
  transform: translateY(100px);
}
.product-content {
  max-width: 1400px;
  transform: translateY(-300px);
}
.product-content-text {
  color: #fff;
}
.product-content-text .title p:first-child {
  font-size: 24px;
  font-weight: 400;
  line-height: 28.18px;
  letter-spacing: 10px;
  text-align: left;
  color: #ff3232;
  margin-bottom: 8px;
}
.product-content-text .title p:last-child {
  font-size: 48px;
  font-weight: 800;
  line-height: 56.35px;
  text-align: left;
}
.product-content-text .text p {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;
  color: #eaeaea;
}
.product-content-item img {
  width: 435px;
  height: 446px;
}
</style>
