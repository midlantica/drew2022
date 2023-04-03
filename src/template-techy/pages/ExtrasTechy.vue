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
  // import Footy from '../components/Footy'
  import ExtrasC from '../../components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '../assets/css/techy-main.scss';

  header {
    @apply text-base-ivory;
    background: $groovy-red;
    background: $mango;
    @apply shadow-none;
    // margin-bottom: -1.2em;
  }

  footer {
    @apply text-base-ivory;
    background: $mango;
    @apply shadow-none;
  }

  .flexContainer {
    background: #fffff1;
  }

  .backer {
    @apply w-full;
    background: #fffff1;
  }
</style>
