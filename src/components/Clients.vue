<template>
  <section id="item4">
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
  </section>
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
  margin: 0 auto;
  margin-top: 9.3125rem;
  padding: 0 16.25rem;
}
.clients-content {
  margin-top: 5rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 4.3125rem;
  column-gap: 2.4375rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.clients-item img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}
.clients-item:hover img {
  opacity: 0.8;
}
@media only screen and (max-width: 1700px) {
  .clients {
    padding: 0 8rem;
  }
  .clients-content {
    justify-content: space-between;
    padding: 0 1rem !important;
  }
}

@media only screen and (max-width: 960px) {
  .clients {
    padding: 0 1rem;
  }
  .clients-content {
    margin-top: 38px !important;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 1.375rem;
    column-gap: 1.375rem;
  }
  .clients {
    margin-top: 4.6875rem;
  }
  .clients-item img {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
