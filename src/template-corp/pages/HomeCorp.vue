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

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      @apply gap-y-2 mx-4;
    }

    @media (max-width: 840px) {
      //
    }

    @media (max-width: 630px) {
      //
    }
  }

  .copyArea {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1 mb-[-1em];
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-1 row-end-1;
    }
  }

  .slides {
    @apply col-start-2 col-end-3 row-start-1 row-end-1 -mt-4;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;

    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-3 row-end-3 mt-0;
    }
  }

  .skillsGrid {
    @apply col-start-1 col-end-2 row-start-2 row-end-2;

    @media (max-width: 1024px) {
      //
    }

    @media (max-width: 840px) {
      //
    }

    @media (max-width: 630px) {
      //
    }
  }

  .about {
    @apply col-start-2 col-end-3 row-start-2 row-end-2;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-4 row-end-4;
    }
  }

  .quoteBlock {
    @apply col-start-2 col-end-3 row-start-3 row-end-3;

    @media (max-width: 1024px) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: 840px) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }

    @media (max-width: 630px) {
      @apply col-start-1 col-end-3 row-start-5 row-end-5;
    }
  }
</style>
