<template>
  <header class="shadow-none text-base-ivory bg-base-accentRed">
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="shadow-none text-base-ivory bg-techy-mango">
    <NavvyEmpty />
  </footer>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import ExtrasC from '../../components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '../assets/css/techy-main.scss';
</style>
