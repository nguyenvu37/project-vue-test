<template>
  <div v-if="!isLoading" class="body">
    <Header />
    <Main />
    <Footer />
  </div>
  <div v-if="isLoading" class="loading">
    <Loading />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import { ref } from "vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Loading,
  },
  setup() {
    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);

    return {
      isLoading,
    };
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
  background-color: #15161e;
}

.title .name {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.18px;
  letter-spacing: 10px;
  text-align: left;
  color: #ff3232;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.title .section {
  font-size: 3rem;
  font-weight: 800;
  line-height: 56.35px;
  text-align: left;
  text-transform: uppercase;
  color: #fff;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-bottom: 0;
}

.text p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;
  color: #eaeaea;
  font-family: "Mulish", "sans-serif";
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-top: 1.5rem;
}

.scroll {
  position: absolute;
  z-index: 15;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  width: 5.625rem;
}
.scroll p {
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 35.22px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin-bottom: 0.5rem;
}
.scroll .icon {
  width: 100%;
}

.scroll img {
  width: 3.1875rem;
  height: 2.1875rem;
  margin-bottom: 0.4375rem;
}

.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 960px) {
  .title .name,
  .title .section,
  .text p {
    text-align: center;
  }
  .title .name {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 14.09px;
    letter-spacing: 5px;
  }
  .title .section {
    font-size: 1.625rem;
    font-weight: 800;
    line-height: 30.52px;
    letter-spacing: 1px;
  }
  .text p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 32px;
  }
}
@media only screen and (max-width: 376px) {
  .scroll img {
    width: 1.324375rem;
    height: 0.94625rem;
    margin: 0 auto;
  }
  .scroll p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 14.09px;
    text-align: center;
    margin-bottom: 0;
  }
}
</style>
