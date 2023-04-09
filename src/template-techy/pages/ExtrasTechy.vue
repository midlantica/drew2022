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
  import ExtrasC from '../../components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '../assets/css/techy-main.scss';

  header {
    @apply text-base-ivory shadow-none bg-base-accentRed;
  }

  footer {
    @apply text-base-ivory shadow-none bg-techy-mango;
  }

  .flexContainer {
    @apply bg-[#fffff1];
  }

  .backer {
    @apply w-full bg-[#fffff1];
  }
</style>
