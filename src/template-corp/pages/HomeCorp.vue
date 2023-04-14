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

          <transition name="bounce9" appear>
            <About />
          </transition>

          <transition name="bounce7" appear>
            <Skills />
          </transition>
        </main>
      </transition>

      <footer>
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../../components/Skills'
  import About from '../../components/About'
  import Quotes from '../../components/Quote'
  import Carousel from '../../components/Carousel/Carousel'
</script>

<style lang="scss" scoped>
  @import '../assets/css/corp-main.scss';

  .about {
    @apply text-[.95em] bg-white;

    @media (max-width: $breakThou) {
      //
    }
  }

  header,
  footer {
    @apply shadow-none;
  }

  .mainGrid {
    grid-template-columns: repeat(2, 1fr);
    @apply grid gap-y-2 gap-x-0 ml-4 mb-4 mr-6;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      @apply gap-y-2 mx-4;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: var(--breakTwo)) {
      //
    }
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
      @apply mb-[-1em];
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: var(--breakTwo)) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }

  .slides {
    grid-column: 2 / 3;
    grid-row: 1;
    @apply -mt-4;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
      @apply mt-0;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
      @apply mt-0;
    }

    @media (max-width: var(--breakTwo)) {
      grid-column: 1 / 3;
      grid-row: 3;
      @apply mt-0;
    }
  }

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2;

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: var(--breakTwo)) {
      //
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

    @media (max-width: var(--breakTwo)) {
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

    @media (max-width: var(--breakTwo)) {
      grid-column: 1 / 3;
      grid-row: 5;
    }
  }
</style>
