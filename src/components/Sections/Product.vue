<template>
  <section id="item2">
    <div class="product">
      <!-- <div class="product-bg"></div> -->
      <div class="product-content">
        <div class="product-content-text">
          <div class="row">
            <div class="title col-xl-4">
              <p class="name">BPLAY GAME</p>
              <p class="section">OUR PRODUCTS</p>
            </div>
            <div class="text col-xl-8">
              <p>
                BPlay’s high quality iGaming Platform offers a complete solution
                for your casino. Get the full White Label turnkey solution or
                the Seamless API with our comprehensive selection of games.
                Through our global network of premium partners such as Vivo
                Gaming, SBTech and HoGaming you will have access to the best
                Live Casino, Sportsbook, Slots, Table Games, Number Games and
                Fishing Games on the market.
              </p>
            </div>
          </div>
        </div>

        <div class="product-content-list">
          <div class="row">
            <div
              class="product-content-item col-sm-4 col-6"
              v-for="product in products"
              :key="product.id"
            >
              <img
                :src="require(`../../assets/images/${product.image}`)"
                alt=""
              />
              <div class="product-content-item-name">
                <p>{{ product.name }}</p>
              </div>
              <p>{{ product.information }}</p>
            </div>
          </div>
        </div>

        <div class="product-content-slide">
          <Slider :products="products" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import Slider from '../Slider';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  components: { Slider },
  setup() {
    const products = ref([
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
      products,
    };
  },
};
</script>

<style>
.product {
  width: 100%;
  position: relative;
  background: url(../../assets/images/bg_gambling.png),
    url(../../assets/images/bg_wave.svg);
  background-position: top, center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100% auto, cover;
  height: auto;
  padding: 14.8125rem 0;
}
.product-content {
  padding: 0 16.25rem !important;
}
.product-content-text {
  color: #fff;
}
.product-content-list {
  margin-top: 5rem;
}
.product-content-item {
  margin-bottom: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.product-content-item img {
  max-width: 100%;
}
.product-content-item img:hover {
  transform: translateY(-10px);
  transition: all 0.5s;
  cursor: pointer;
}
.product-content-item-name {
  background: url('../../assets/images/bg_name_casino.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1.75rem auto 1.25rem;
  cursor: pointer;
}
.product-content-item .product-content-item-name p {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 35.22px;
  letter-spacing: 1px;
  color: #fff;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-content-item p {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 1px;
  font-family: 'Mulish', sans-serif;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
}
.product-content-slide {
  display: none;
}
@media only screen and (max-width: 1700px) {
  .product-content {
    padding: 0 8rem !important;
  }
}
@media only screen and (max-width: 1400px) {
  .product-content-item .product-content-item-name p {
    font-size: 1rem;
    height: 100%;
  }
}
@media only screen and (max-width: 960px) {
  .product {
    padding: 5.3125rem 0 1.25rem;
  }
  .product-content {
    padding: 0 1rem !important;
  }
}
@media only screen and (max-width: 576px) {
  .product-content-item-name p {
    font-size: 1rem !important;
    line-height: 18.78px !important;
    margin-bottom: 0;
    height: 2.085rem !important;
  }
  .product-content-list .row {
    justify-content: center;
  }
}
@media only screen and (max-width: 376px) {
  .product-content-list {
    display: none;
  }
  .product-content-slide {
    display: block;
    height: auto;
    margin-top: 3.1875rem;
  }
}
</style>
