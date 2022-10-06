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
        <img src="../../assets/images/location/maps.png" alt="" />
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
  name: 'Location',
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
  margin-top: 5.41375rem;
  padding: 0 34.25rem;
}
.location-content-title {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.18px;
  letter-spacing: 10px;
  color: #ff3232;
  margin-bottom: 0.5rem;
}
.location-content-suggest {
  font-size: 3rem;
  font-weight: 800;
  line-height: 56.35px;
  margin-bottom: 2rem;
}
.location-content-text p {
  font-family: 'Mulish', sans-serif;
  font-size: 1rem;
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
  height: 39.25rem;
  margin: 0 auto;
}
.location-building {
  position: relative;
  background: url(../../assets/images/location/buildings.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 39.25rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.location-building-content {
  width: 22.3125rem;
  height: 28.25rem;
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
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6rem;
  height: 1px;
  background: #f41616;
}
.location-building-content-title p:first-child {
  font-size: 200px;
  font-weight: 700;
  line-height: 234.38px;
  text-align: center;
  color: #f41616;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
}
.location-building-content-title p:last-child {
  font-size: 70px;
  font-weight: 600;
  line-height: 87.85px;
  text-align: center;
  color: #fff;
  font-family: 'Mulish', sans-serif;
  margin-top: -40px;
  text-transform: uppercase;
}
.location-building-content-text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 37.65px;
  font-family: 'Mulish', sans-serif;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
}

.location-building-content-text p span {
  font-weight: 500;
  line-height: 35.16px;
  font-family: 'Roboto', sans-serif;
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
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .location-bg img {
    width: 100%;
  }
  .location-building {
    background: url(../../assets/images/location/building.png);
    width: 100%;
    height: 30rem;
    background-size: contain;
  }
  .location-building-content {
    width: 15.8125rem;
    height: 17.5625rem;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    padding: 1.75rem 0 3rem;
  }
  .location-building {
    transform: translateY(0);
    height: 25.5625rem;
    position: relative;
    background-color: #15161e;
  }
  .location-building img {
    height: 18.75rem;
    position: absolute;
    bottom: 0;
  }
  .location-building-content-title p:first-child {
    font-size: 6rem;
    line-height: 112.5px;
  }
  .location-building-content-title p:last-child {
    font-size: 1.625rem;
    line-height: 32.63px;
    margin-top: -0.625rem;
  }
  .location-building-content-text {
    margin-top: 1.25rem;
  }
  .location-building-content-text p {
    font-size: 1.125rem;
    line-height: 22.59px;
  }
  .location-bg {
    transform: translateY(0);
    margin-top: 1.5625rem;
  }
  .location-bg img {
    width: 100%;
    height: 22.5rem;
    object-fit: cover;
  }

  .location-content-title {
    font-size: 0.75rem;
    line-height: 14.09px;
    letter-spacing: 5px;
  }
  .location-content-suggest {
    font-size: 1.625rem;
    line-height: 30.52px;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }
}

@media only screen and (max-width: 576px) {
  .location-bg {
    transform: translateY(0);
    background: url(../../assets/images/location/maps.svg);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 11.5625rem;
    background-size: contain;
  }
  .location-bg img {
    display: none;
  }
}

@media only screen and (max-width: 376px) {
  .location-content {
    padding: 0 1.375rem;
  }
}
</style>
