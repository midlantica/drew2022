<template>
  <transition name="fade" appear>
    <div>
      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <main class="mainGrid">
          <transition name="bounce3" appear>
            <div class="copyArea">
              <HeadAndCopy />
            </div>
          </transition>

          <transition name="bounce4" appear>
            <div class="slides">
              <Carousel />
            </div>
          </transition>

          <transition name="bounce8" appear>
            <About />
          </transition>

          <transition name="bounce10" appear>
            <Skills />
          </transition>
        </main>
      </transition>

      <footer>
        <Quote />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../../components/Skills'
  import About from '../../components/About'
  import Quote from '../../components/Quote.vue'
  import Carousel from '../../components/Carousel/Carousel'
</script>

<style lang="scss" scoped>
  @import "../assets/css/techy-main.scss";

  .mainGrid {
    @apply grid-cols-[7fr_6fr] grid mt-0 mx-6 mb-2 gap-y-4 gap-x-0;

    @media (min-width: 1024px) and (min-device-width: 768px) {
      @apply grid-cols-[7fr_6fr] mt-0 mx-4 mb-2;
    }

    @media (max-width: theme("screens.breakThou")) {
      @apply grid-cols-1 mt-0 mx-4 mb-2;
    }

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      @apply grid-cols-1 mt-0 mx-6 mb-2;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply grid-cols-[7fr_6fr] mt-0 mx-6 mb-2;
    }
  }

  header {
    @apply text-base-ivory shadow-none bg-techy-mango;
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-1 col-end-2 row-start-1 row-end-3;
    }

    @media (max-width: theme("screens.breakThou")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakOne")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 -mt-20;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5.5em];
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 z-10 mt-[-5rem];
    }

    @media (max-width: theme("screens.breakThou")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 top-0 mt-0;
    }

    @media (max-width: theme("screens.breakOne")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 mt-0;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2 mt-0;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      @apply col-start-1 col-end-3 row-start-2 row-end-2;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-start-2 col-end-3 row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakThou")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakOne")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }

  .skillsGrid {
    @apply col-span-full row-start-3 row-end-4;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      @apply col-span-full row-start-3 row-end-4;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      @apply col-span-full row-start-3 row-end-4;
    }

    @media (max-width: theme("screens.breakThou")) {
      @apply row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakOne")) {
      @apply row-start-3 row-end-3;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply row-start-3 row-end-3;
    }
  }

  footer {
    @apply text-base-ivory bg-techy-mango shadow-none;

    @media (max-width: theme("screens.breakThou")) {
      //
    }

    @media (max-width: theme("screens.breakOne")) {
      //
    }

    @media (max-width: theme("screens.breakTwo")) {
      //
    }
  }
</style>
