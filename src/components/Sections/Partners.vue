<template>
  <section id="item3">
    <div class="container-fluid">
      <div class="partners d-flex align-items-center">
        <div class="partners-left flex-xl-grow-1">
          <img
            src="../../assets/images/partners/partners.png"
            alt=""
            class="full"
          />
          <img
            src="../../assets/images/partners/partners1.png"
            alt=""
            class="small"
          />
        </div>
        <div class="partners-right flex-xl-grow-1">
          <div class="partners-content">
            <div class="title">
              <p class="name">BPLAY GAME</p>
              <p class="section">partners</p>
            </div>
            <div class="text">
              <p>
                As a BPlay client you will benefit from content from more than
                20 top tier providers. Based on your casino’s concept and
                targeted markets, we will tailor the perfect portfolio of games
                to offer to your players.
              </p>
            </div>
          </div>
          <div
            class="partners-list d-flex align-items-center justify-content-around flex-wrap"
          >
            <div
              class="partners-item"
              v-for="partner in partners"
              :key="partner.id"
            >
              <img
                :src="require(`../../assets/images/partners/${partner.image}`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Partners',
  setup() {
    const partners = ref([
      {
        id: 1,
        image: 'sbtech.png',
      },
      {
        id: 2,
        image: 'iovation.png',
      },
      {
        id: 3,
        image: 'seon.png',
      },
      {
        id: 4,
        image: 'hogaming.png',
      },
      {
        id: 5,
        image: 'vivo.png',
      },
    ]);

    return {
      partners,
    };
  },
};
</script>

<style>
.partners {
  margin-top: 2.4375rem;
}
.partners-right .text {
  max-width: 38.875rem;
}
.partners-list {
  margin-top: 5rem;
  max-width: 46.125rem;
  transform: translateX(-40px);
}
.partners-left .small {
  display: none;
}
@media only screen and (max-width: 1400px) {
  .partners {
    flex-direction: column;
  }
  .partners-left {
    order: 2;
    margin-top: 1.25rem;
    width: 100%;
    transform: translateX(-20px);
  }
  .partners-right {
    order: 1;
  }
}
@media only screen and (max-width: 992px) {
  .partners-left img {
    width: 100%;
    height: auto;
  }

  .partners-list {
    margin: 0 auto;
    transform: translateX(0);
  }
  .partners-list {
    margin-top: 1.875rem;
    transform: translateX(0);
    justify-content: center !important;
  }
  .partners-item img {
    width: 6.875rem;
    height: 2.8125rem;
  }
}
@media only screen and (max-width: 576px) {
  .partners-left .full {
    display: none;
  }
  .partners-left .small {
    display: block;
  }
}
@media only screen and (max-width: 376px) {
  .partners {
    margin-top: 5rem;
  }
}
</style>
