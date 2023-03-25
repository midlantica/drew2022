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
    color: $ivory;
    background: initial !important;
    box-shadow: none;
  }

  .backer {
    background: $ivory;
  }

  .flexxy {
    width: 100%;
    @apply flex;
    gap: 0 2rem;
    place-content: center;
    @apply justify-center;
    // position: absolute;
    // z-index: 100;
    // top: .5rem;
    // left: 1rem;
  }

  .headerCopy {
    color: black;
    font-family: $font;

    a {
      color: black;
    }
  }
</style>
