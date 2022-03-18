<template>
  <transition name="bounce" appear>
    <div>
      <header>
        <Navvy />
      </header>

      <ExtrasC />

      <footer>
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import Quotes from '../components/Quote'
  import ExtrasC from '../../components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '../assets/css/corp-main.scss';
</style>
