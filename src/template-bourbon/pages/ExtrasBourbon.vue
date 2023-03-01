<template>
  <transition name="bounce2" appear>
    <div>

      <header>
        <Navvy />
      </header>

      <ExtrasC />

      <footer>
        <NavvyEmpty />
      </footer>

    </div>
  </transition>
</template>

<script setup lang="ts">
  import Navvy from '../components/Navvy.vue'
  import NavvyEmpty from '../components/NavvyEmpty.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
@import "../assets/css/bourbon-main.scss";
</style>
