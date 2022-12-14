<template>
  <header v-click-outside="onClickOutside">
    <div class="header-content">
      <div class="header-logo" @click="onClickOutside">
        <a href="#">
          <img src="../../assets/images/header/logo.svg" alt="logo" />
        </a>
      </div>
      <ul class="nav-bar nav-full" @click="onClickOutside">
        <li
          :class="menu.isActive ? 'active' : ''"
          v-for="menu in listMenu"
          :key="menu.id"
          @click="handleClickMenu(menu.id)"
        >
          <a :href="`#item${menu.id}`">{{ menu.value }}</a>
        </li>
      </ul>
      <div class="language lang-full" @click="handleShowLanguage()">
        <div v-if="!isShowLanguage" class="list-language">
          <div class="icon">
            <img
              :src="require(`../../assets/images/header/${language}.png`)"
              alt=""
            />
            <p>{{ language }}</p>
          </div>
          <div class="icon-down">
            <img src="../../assets/images/header/icon_down.svg" alt="" />
          </div>
        </div>
        <div v-else class="list-language-full">
          <div class="list-language" @click="handleChangeLanguage('ENG')">
            <div class="icon">
              <img src="../../assets/images/header/ENG.png" alt="" />
              <p>ENG</p>
            </div>
          </div>
          <div class="list-language" @click="handleChangeLanguage('VN')">
            <div class="icon">
              <img src="../../assets/images/header/VN.png" alt="" />
              <p>VN</p>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-dropdown">
        <div class="language" @click="handleShowLanguage()">
          <div v-if="!isShowLanguage" class="list-language">
            <div class="icon">
              <img
                :src="require(`../../assets/images/header/${language}.png`)"
                alt=""
              />
              <p>{{ language }}</p>
            </div>
            <div class="icon-down">
              <img src="../../assets/images/header/icon_down.svg" alt="" />
            </div>
          </div>
          <div v-else class="list-language-full">
            <div class="list-language" @click="handleChangeLanguage('ENG')">
              <div class="icon">
                <img src="../../assets/images/header/ENG.png" alt="" />
                <p>ENG</p>
              </div>
            </div>
            <div class="list-language" @click="handleChangeLanguage('VN')">
              <div class="icon">
                <img src="../../assets/images/header/VN.png" alt="" />
                <p>VN</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../../assets/images/header/icon_dropdown.png"
          alt=""
          @click="handleShowMenu()"
        />
      </div>
      <div :class="['menu-dropdown', isMenu ? 'active' : '']">
        <div class="menu-dropdown-header">
          <div class="language" @click="handleShowLanguage()">
            <div v-if="!isShowLanguage" class="list-language">
              <div class="icon">
                <img
                  :src="require(`../../assets/images/header/${language}.png`)"
                  alt=""
                />
                <p>{{ language }}</p>
              </div>
              <div class="icon-down">
                <img src="../../assets/images/header/icon_down.svg" alt="" />
              </div>
            </div>
            <div v-else class="list-language-full">
              <div class="list-language" @click="handleChangeLanguage('ENG')">
                <div class="icon">
                  <img src="../../assets/images/header/ENG.png" alt="" />
                  <p>ENG</p>
                </div>
              </div>
              <div class="list-language" @click="handleChangeLanguage('VN')">
                <div class="icon">
                  <img src="../../assets/images/header/VN.png" alt="" />
                  <p>VN</p>
                </div>
              </div>
            </div>
          </div>
          <div class="icon" @click="handleShowMenu()">
            <img src="../../assets/images/header/close.png" alt="" />
          </div>
        </div>
        <div class="menu">
          <ul class="nav-bar">
            <li
              :class="menu.isActive ? 'active' : ''"
              v-for="menu in listMenu"
              :key="menu.id"
              @click="handleClickMenu(menu.id), handleShowMenu()"
            >
              <a class="col" :href="`#item${menu.id}`">{{ menu.value }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  setup() {
    const isMenu = ref(false);
    const isShowLanguage = ref(false);
    const language = ref('ENG');
    const listMenu = ref([
      { id: 1, value: 'about us', isActive: false },
      { id: 2, value: 'products', isActive: false },
      { id: 3, value: 'partners', isActive: false },
      { id: 4, value: 'our clients', isActive: false },
      { id: 5, value: 'contact us', isActive: false },
    ]);

    const onClickOutside = () => {
      isShowLanguage.value = false;
    };

    const handleShowLanguage = () => {
      isShowLanguage.value = !isShowLanguage.value;
    };

    const handleChangeLanguage = (lang) => {
      language.value = lang;
    };

    const handleClickMenu = (id) => {
      listMenu.value = listMenu.value.map((menu) => {
        if (menu.id === id) menu.isActive = true;
        return menu;
      });
      listMenu.value
        .filter((menu) => menu.id !== id)
        .map((menu) => (menu.isActive = false));
    };

    const handleShowMenu = () => {
      isMenu.value = !isMenu.value;
      isShowLanguage.value = false;
    };

    return {
      listMenu,
      isMenu,
      handleClickMenu,
      handleShowMenu,
      isShowLanguage,
      handleShowLanguage,
      language,
      handleChangeLanguage,
      onClickOutside,
    };
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding-top: 2.625rem;
  padding-bottom: 0.9375rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.header-content {
  padding: 0 16.25rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  transition: all 0.5s;
}
.header-logo {
  cursor: pointer;
}
.header-logo:hover img {
  opacity: 0.8;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0 !important;
  padding-left: 0 !important;
}
ul li a {
  color: #fff;
  text-decoration: none;
}
ul li a:hover {
  color: #fff;
}
ul li {
  list-style: none;
  margin-left: 3.5rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 18.78px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  height: 1.1875rem;
  position: relative;
  margin-left: 1.875rem;
}
ul li:hover a {
  color: #c0c3ce;
}
ul li::after {
  transition: all 0.5s;
  content: '';
  position: absolute;
  width: 0;
}
ul li.active:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.125rem;
  left: 0;
  bottom: -0.6875rem;
  background: #f41616;
}
.language {
  cursor: pointer;
  position: relative;
  width: 8.125rem;
}
.list-language {
  border: 1px solid #ffffff;
  border-radius: 100px;
  max-height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;
  height: 100%;
}
.language .icon {
  display: flex;
  align-items: center;
}
.language .icon img {
  width: 1.25rem;
  height: 1.25rem;
}
.language .icon p {
  font-size: 1rem;
  font-weight: 600;
  line-height: 18.78px;
  letter-spacing: 0.25px;
  color: #fff;
  margin-bottom: 0;
  margin-left: 0.4375rem;
  width: 3.3125rem;
}
.language .icon-down img {
  width: 1rem;
  height: 1rem;
  position: relative;
  top: -0.125rem;
}
.list-language-full {
  border: 1px solid #ffffff;
  border-radius: 25px;
  width: 8.125rem;
  height: auto;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-in;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.25rem;
  animation: dropdownLanguage 0.5s ease-in-out;
}
@keyframes dropdownLanguage {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.list-language-full .list-language {
  border: none;
  border-radius: 0;
}
.nav-dropdown {
  display: none;
}
.menu-dropdown {
  display: none;
  transform: translateX(-1000px);
  transition: all 0.5s;
  width: 0;
  height: 100vh;
  background: #1a1c25;
}

@media only screen and (max-width: 1700px) {
  .header-content {
    padding: 0 8rem;
  }
  ul li {
    margin-left: 1.3rem;
  }
}

@media only screen and (max-width: 1400px) {
  .language .icon-down img {
    width: 0.75rem;
    height: 0.6875rem;
    position: relative;
    top: -0.0625rem;
  }
}

@media only screen and (max-width: 1200px) {
  header {
    padding-top: 1.1875rem;
  }
  .header-content {
    justify-content: space-between;
  }
  .header-logo img {
    width: 5.625rem;
    height: 1.9375rem;
  }
  .nav-full,
  .lang-full {
    display: none !important;
  }
  .language .icon p {
    width: 2.4375rem;
    margin-left: 0.328125rem;
    margin-right: 0.1875rem;
  }
  .list-language {
    padding: 0.5rem;
    width: 6.09375rem;
    height: 2.25rem;
  }
  .list-language-full {
    width: 6.09375rem;
  }
  .nav-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .nav-dropdown .language {
    margin-right: 1.78125rem;
    width: 6.09375rem;
    height: 2.25rem;
  }
  .nav-dropdown .language .icon p {
    width: 2.4375rem;
  }
  .menu-dropdown.active {
    width: 100%;
    display: block;
    transform: translateX(0);
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.5s;
    animation: dropdown 0.5s ease-in-out;
  }
  @keyframes dropdown {
    0% {
      left: -1000px;
    }
    100% {
      left: 0%;
    }
  }
  .menu-dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1875rem 1rem;
  }
  .menu-dropdown-header .language {
    width: 6.09375rem;
    height: 2.25rem;
  }
  .menu-dropdown .menu {
    display: flex;
    justify-content: center;
    margin-top: 1.6875rem;
  }
  .menu-dropdown ul {
    flex-direction: column;
    width: 90%;
  }
  .menu-dropdown ul li {
    width: 100%;
    padding: 2rem 0;
    border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }
  .menu-dropdown ul li.active::after {
    display: none;
  }
  .menu-dropdown ul li.active a {
    color: #f31616;
  }
  .menu-dropdown-header .icon {
    cursor: pointer;
  }
}

@media only screen and (max-width: 960px) {
  header {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.1875rem;
  }
  .header-content {
    padding: 0;
  }
}

@media only screen and (max-width: 376px) {
  .icon-blur {
    bottom: -5%;
  }
}
</style>
