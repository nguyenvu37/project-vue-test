<template>
  <footer>
    <div class="footer-component" id="item5">
      <div class="footer-up d-flex align-item-center justify-content-between">
        <div class="footer-logo">
          <a href="#">
            <img src="../../assets/images/footer/logo_footer.svg" alt="" />
          </a>
        </div>
        <div class="footer-contact d-flex justify-content-start flex-column">
          <div class="footer-contact-title">CONTACT US</div>
          <div class="footer-contact-content">
            <div
              class="footer-contact-location icon-text d-flex align-items-start"
            >
              <div class="icon">
                <img
                  src="../../assets/images/footer/location.svg"
                  alt=""
                  class="locations"
                />
              </div>
              <p>2901 Marmora Road, Glassgow, Seattle, WA 98122-1090</p>
            </div>
            <div
              class="footer-contact-email icon-text d-flex align-items-start"
            >
              <div class="icon">
                <img
                  src="../../assets/images/footer/mail.svg"
                  alt=""
                  class="mail"
                />
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
          <img src="../../assets/images/footer/mga.svg" alt="" />
          <div class="footer-down-list-img">
            <img src="../../assets/images/footer/sabs.svg" alt="" />
            <img src="../../assets/images/footer/curacao.svg" alt="" />
            <img src="../../assets/images/footer/itech.svg" alt="" />
          </div>
        </div>
        <div class="footer-down-right">
          <p class="text-right">
            Copyright © 2020 bplay.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    <div class="scroll" @click="handleScrollTop">
      <div class="icon d-flex align-items-center justify-content-center">
        <img src="../../assets/images/footer/icon_scroll_u.svg" alt="" />
      </div>
      <p>Top</p>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
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
  background: url(../../assets/images/footer/bg_footer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 51.875rem;
  position: relative;
}
.footer-component {
  padding: 0 16.25rem;
  margin: 0 auto;
  transform: translateY(438px);
  position: relative;
}
.footer-logo,
.footer-contact {
  flex: 1;
}
.footer-logo img {
  width: 15.0625rem;
  height: 5.125rem;
  cursor: pointer;
}
.footer-logo:hover img {
  opacity: 0.8;
}
.footer-contact-title {
  font-size: 2.125rem;
  font-weight: 800;
  line-height: 39.92px;
  text-align: left;
  margin-bottom: 1.8125rem;
  color: #fff;
}
.footer-up {
  padding-bottom: 2.75rem;
  border-bottom: 0.5px solid #424657;
}
.icon-text .icon {
  width: 3.75rem;
  float: left;
  position: relative;
  top: 0.625rem;
}
.icon-text p {
  font-size: 1.75rem;
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
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
  opacity: 0.7;
}
footer .scroll {
  right: 5%;
  bottom: 10%;
  left: inherit;
}

@media only screen and (max-width: 1700px) {
  .footer-component {
    padding: 0 8rem;
  }
  footer .scroll {
    right: 2%;
  }
}
@media only screen and (max-width: 1400px) {
  .footer-component {
    transform: translateY(170px);
  }
  .footer-up {
    flex-direction: column;
  }
  .footer-down {
    flex-direction: column;
  }
  .footer-logo {
    margin-bottom: 2.5rem;
  }
  .footer-down-left {
    flex-direction: column;
    padding-bottom: 32px;
    border-bottom: 0.5px solid #424657;
  }
  .footer-down-list-img {
    order: 1;
    margin-bottom: 1.8125rem;
  }
  .footer-down-left img {
    order: 2;
  }
  .footer-down-right p {
    color: #cecece;
    margin-top: 0.625rem;
  }
}
@media only screen and (max-width: 960px) {
  .footer-component {
    padding: 0 1rem;
    transform: translateY(250px);
  }
  .footer-logo img {
    width: 7.375rem;
    height: 2.5rem;
  }
  .footer-contact-title {
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 21.13px;
  }
  .icon-text p {
    font-size: 1rem;
    line-height: 23.4px;
  }
  .icon-text .icon {
    width: 2.5rem;
    position: relative;
    top: 2px;
  }
  .icon-text .icon img.locations {
    width: 0.92375rem;
  }
  .icon-text .icon img.mail {
    width: 1.098125rem;
  }

  footer .scroll {
    width: 2.0625rem;
    height: 2.75rem;
  }
  footer .scroll img {
    width: 2.0625rem !important;
    height: 1.375rem !important;
    margin-bottom: 0.375rem;
  }
  footer .scroll p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 16.44px;
    letter-spacing: 1px;
  }
}
@media only screen and (max-width: 600px) {
  .footer-down-left img {
    width: 15.5rem;
    height: 3rem;
  }
  .footer-down-list-img img {
    width: auto;
    margin-right: 2.5rem;
  }
  footer .scroll {
    bottom: 14%;
    right: 0;
  }
}
@media only screen and (max-width: 376px) {
  footer {
    margin-top: -3.125rem;
  }
  .footer-down-left {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .footer-down-left img {
    width: 15.375rem;
  }
  .footer-down-list-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15.375rem;
    margin-left: 0;
  }
  .footer-down-list-img img {
    object-fit: contain;
  }
  .footer-down-right p {
    font-size: 0.75rem;
  }
}
</style>
