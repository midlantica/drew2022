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
    color: $ivory;
    background: $groovy-red;
    background: $mango;
    box-shadow: none;
    // margin-bottom: -1.2em;
  }

  footer {
    color: $ivory;
    background: $mango;
    box-shadow: none;
  }

  .flexContainer {
    background: #fffff1;
  }

  .backer {
    width: 100%;
    background: #fffff1;
  }
</style>
