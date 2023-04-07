<template>
  <div class="aboutGrid">
    <transition name="bounce3" appear>
      <HeadAndCopy />
    </transition>
    <transition name="bounce4" appear>
      <About />
    </transition>
  </div>
</template>

<script setup>
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import About from '../../components/About.vue'
</script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

  .aboutGrid {
    grid-template-columns: minmax(auto, 2fr) minmax(225px, 1fr);
    @apply grid w-[80%] m-auto gap-8;

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
      @apply grid w-[90%];
    }
  }
</style>
