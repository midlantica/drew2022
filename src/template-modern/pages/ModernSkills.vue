<template>
  <div name="bounce" appear>
    <transition name="bounce2" appear>
      <Skills />
    </transition>
    <transition name="bounce4" appear>
      <Quotes />
    </transition>
  </div>
</template>

<script setup>
  import Skills from '../../components/Skills.vue'
  import Quotes from '../../components/Quote.vue'
</script>

<style lang='scss' scoped>
  @import '../assets/css/modern-main.scss';

  .modern .skillsGrid {
    @apply w-1/2;
    @apply grid;
    // grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    @apply justify-center;
    margin: 1rem auto;
    justify-items: center;
    align-items: stretch;
    align-content: space-between;
    @apply text-center;
    gap: .5rem auto;

    @media (max-width: 900px) {
      @apply w-3/5;
    }

    @media (max-width: 600px) {
      @apply w-[70%];
    }

    @media (max-width: 300px) {
      @apply w-full;
    }

    .icon {
      cursor: pointer !important;
    }

    svg {
      @apply w-[100px];
      // stroke: $accent;
      // margin-bottom: 1rem;
      margin: 0rem auto .75rem;

      g {
        // stroke: red !important;
      }

      path,
      polygon,
      rect,
      polyline {
        stroke: $ruby;
        stroke-width: 10px;
      }
    }

  }

  .bounce {
    @apply relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s ease-out .25s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    @apply opacity-0;
  }
</style>
