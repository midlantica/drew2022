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

<script setup lang="ts">
import Navvy from '../components/Navvy.vue'
import NavvyEmpty from '../components/NavvyEmpty.vue'
import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
  @import "../assets/css/bourbon-main.scss";
</style>
