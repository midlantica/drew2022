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
    grid-template-columns: repeat(2, 1fr);
    @apply grid gap-x-2 gap-y-4 shadow-none py-0 px-4 bg-transparent;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      @apply gap-x-1 gap-y-2;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    @apply flex flex-col self-end;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }

  .slides {
    grid-column: 2 / 3;
    grid-row: 1;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 5;
      margin-bottom: 1em;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply mb-2 gap-y-0 mt-1;
    }
  }

  .quoteBlock {
    grid-column: 2 / 3;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 5;
    }
  }

  .skillsGrid {
    grid-column: 1 / 3;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-row: 4;
    }

    @media (max-width: $breakOne) {
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-row: 4;
    }
  }
</style>
