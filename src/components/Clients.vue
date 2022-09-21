<template>
  <div class="container-fluid" id="item4">
    <div class="clients">
      <div class="row">
        <div class="d-flex align-items-center justify-content-center">
          <div class="title">
            <p class="name text-center">BPLAY GAME</p>
            <p class="section text-center">OUR CLIENTS</p>
          </div>
        </div>
        <div class="clients-content">
          <div class="clients-item" v-for="client in clients" :key="client.id">
            <img :src="require(`../assets/images/${client.image}`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clients",
  setup() {
    const clients = ref([
      {
        id: 1,
        image: "galaxy.png",
      },
      {
        id: 2,
        image: "riche88.png",
      },
      {
        id: 3,
        image: "xpj.png",
      },
      {
        id: 4,
        image: "bet365.svg",
      },
      {
        id: 5,
        image: "betfair.png",
      },
      {
        id: 6,
        image: "betway.png",
      },
      {
        id: 7,
        image: "bwin.png",
      },
      {
        id: 8,
        image: "williamhill.png",
      },
      {
        id: 9,
        image: "sanos.png",
      },
      {
        id: 10,
        image: "venetian.png",
      },
      {
        id: 11,
        image: "5.png",
      },
      {
        id: 12,
        image: "allwin.png",
      },
    ]);

    return {
      clients,
    };
  },
};
</script>

<style>
.clients {
  max-width: 1400px;
  margin: 0 auto;
}
.clients-content {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 69px;
  column-gap: 39px;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.clients-item img {
  width: 249px;
  height: 146px;
}
@media only screen and (max-width: 376px) {
  .clients {
    margin-top: 90px !important;
  }
  .clients-content {
    padding: 0 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 22px;
    column-gap: 20px;
    width: 90% !important;
    margin: 38px auto;
  }
  .clients-item img {
    width: 100px;
    height: 60px;
    object-fit: cover;
  }
}
</style>
