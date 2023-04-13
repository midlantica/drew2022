<template>
  <header class="text-base-ivory shadow-none">
    <Navvy />
    <div class="w-full flex flex-wrap gap-x-6 gap-y-1 place-content-center justify-center m-0">
      <span class="text-black font-punkHead bg-punk-magenta/70 py-1 px-3 leading-normal">{{ store.copy.uiuxDesigner }}/{{ store.copy.vizDesigner }}</span>
      <a class="text-black font-punkHead bg-punk-magenta/70 py-1 px-3 leading-normal hover:bg-punk-red hover:text-white" :href="resumeUrl" target="_BLANK">PDF Resume</a>
    </div>
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer class="text-base-ivory shadow-none">
    <!-- <Navvy /> -->
  </footer>
</template>

<script setup>
  import store from '../../store/index'

  import Navvy from '../components/Navvy'
  import ExtrasC from '../../components/ExtrasC'
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang="scss" scoped>
  @import '../assets/css/punk-main.scss';

  nav {
    @apply mb-0;
  }

</style>
