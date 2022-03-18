<template>
  <transition name="bounce" appear>
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

<script lang="ts" setup>
  import Navvy from '../components/Navvy.vue'
  import NavvyEmpty from '../components/NavvyEmpty.vue'
  import ExtrasC from '../../components/ExtrasC.vue'
</script>

<style lang="scss">
  @import "../assets/css/bourbon-main.scss";
</style>
