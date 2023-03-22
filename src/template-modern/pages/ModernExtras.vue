<template>
  <transition name="bounce3" appear>
    <HeadAndCopy />
  </transition>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>
</template>

<script setup lang="ts">
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
@import "../assets/css/modern-main.scss";
</style>
