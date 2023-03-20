<template>
<div class="slides">
  <transition
    name="bounce4"
    appear
  >
    <Carousel />
  </transition>
</div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Carousel from '../../components/Carousel/Carousel.vue'
// const Carousel = defineAsyncComponent((): Promise<any> => import('../../components/Carousel/Carousel.vue'))

</script>

<style lang='scss' scoped>
@import '../assets/css/modern-main.scss';
</style>
