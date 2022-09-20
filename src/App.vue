<template>
  <div class="body">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
  background-color: #15161e;
}
</style>
