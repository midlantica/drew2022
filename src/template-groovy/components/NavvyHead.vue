<template>
  <div class="relative my-[-25px] flex flex-row items-center">
    <div class="relative w-[210px] h-[210px] sm:left-[-2.75rem] min-[375px]:left-[-5.7rem]">
      <div class="groovyCircle float-left clear-left block">
        <router-link :to="{ name: 'ExtrasGroovy' }" class="jelloHorizontal relative bg-[url('/img/drew_mug_sepia.png')] w-[98px] h-[119px] left-[3.5rem] top-[2.8rem] bg-no-repeat bg-cover block" />
      </div>
    </div>

    <router-link to="/Groovy" class="drewHarperSVG float-left relative min-[375px]:left-[-1.95rem] sm:left-[-1.65rem] ">
      <div class="w-auto flex flex-row gap-4 flex-wrap m-auto justify-center">
        <mastDrew class="min-[375px]:h-[1.8rem] sm:h-[3.2rem]" />
        <mastHarper class="min-[375px]:h-[1.8rem] sm:h-[3.2rem]" />
      </div>
      <h2 class="min-[375px]:text-[.8rem] sm:text-[1.5rem] text-center font-normal text-base-ivory lowercase leading-normal tracking-[.025em] my-1 w-full mx-auto">
        {{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}
      </h2>

      <div class="shrink">
        <div class="w-full flex flex-row lg:flex-row flex-wrap gap-x-4 gap-y-2 items-center justify-center mx-auto">
          <div class="groovyOvalBtn">
            <a class="email" :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
          </div>
          <div class="groovyOvalBtn">
            <a class="resume" href="/resume/drew_harper_resume_portfolio.pdf" target="_blank">PDF Resume</a>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang='scss' scoped>
  @import '../assets/css/groovy-main.scss';

  .groovyCircle {
    width: 210px;
    height: 210px;
    box-shadow: 8px 6px 0px rgba(37, 37, 37, 0.25);
    border-radius: 10em;
    z-index: 5;
    display: block;
    margin-right: -2.75em;
    margin-bottom: -5.3em;
    //
    background-image: radial-gradient(
        /* 0 - 25% */
        $groovy-aqua 0%,
        $groovy-aqua 35%,
        /* 25% - 50% */
        $groovy-yellow 35%,
        $groovy-yellow 47%,
        /* 50% - 75% */
        $groovy-orange 47%,
        $groovy-orange 59%,
        /* 75% - 100% */
        $groovy-red 59%,
        $groovy-red 100%);
    clip-path: polygon(21% 0%, 100% 0%, 110% 50%, 100% 100%, 21% 110%);
    animation: 1s ease-out;

    @media (max-width: $breakFour) {
      width: 160px;
      height: 160px;
      top: -1.4em;
      left: -2.9em;
    }
  }

  .groovyOvalBtn {
    @apply w-fit py-[.1rem] px-4 pb-[.2rem] border border-groovy-orange border-solid rounded-[20rem] leading-normal gap-0;
    @apply hover:bg-groovy-redDk tracking-wide hover:text-white hover:cursor-pointer;

    a {
      @apply text-base-ivory;
      @apply no-underline;
      @apply min-[375px]:text-[1rem] sm:text-[1rem] md:text-[1rem];

      &:link {
        @apply text-base-ivory;
        @apply no-underline;
      }
    }

  }

  .groovyOval {
    @apply w-fit;
    @apply py-[.15rem] px-5 pb-[.3rem];
    @apply border border-groovy-orange border-solid;
    @apply rounded-[20rem];
    @apply text-[1rem];
    @apply leading-normal;

    &:hover {
      @apply bg-groovy-redDk;
      @apply text-white;
      @apply cursor-pointer;
    }

    a {
      font-family: $font-copy;
      @apply text-white;

      &:hover {
        @apply text-white;
      }

    }

  }

</style>
