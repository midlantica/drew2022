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

          <transition name="bounce6" appear>
            <Skills />
          </transition>

          <div class="slides">
            <transition name="bounce4" appear>
              <Carousel />
            </transition>
          </div>

          <transition name="bounce8" appear>
            <About />
          </transition>

          <transition name="bounce10" appear>
            <Quotes />
          </transition>
        </main>
      </transition>

      <footer>
        <nav class="h-3" />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import About from '../../components/About.vue'
  import Skills from '../../components/Skills.vue'
  import Quotes from '../../components/Quote.vue'
  import Carousel from '../../components/Carousel/Carousel.vue'
</script>

<style lang='scss' scoped>
  @import "../assets/css/bourbon-main.scss";

  header,
  footer {
    @include shadow;
  }

  .mainGrid {
    @apply grid my-4 mx-4 gap-4;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: $breakThou) {
      @apply grid gap-y-4;
      grid-template-columns: 1fr;
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
    grid-row: 1 / 4;
    transition-delay: 250ms;

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
      grid-row: 4;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakThree) {
      @apply m-0;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply mt-1 mb-2 gap-y-0;
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

    @media (max-width: $breakThree) {
      @apply m-0;
    }
  }
</style>
