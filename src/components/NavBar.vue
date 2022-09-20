<template>
  <ul class="nav-bar d-flex">
    <li v-for="menu in listMenu" :key="menu.id">{{ menu.value }}</li>
  </ul>
</template>
<script>
import { ref } from "vue";

export default {
  name: "NavBar",
  setup() {
    const listMenu = ref([
      { id: 1, value: "about us" },
      { id: 2, value: "products" },
      { id: 3, value: "partners" },
      { id: 4, value: "our clients" },
      { id: 5, value: "contact us" },
    ]);

    return { listMenu };
  },
};
</script>
<style></style>
