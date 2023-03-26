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
  // import Quote from '../components/Quote.vue'
  import Skills from '../../components/Skills.vue'
  import About from '../../components/About.vue'
  import Carousel from '../../components/Carousel/Carousel.vue'
</script>

<style lang='scss' scoped>
  @import '../assets/css/punk-main.scss';

  header,
  footer {
    color: $ivory;
    background: initial !important;
    @apply shadow-none;
    margin-bottom: -1rem;
  }

  .mainGrid {
    @apply grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem 1rem;
    background: transparent;
    padding: 0em 1em;
    @apply shadow-none;

    //
    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      grid-gap: 0.25rem 0em;
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
    @apply flex;
    @apply flex-col;
    @apply self-end;

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
      margin-top: 0.25em;
      @apply mb-2;
      @apply gap-y-0;
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
