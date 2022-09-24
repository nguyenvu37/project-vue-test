<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="16"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="slider-product"
  >
    <swiper-slide v-for="product in products" :key="product.id">
      <div class="slider-content">
        <div class="slider-image">
          <img :src="require(`../assets/images/${product.image}`)" alt="" />
        </div>
        <div class="slider-name">
          <p>{{ product.name }}</p>
        </div>
        <div class="slider-information">
          <p>{{ product.information }}</p>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["products"],
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 500px;
  margin-left: 16px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 253px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.swiper-slide img {
  display: block;
  width: 253px;
  height: 259.43px;
  object-fit: cover;
}
.slider-content .slider-name {
  background: url("../assets/images/bg_name_casino.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 215px;
  height: 33.36px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 18px auto 11px;
}
.slider-name p {
  font-size: 16px;
  font-weight: 700;
  line-height: 18.78px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin-bottom: 0;
  height: 33.36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-information p {
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  font-family: "Mulish", "sans-serif";
  color: #fff;
  text-align: center;
}
.slider-image,
.slider-name {
  cursor: pointer;
}
.swiper-pagination {
  bottom: 50px;
}
.swiper-pagination-bullet {
  border-radius: 0;
  transform: rotate(45deg);
  background: #505153;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #f41616;
}
</style>
