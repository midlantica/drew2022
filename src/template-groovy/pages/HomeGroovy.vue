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
    @apply grid grid-cols-[7fr_6fr] gap-y-4 mt-0 mx-4 mb-2;

    @media (max-width: $breakThou) {
      @apply grid-cols-1 mt-0 mx-4 mb-4;
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
    @apply text-base-ivory bg-groovy-red after:clear-both h-[188px];
  }

  .about {
    @apply bg-groovy-yellow rounded-xl font-groovyHead shadow-[0px_6px_0px_0px_hsl(0,_0%,_0%,_25%)];
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
    @apply z-10 mt-[-9.5rem];

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
    @apply mb-0;

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
