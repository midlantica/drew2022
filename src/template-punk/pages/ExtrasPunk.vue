<template>
  <header>
    <Navvy />
    <div class="flexxy">
      <span class="headerCopy">{{ store.copy.uiuxDesigner }}/{{ store.copy.vizDesigner }}</span>
      <a class="headerCopy resume rOne" :href="resumeUrl" target="_BLANK">PDF Resume</a>
    </div>
  </header>

  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>

  <footer>
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

  header,
  footer {
    @apply text-base-ivory shadow-none;
  }

  .backer {
    @apply bg-base-ivory;
  }

  .flexxy {
    @apply w-full flex gap-y-0 gap-x-8 place-content-center justify-center;
  }

  .headerCopy {
    @apply text-black font-punkHead;

    a {
      @apply text-black;
    }
  }
</style>
