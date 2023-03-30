<template>
  <transition name="fade" appear>
    <div>
      <transition name="topDown" appear>
        <header>
          <NavvyHead />
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

          <transition name="bounce6" appear>
            <About />
          </transition>

          <transition name="bounce8" appear>
            <Skills />
          </transition>
        </main>
      </transition>

      <transition name="bounce10" appear>
        <Footer />
      </transition>
    </div>
  </transition>
</template>

<script setup>
  import NavvyHead from '../components/NavvyHead'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../../components/Skills'
  import About from '../../components/About'
  import Footer from '../components/Footer'
  import Carousel from '../../components/Carousel/Carousel'
</script>

<style lang="scss" scoped>
  @import "../assets/css/groovy-main.scss";

  .mainGrid {
    @apply grid;
    grid-template-columns: 7fr 6fr;
    @apply gap-y-4;
    @apply mt-0 mx-4 mb-2;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      @apply mt-0 mx-4 mb-4;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }

    @media (max-width: $breakFour) {
      //
    }
  }

  header {
    @apply text-base-ivory;
    @apply bg-groovy-red;
    @include clearfix;
  }

  .about {
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
    @apply bg-groovy-yellow;
    @apply rounded-xl;
    font-family: $font-head;
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

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
    @apply z-10;
    @apply mt-[-9.8rem];

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
      @apply mt-0;
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

  .skillsGrid {
    grid-column: 1 / -1;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;
    @apply mb-auto;

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
</style>
