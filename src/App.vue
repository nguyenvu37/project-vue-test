<template>
  <div class="body">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
  background-color: #15161e;
}

.title .name {
  font-size: 24px;
  font-weight: 400;
  line-height: 28.18px;
  letter-spacing: 10px;
  text-align: left;
  color: #ff3232;
  margin-bottom: 8px;
  text-transform: uppercase;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.title .section {
  font-size: 48px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;
  color: #eaeaea;
  font-family: "Mulish", "sans-serif";
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-top: 24px;
}

.scroll {
  position: absolute;
  z-index: 15;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  width: 90px;
}
.scroll p {
  font-size: 30px;
  font-weight: 400;
  line-height: 35.22px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
.scroll .icon {
  width: 100%;
}

.scroll img {
  width: 51px;
  height: 35px;
  margin-bottom: 7px;
}

@media only screen and (max-width: 960px) {
  .title .name,
  .title .section,
  .text p {
    text-align: center;
  }
  .title .name {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.09px;
    letter-spacing: 5px;
  }
  .title .section {
    font-size: 26px;
    font-weight: 800;
    line-height: 30.52px;
    letter-spacing: 1px;
  }
  .text p {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
  }
}
@media only screen and (max-width: 376px) {
  .scroll img {
    width: 21.19px;
    height: 15.14px;
    margin: 0 auto;
  }
  .scroll p {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.09px;
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>
