<template>
  <transition name="fade" appear>
    <div>
      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce" appear>
        <main class="mainGrid">
          <transition name="bounce2" appear>
            <div class="copyArea">
              <HeadAndCopy />
            </div>
          </transition>

          <transition name="bounce4" appear>
            <div class="slides">
              <Carousel />
            </div>
          </transition>

          <transition name="bounce6" appear>
            <About />
          </transition>

          <transition name="bounce7" appear>
            <Skills />
          </transition>
        </main>
      </transition>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import Skills from '../../components/Skills.vue'
  import About from '../../components/About.vue'
  import Carousel from '../../components/Carousel/Carousel.vue'
</script>

<style lang='scss' scoped>
  @import '../assets/css/punk-main.scss';

  header,
  footer {
    @apply text-base-ivory shadow-none -mb-4;
  }

  .mainGrid {
    @apply grid grid-cols-2 gap-x-2 gap-y-2 shadow-none py-0 px-4 bg-transparent;

    @media (max-width: $breakThou) {
      @apply grid-cols-1 gap-x-1 gap-y-2;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: var(--breakTwo)) {
      //
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col self-end;

    @media (max-width: $breakThou) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: $breakOne) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: var(--breakTwo)) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1;

    @media (max-width: $breakThou) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: $breakOne) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }

    @media (max-width: var(--breakTwo)) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3;
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    @media (max-width: $breakThou) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: $breakOne) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: var(--breakTwo)) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply gap-y-0;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3 row-end-3;

    @media (max-width: $breakThou) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: $breakOne) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: var(--breakTwo)) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }
  }

  .skillsGrid {
    @apply col-start-1 col-end-3 row-start-3 row-end-3;

    @media (max-width: $breakThou) {
      @apply row-start-4 row-end-4;
    }

    @media (max-width: $breakOne) {
      @apply row-start-4 row-end-4;
    }

    @media (max-width: var(--breakTwo)) {
      @apply row-start-4 row-end-4;
    }
  }
</style>
