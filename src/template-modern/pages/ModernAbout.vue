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
    @apply grid-cols-[minmax(auto,_2fr)_minmax(225px,_1fr)];
    @apply grid w-[80%] m-auto gap-8;

    @media (max-width: 850px) {
      @apply grid grid-cols-1 w-[90%];
    }
  }
</style>
