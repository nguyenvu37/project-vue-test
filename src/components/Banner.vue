<template>
  <section id="main">
    <div class="main">
      <div class="main-image">
        <div class="bg-red"></div>
        <div class="bg-blur"></div>
        <div class="bg-image"></div>
        <div class="icon-blur"></div>
      </div>
      <div class="main-text">
        <p>casino</p>
        <p>playgame</p>
      </div>
      <div class="scroll" @click="handleScrollDown">
        <p>Scroll</p>
        <div class="icon d-flex align-items-center justify-content-center">
          <img src="../assets/images/icon_scroll_d.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
  setup() {
    const handleScrollDown = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    return {
      handleScrollDown,
    };
  },
};
</script>

<style></style>
