<template>
  <div class="main">
    <div class="main-image">
      <img src="../assets/images/bg_red.png" alt="chip" class="bg-red" />
      <img src="../assets/images/bg_main.png" alt="chip" class="bg-image" />
      <img src="../assets/images/chip.svg" alt="chip" class="icon-blur" />
    </div>
    <div class="scroll-down" @click="handleScrollDown">
      <p>Scroll</p>
      <img src="../assets/images/icon_scroll_d.svg" alt="" />
    </div>
  </div>
  <Location />
</template>

<script>
import Location from "./Location";

export default {
  name: "MainLayout",
  components: { Location },
  setup() {
    const handleScrollDown = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    return {
      handleScrollDown,
    };
  },
};
</script>

<style>
.main {
  background-image: url("../assets/images/bg_black.png");
  width: 100%;
  height: 1155px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.main .bg-image {
  position: absolute;
  width: 100%;
  height: 1155px;
  z-index: 12;
}
.bg-red {
  position: absolute;
  width: 100%;
  height: 1182px;
  z-index: 10;
}
.icon-blur {
  position: absolute;
  bottom: -77px;
  left: 137px;
  z-index: 9;
}

.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 210px;
  z-index: 15;
  display: flex;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  transform: translateX(-50%);
}
.scroll-down p {
  font-size: 30px;
  font-weight: 400;
  line-height: 35.22px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
}
</style>
