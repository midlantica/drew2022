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
    @apply w-1/2 grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] justify-center text-center my-4 mx-auto items-stretch content-between gap-y-2 gap-x-0 justify-items-center;

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
      @apply cursor-pointer;
    }

    svg {
      @apply w-[100px] mt-0 mx-auto mb-3;
    }

  }

  .bounce {
    @apply relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply transition-all duration-200 ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    @apply opacity-0;
  }
</style>
