<template>
  <div class="product" id="item2">
    <div class="product-bg"></div>
    <div class="product-content container-fluid">
      <div class="product-content-text">
        <div class="row">
          <div class="title col-lg-4">
            <p class="name">BPLAY GAME</p>
            <p class="section">OUR PRODUCTS</p>
          </div>
          <div class="text col-lg-8">
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
            class="product-content-item col-xxl-4 col-lg-6"
            v-for="product in products"
            :key="product.id"
          >
            <img :src="require(`../assets/images/${product.image}`)" alt="" />
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
</template>

<script>
import { ref } from "vue";
import Slider from "./Slider";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  components: { Slider },
  setup() {
    const products = ref([
      {
        id: 1,
        name: "Live Casino",
        information: "Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino",
        image: "casino1.png",
      },
      {
        id: 2,
        name: "Fishing Game",
        information: "BPlay Fishing 2D, BPlay Fishing 3D",
        image: "casino2.svg",
      },
      {
        id: 3,
        name: "Sport Book",
        information: "BTI Sportsbook, BPlay Sportsbook",
        image: "casino3.svg",
      },
      {
        id: 4,
        name: "Quick Number",
        information: "Keno, Number Games, Lottery",
        image: "casino4.svg",
      },
      {
        id: 5,
        name: "White Label",
        information: "White Label",
        image: "casino5.svg",
      },
      {
        id: 6,
        name: "Slots",
        information: "BPlay Slots, Jackpot Slots",
        image: "casino6.svg",
      },
      {
        id: 7,
        name: "Seamless API",
        information: "Seamless API",
        image: "casino7.svg",
      },
      {
        id: 8,
        name: "Full Package",
        information: "Full Package",
        image: "casino8.svg",
      },
      {
        id: 9,
        name: "Table Game",
        information: "Table Game",
        image: "casino9.svg",
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
  background: url(../assets/images/bg_wave.svg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
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
.product-content-list {
  margin-top: 80px;
}
.product-content-item {
  margin-bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.product-content-item img {
  width: 435px;
  height: 446px;
}
.product-content-item img:hover {
  transform: translateY(-10px);
  transition: all 0.5s;
  cursor: pointer;
}
.product-content-item-name {
  background: url("../assets/images/bg_name_casino.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 339px;
  height: 54px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 28px auto 20px;
  cursor: pointer;
}
.product-content-item .product-content-item-name p {
  font-size: 30px;
  font-weight: 700;
  line-height: 35.22px;
  letter-spacing: 1px;
  color: #fff;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-content-item p {
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  font-family: "Mulish", sans-serif;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
}
.product-content-slide {
  display: none;
}
@media only screen and (max-width: 992px) {
  .product-content-text .title p,
  .product-content-text .text p {
    text-align: center !important;
    margin-bottom: 51px;
  }
}
@media only screen and (max-width: 576px) {
  .product-content-item img {
    width: 280px !important;
    height: 270px;
  }
  .product-content-item {
    width: 280px !important;
    display: flex;
  }
  .product-content-item-name {
    width: 250px !important;
    height: 33.36px !important;
  }
  .product-content-item-name p {
    font-size: 16px !important;
    line-height: 18.78px !important;
    margin-bottom: 0;
    height: 33.36px !important;
  }
  .product-content-list .row {
    justify-content: center;
  }
}
@media only screen and (max-width: 376px) {
  .product {
    height: 1300px;
  }
  .product-bg {
    background: url(../assets/images/bg_gambling_small.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 253px;
    transform: translateY(-10px);
    background-color: #1a1c25;
  }
  .product-content-text {
    margin-top: 155px;
  }
  .product-content-list {
    display: none;
  }
  .product-content-slide {
    display: block;
    height: auto;
  }
}
</style>
