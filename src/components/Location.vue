<template>
  <section id="item1">
    <div class="location">
      <div class="location-content">
        <div class="location-content-title">BPLAY GAME</div>
        <div class="location-content-suggest">WHO WE ARE?</div>
        <div class="location-content-text">
          <p>
            BPlay was founded in 2015 by a group of highly skilled professionals
            with over 15 years of experience in the iGaming industry. Today we
            are an international company with more than 100 employees and have
            operations in Malta, Ukraine, Romania, Norway, India, Myanmar and
            Taiwan...
          </p>
        </div>
      </div>
      <div class="location-bg">
        <img src="../assets/images/maps.png" alt="" />
      </div>
      <div class="location-building">
        <div class="location-building-content">
          <div class="location-building-content-title">
            <p>15</p>
            <p>years</p>
          </div>
          <div class="location-building-content-text">
            <p>of experience</p>
            <p>{{ `in the ` }}<span>iGaming</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Location",
};
</script>

<style>
.location {
  width: 100%;
  position: relative;
}
.location-content {
  color: #fff;
  width: 100%;
  text-align: center;
  margin-top: 86.62px;
  padding: 0 548px;
}
.location-content-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 28.18px;
  letter-spacing: 10px;
  color: #ff3232;
  margin-bottom: 8px;
}
.location-content-suggest {
  font-size: 48px;
  font-weight: 800;
  line-height: 56.35px;
  margin-bottom: 32px;
}
.location-content-text p {
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 0;
  color: #eaeaea;
}
.location-bg {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  transform: translateY(-90px);
}
.location-bg img {
  width: 75%;
  height: 628px;
  margin: 0 auto;
}
.location-building {
  position: relative;
  background: url(../assets/images/buildings.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 628px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.location-building-content {
  width: 357px;
  height: 452px;
  background: rgba(21, 22, 30, 0.9);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 20%;
  top: 0;
}
.location-building-content-title {
  position: relative;
}
.location-building-content-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96px;
  height: 1px;
  background: #f41616;
}
.location-building-content-title p:first-child {
  font-size: 200px;
  font-weight: 700;
  line-height: 234.38px;
  text-align: center;
  color: #f41616;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
}
.location-building-content-title p:last-child {
  font-size: 70px;
  font-weight: 600;
  line-height: 87.85px;
  text-align: center;
  color: #fff;
  font-family: "Mulish", sans-serif;
  margin-top: -40px;
  text-transform: uppercase;
}
.location-building-content-text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 37.65px;
  font-family: "Mulish", sans-serif;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
}

.location-building-content-text p span {
  font-weight: 500;
  line-height: 35.16px;
  font-family: "Roboto", sans-serif;
  color: #f41616;
}

@media only screen and (max-width: 1400px) {
  .location-content {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

@media only screen and (max-width: 960px) {
  .location-content {
    padding-left: 16px;
    padding-right: 16px;
  }
  .location-bg img {
    width: 100%;
  }
  .location-building {
    background: url(../assets/images/building.png);
    width: 100%;
    height: 480px;
    background-size: contain;
  }
  .location-building-content {
    width: 253px;
    height: 281px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
  }
  .location-building {
    transform: translateY(0);
    height: 409px;
    position: relative;
    background-color: #15161e;
  }
  .location-building img {
    height: 300px;
    position: absolute;
    bottom: 0;
  }
  .location-building-content-title p:first-child {
    font-size: 96px;
    line-height: 112.5px;
  }
  .location-building-content-title p:last-child {
    font-size: 26px;
    line-height: 32.63px;
    margin-top: -10px;
  }
  .location-building-content-text {
    margin-top: 20px;
  }
  .location-building-content-text p {
    font-size: 18px;
    line-height: 22.59px;
  }
  .location-bg {
    transform: translateY(0);
    margin-top: 25px;
  }
  .location-bg img {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }

  .location-content-title {
    font-size: 12px;
    line-height: 14.09px;
    letter-spacing: 5px;
  }
  .location-content-suggest {
    font-size: 26px;
    line-height: 30.52px;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }
}

@media only screen and (max-width: 576px) {
  .location-bg {
    transform: translateY(0);
    background: url(../assets/images/maps.svg);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 185px;
    background-size: contain;
  }
  .location-bg img {
    display: none;
  }
}

@media only screen and (max-width: 376px) {
  .location-content {
    padding: 0 22px;
  }
}
</style>
