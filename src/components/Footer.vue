<template>
  <footer>
    <div class="footer-component" id="item5">
      <div class="footer-up d-flex align-item-center justify-content-between">
        <div class="footer-logo">
          <img src="../assets/images/logo_footer.svg" alt="" />
        </div>
        <div class="footer-contact d-flex justify-content-start flex-column">
          <div class="footer-contact-title">CONTACT US</div>
          <div class="footer-contact-content">
            <div
              class="footer-contact-location icon-text d-flex align-items-start"
            >
              <div class="icon">
                <img src="../assets/images/location.svg" alt="" />
              </div>
              <p>2901 Marmora Road, Glassgow, Seattle, WA 98122-1090</p>
            </div>
            <div
              class="footer-contact-email icon-text d-flex align-items-start"
            >
              <div class="icon">
                <img src="../assets/images/mail.svg" alt="" />
              </div>
              <p>info@bplay.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer-down d-flex align-items-center justify-content-between"
      >
        <div class="footer-down-left d-flex align-item-center">
          <img src="../assets/images/mga.svg" alt="" />
          <div class="footer-down-list-img">
            <img src="../assets/images/sabs.png" alt="" />
            <img src="../assets/images/curacao.png" alt="" />
            <img src="../assets/images/itech.png" alt="" />
          </div>
        </div>
        <div class="footer-down-right">
          <p class="text-right">
            Copyright © 2020 bplay.com. All rights reserved.
          </p>
        </div>
      </div>
      <div class="scroll" @click="handleScrollTop">
        <div class="icon d-flex align-items-center justify-content-center">
          <img src="../assets/images/icon_scroll_u.svg" alt="" />
        </div>
        <p>Top</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  setup() {
    const handleScrollTop = () => window.scrollTo(0, 0);

    return {
      handleScrollTop,
    };
  },
};
</script>

<style>
footer {
  background: url(../assets/images/bg_footer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  /* margin-top: -50px; */
  position: relative;
}
.footer-component {
  max-width: 1400px;
  margin: 0 auto;
  transform: translateY(438px);
  position: relative;
}
.footer-logo,
.footer-contact {
  flex: 1;
}
.footer-logo img {
  width: 241px;
  height: 82px;
}
.footer-contact-title {
  font-size: 34px;
  font-weight: 800;
  line-height: 39.92px;
  text-align: left;
  margin-bottom: 29px;
  color: #fff;
}
.footer-up {
  padding-bottom: 44px;
  border-bottom: 0.5px solid #424657;
}
.icon-text .icon {
  width: 60px;
  float: left;
  position: relative;
  top: 10px;
}
.icon-text p {
  font-size: 28px;
  font-weight: 400;
  line-height: 40.96px;
  color: #fff;
}
.footer-down {
  margin-top: 34.65px;
}
.footer-down-list-img {
  margin-left: 19.43px;
}
.footer-down-list-img img {
  margin-right: 53.02px;
}
.footer-down-right p {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
}
footer .scroll {
  left: 1500px;
  bottom: 40px;
}

@media only screen and (max-width: 1700px) {
  .footer-component {
    max-width: 992px;
  }

  footer .scroll {
    left: 1030px !important;
  }
}
@media only screen and (max-width: 1320px) {
  .footer-component {
    padding: 0 16px;
    transform: translateY(300px);
  }
  .footer-up {
    flex-direction: column;
  }
  .footer-down {
    flex-direction: column;
  }
  .footer-logo {
    margin-bottom: 40px;
  }
  .footer-down-left {
    flex-direction: column;
    padding-bottom: 32px;
    border-bottom: 0.5px solid #424657;
  }
  .footer-down-list-img {
    order: 1;
    margin-bottom: 29px;
  }
  .footer-down-left img {
    order: 2;
  }
  .footer-down-right p {
    color: #cecece;
    margin-top: 10px;
  }
  footer .scroll {
    left: 710px !important;
  }
}
@media only screen and (max-width: 992px) {
  .footer-logo img {
    width: 118px;
    height: 40px;
  }
  .footer-contact-title {
    font-weight: 800;
    font-size: 18px;
    line-height: 21.13px;
  }
  .icon-text p {
    font-size: 16px;
  }
  .icon-text .icon {
    width: 40px;
  }
  footer .scroll {
    left: 80% !important;
    bottom: 15%;
    width: 33px;
    height: 44px;
  }
  footer .scroll img {
    width: 33px;
    height: 22px;
    margin-bottom: 6px;
  }
  footer .scroll p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.44px;
    letter-spacing: 1px;
  }
}
@media only screen and (max-width: 600px) {
  .footer-down-left img {
    width: 246px;
    height: 48px;
  }
  .footer-down-list-img img {
    width: auto;
    margin-right: 40px;
  }
}
@media only screen and (max-width: 376px) {
  footer {
    margin-top: -50px;
  }
  .footer-down-left {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .footer-down-left img {
    width: 246px;
  }
  .footer-down-list-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 246px;
    margin-left: 0;
  }
  .footer-down-list-img img {
    object-fit: contain;
  }
  footer .scroll {
    bottom: 60px;
    left: 92% !important;
  }
}
</style>
