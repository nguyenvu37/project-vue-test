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
          <img
            :src="require(`../../assets/images/products/${product.image}`)"
            alt=""
          />
        </div>
        <div class="slider-name">
          <p>{{ product.name }}</p>
        </div>
        <div class="slider-information">
          <p>{{ product.information }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['products'],
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
  height: 31.25rem;
  padding-right: 2rem;
  margin-right: -1rem;
}

.swiper-slide {
  text-align: center;
  font-size: 1.125rem;
  width: 15.8125rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.swiper-slide img {
  display: block;
  width: 15.8125rem;
  height: 16.215625rem;
  object-fit: cover;
}
.slider-content .slider-name {
  background: url('../../assets/images/products/bg_name_casino.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 13.4375rem;
  height: 2.085rem;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1.125rem auto 0.6875rem;
}
.slider-name p {
  font-size: 1rem;
  font-weight: 700;
  line-height: 18.78px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin-bottom: 0;
  height: 2.085rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-information p {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 26px;
  font-family: 'Mulish', 'sans-serif';
  color: #fff;
  text-align: center;
}
.slider-image,
.slider-name {
  cursor: pointer;
}
.swiper-pagination {
  bottom: 4.6875rem !important;
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
