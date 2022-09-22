<template>
  <header>
    <div class="header-logo">
      <img src="../assets/images/logo.svg" alt="logo" />
    </div>
    <div class="nav-full">
      <ul class="nav-bar d-flex">
        <li
          :class="menu.isActive ? 'active' : ''"
          v-for="menu in listMenu"
          :key="menu.id"
          @click="handleClickMenu(menu.id)"
        >
          <a class="col" :href="`#item${menu.id}`">{{ menu.value }}</a>
        </li>
      </ul>
      <div class="language">
        <div class="icon">
          <img src="../assets/images/eng.png" alt="" />
          <p>ENG</p>
        </div>
        <div class="icon-down">
          <img src="../assets/images/icon_down.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="nav-dropdown">
      <div class="language">
        <div class="icon">
          <img src="../assets/images/eng.png" alt="" />
          <p>ENG</p>
        </div>
        <div class="icon-down">
          <img src="../assets/images/icon_down.svg" alt="" />
        </div>
      </div>
      <img
        src="../assets/images/icon_dropdown.png"
        alt=""
        @click="handleShowMenu()"
      />
    </div>
    <div :class="['menu-dropdown', isMenu ? 'active' : '']">
      <div class="menu-dropdown-header">
        <div class="language">
          <div class="icon">
            <img src="../assets/images/eng.png" alt="" />
            <p>ENG</p>
          </div>
          <div class="icon-down">
            <img src="../assets/images/icon_down.svg" alt="" />
          </div>
        </div>
        <div class="icon" @click="handleShowMenu()">
          <img src="../assets/images/close.png" alt="" />
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
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  setup() {
    const isMenu = ref(false);
    const listMenu = ref([
      { id: 1, value: 'about us', isActive: false },
      { id: 2, value: 'products', isActive: false },
      { id: 3, value: 'partners', isActive: false },
      { id: 4, value: 'our clients', isActive: false },
      { id: 5, value: 'contact us', isActive: false },
    ]);

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
    };

    return { listMenu, isMenu, handleClickMenu, handleShowMenu };
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 42px;
  padding-bottom: 15px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.header-logo {
  cursor: pointer;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0 !important;
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
  margin-right: 56px;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.78px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  height: 2px;
  left: 0;
  bottom: -11px;
  background: #f41616;
}
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 100px;
  width: 130px;
  height: 48px;
  margin-left: 172px;
  cursor: pointer;
}
.language .icon {
  display: flex;
  align-items: center;
}
.language .icon p {
  font-size: 16px;
  font-weight: 600;
  line-height: 18.78px;
  letter-spacing: 0.25px;
  color: #fff;
  margin-bottom: 0;
  margin-left: 7px;
  width: 53px;
}
.language .icon-down img {
  width: 16px;
  height: 16px;
  position: relative;
  top: -2px;
}
.nav-full {
  display: flex;
  align-content: center;
  justify-content: center;
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
@media only screen and (max-width: 1200px) {
  header {
    transform: translateX(-50%);
    left: 50%;
  }
  .language {
    margin-left: 0;
  }

  ul li {
    margin-right: 20px;
  }
}
@media only screen and (max-width: 992px) {
  header {
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  .header-logo img {
    width: 90px;
    height: 31px;
  }
  .nav-full {
    display: none !important;
  }
  .nav-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .nav-dropdown .language {
    margin-right: 28px;
    width: 97.5px;
    height: 36px;
  }
  .nav-dropdown .language .icon p {
    width: 39px;
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
    padding: 19px 16px;
  }
  .menu-dropdown .menu {
    display: flex;
    justify-content: center;
    margin-top: 46px;
  }
  .menu-dropdown ul {
    flex-direction: column;
    width: 90%;
  }
  .menu-dropdown ul li {
    width: 100%;
    padding: 32px 0;
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
</style>
