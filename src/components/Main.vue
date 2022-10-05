<template>
  <section id="main">
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
      <div class="scroll" @click="handleScrollDown">
        <p>Scroll</p>
        <div class="icon d-flex align-items-center justify-content-center">
          <img src="../assets/images/icon_scroll_d.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <Location />
  <Product />
  <Partners />
  <Clients />
</template>

<script>
import Location from './Location';
import Product from './Product';
import Partners from './Partners';
import Clients from './Clients';

export default {
  name: 'MainLayout',
  components: { Location, Product, Partners, Clients },
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
  animation: bgImage 2s ease-out;
}

@keyframes bgImage {
  0% {
    background: url(../assets/images/bg_black.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  100% {
    background: url(../assets/images/bg_main.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
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
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  animation: mainText 3s ease-out;
}
@keyframes mainText {
  0% {
    top: -1000px;
  }
  100% {
    top: 50%;
    transform: translateX(-50%);
  }
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

.scroll {
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

  .scroll img {
    width: 21.19px !important;
    height: 15.14px !important;
    margin: 0 auto;
  }
  .scroll p {
    font-size: 12px !important;
    line-height: 14.09px !important;
    margin-bottom: 0px !important;
  }
}
@media only screen and (max-width: 376px) {
  .main {
    height: 400px;
  }
  .scroll {
    bottom: 61px;
  }
  .main .bg-image {
    height: 400px;
    object-fit: contain;
    background: url(../assets/images/bg_main_small.png);
  }
  .bg-red {
    height: 408px;
    background: url(../assets/images/bg_red_small.png);
  }
  .bg-blur {
    height: 414px;
  }
  .icon-blur {
    bottom: -15%;
    left: -2%;
  }
}
</style>
