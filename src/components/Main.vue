<template>
  <div class="main">
    <div class="main-image">
      <div class="bg-red"></div>
      <div class="bg-blur"></div>
      <div class="bg-image"></div>
      <div class="icon-blur"></div>
    </div>
    <div class="main-text">
      <p>casino</p>
      <p>playgame</p>
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
  /* background-image: url("../assets/images/bg_black.png"); */
  width: 100%;
  height: 1155px;
  position: relative;
}

.main .bg-image {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  background: url(../assets/images/bg_main.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: -2px;
  width: 100%;
  height: 1155px;
  z-index: 12;
}
.bg-red {
  background: url(../assets/images/bg_red.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 1178px;
  z-index: 10;
}
.bg-blur {
  background: url(../assets/images/bg_black.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -2px;
  width: 100%;
  height: 1155px;
  z-index: 14;
}
.icon-blur {
  background: url(../assets/images/chip.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: -2%;
  left: 8%;
  z-index: 9;
  width: 20%;
  height: 25%;
}
.main-text {
  position: absolute;
  left: 50%;
  bottom: 40%;
  transform: translateX(-50%);
  z-index: 15;
}
.main-text p {
  font-size: 96px;
  font-weight: 800;
  line-height: 112.7px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 0%, #ffecbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

@media only screen and (max-width: 960px) {
  .main-text {
    left: 50%;
    bottom: 30%;
  }
  .main-text p {
    font-size: 36px;
    font-weight: 800;
    line-height: 42.26px;
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 0;
  }
  .main {
    height: 900px;
  }

  .main .bg-image {
    height: 900px;
    object-fit: cover;
  }
  .bg-red {
    height: 920px;
  }
  .bg-blur {
    height: 900px;
  }
  .scroll-down {
    bottom: 120px;
  }
}
@media only screen and (max-width: 376px) {
  .main {
    height: 402px;
  }

  .main .bg-image {
    height: 402px;
    object-fit: contain;
    background: url(../assets/images/bg_main_small.png);
  }
  .bg-red {
    height: 408px;
    background: url(../assets/images/bg_red_small.png);
  }
  .bg-blur {
    height: 402px;
  }
  .icon-blur {
    bottom: -12%;
    left: -2%;
  }
  .scroll-down {
    bottom: 61px;
  }
  .scroll-down img {
    width: 21.19px;
    height: 15.14px;
    margin: 0 auto;
  }
  .scroll-down p {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.09px;
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>
