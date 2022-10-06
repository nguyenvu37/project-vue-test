<template>
  <Banner />
  <Location />
  <Product />
  <Partners />
  <Clients />
</template>

<script>
import Banner from './Banner';
import Location from './Location';
import Product from './Product';
import Partners from './Partners';
import Clients from './Clients';

export default {
  name: 'MainLayout',
  components: { Banner, Location, Product, Partners, Clients },
};
</script>

<style>
.main {
  width: 100%;
  height: 72.1875rem;
  position: relative;
}

.main .bg-image {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  background: url(../assets/images/bg_main.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: -0.125rem;
  width: 100%;
  height: 72.1875rem;
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
  height: 73.625rem;
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
  height: 72.1875rem;
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
  font-size: 6rem;
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
  bottom: 13.125rem;
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
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 42.26px;
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 0;
  }
  .main {
    height: 56.25rem;
  }

  .main .bg-image {
    height: 56.25rem;
    object-fit: cover;
  }
  .bg-red {
    height: 920px;
  }
  .bg-blur {
    height: 56.25rem;
  }

  .scroll img {
    width: 1.324375rem !important;
    height: 0.94625rem !important;
    margin: 0 auto;
  }
  .scroll p {
    font-size: 0.75rem !important;
    line-height: 14.09px !important;
    margin-bottom: 0px !important;
  }
}
@media only screen and (max-width: 376px) {
  .main {
    height: 25rem;
  }
  .scroll {
    bottom: 61px;
  }
  .main .bg-image {
    height: 25rem;
    object-fit: contain;
    background: url(../assets/images/bg_main_small.png);
  }
  .bg-red {
    height: 25.5rem;
    background: url(../assets/images/bg_red_small.png);
  }
  .bg-blur {
    height: 25.875rem;
  }
  .icon-blur {
    bottom: -15%;
    left: -2%;
  }
}
</style>
