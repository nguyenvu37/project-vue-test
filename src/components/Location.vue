<template>
  <div class="location">
    <div class="location-content">
      <div class="location-content-title">BPLAY GAME</div>
      <div class="location-content-suggest">WHO WE ARE?</div>
      <div class="location-content-text">
        <p>
          BPlay was founded in 2015 by a group of highly skilled professionals
          with over 15 years of experience in the
        </p>
        <p>
          iGaming industry. Today we are an international company with more than
          100 employees and have operations
        </p>
        <p>in Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...</p>
      </div>
    </div>
    <div class="location-bg">
      <img src="../assets/images/maps.png" alt="" />
    </div>
    <div class="location-building">
      <img src="../assets/images/buildings.png" alt="" />
    </div>
  </div>
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
  /* height: 779px; */
  position: relative;
}
.location-content {
  color: #fff;
  width: 100%;
  text-align: center;
  margin-top: 86.62px;
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
}
.location-bg {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  transform: translateY(-90px);
}
.location-bg img {
  width: 1437px;
  height: 628px;
  margin: 0 auto;
}
.location-building {
  transform: translateY(-230px);
}
.location-building img {
  width: 100%;
  height: 628px;
}
</style>
