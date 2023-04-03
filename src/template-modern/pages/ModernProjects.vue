<template>
  <div class="slides">
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>

<script setup>
  import Carousel from '../../components/Carousel/Carousel.vue'
</script>

<style lang='scss' scoped>
  @import '../assets/css/modern-main.scss';
</style>
