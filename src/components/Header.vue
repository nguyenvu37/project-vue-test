<template>
  <header>
    <div class="header-logo">
      <img src="../assets/images/logo.svg" alt="logo" />
    </div>
    <Navbar />
  </header>
</template>

<script>
import Navbar from "./NavBar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: { Navbar },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
}
</style>
