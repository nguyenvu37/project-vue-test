<template>
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
</template>
<script>
import { ref } from "vue";

export default {
  name: "NavBar",
  setup() {
    const listMenu = ref([
      { id: 1, value: "about us", isActive: false },
      { id: 2, value: "products", isActive: false },
      { id: 3, value: "partners", isActive: false },
      { id: 4, value: "our clients", isActive: false },
      { id: 5, value: "contact us", isActive: false },
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

    return { listMenu, handleClickMenu };
  },
};
</script>
<style>
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
ul li::after {
  transition: all 0.5s;
  content: "";
  position: absolute;
  width: 0;
}
ul li.active:after {
  content: "";
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
</style>
