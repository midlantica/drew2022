<template>
  <header class="bg-[url('../assets/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="bg-[url('../assets/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <nav class="h-3" />
  </footer>
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
  // @import "../assets/css/bourbon-main.scss";
</style>
