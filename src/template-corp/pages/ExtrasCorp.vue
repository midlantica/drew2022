<template>
  <header>
    <Navvy />
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer>
    <NavvyEmpty />
  </footer>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import Quotes from '../components/Quote'
  import ExtrasC from '../../components/ExtrasC'
</script>

<style lang="scss" scoped>
@import '../assets/css/corp-main.scss';
</style>
