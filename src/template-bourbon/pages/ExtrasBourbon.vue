<template>
  <header class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="bg-[url('/img/bg/bg_bag_dk.jpg')] bg-repeat shadow-druShadow">
    <nav class="h-3" />
  </footer>
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
@import "/src/template-bourbon/assets/css/fonts/bourbonFonts/bourbonFonts.css";
</style>
