<template>
  <nav>
    <section class="flex min-[830px]:flex-column flex-row flex-wrap w-full min-[830px]:content-center justify-center gap-x-4">
      <div class="drewTop max-[830px]:m-auto gap-2 grow">
        <router-link :to="{ name: 'Corp' }" class="w-full flex max-[830px]:flex-column flex-row flex-wrap content-center gap-6 justify-center">
          <router-link :to="{ name: 'ExtrasCorp' }" class="drewhead jelloHorizontal content-center m-0" />
          <div class="flex flex-col flex-wrap">
            <drewHarper class="drewHarper mt-2" />
            <div class="flex flex-row justify-center flex-wrap ">
              <h3 class="font-corpCopy text-[115%] transition duration-[.25s] ease-in font-bold text-center leading-loose uppercase tracking-[0.16rem]">
                {{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}
              </h3>
            </div>
          </div>
        </router-link>
      </div>
      <section class="contact">
        <p class="resume">
          <a :href="resumeUrl" target="_blank">PDF Resume</a>
        </p>
        <p class="email">
          <a :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
        </p>
      </section>
    </section>
  </nav>
</template>

<script setup>
  import drewHarper from '../components/navvyArt/drewHarper.vue'
  import { inject } from 'vue'

  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang='scss' scoped>
  @import '../assets/css/corp-main.scss';

  nav {
    @apply flex flex-row flex-wrap items-center pt-[2em] px-[2em] pb-0 justify-between mb-6;

    @media (max-width: $breakOne) {
      @apply justify-center mb-8;
    }
  }

  a {
    @apply text-base-ivory no-underline;

    &:link {
      @apply text-base-ivory no-underline;
    }

    &:hover {
      // color: $accent !important;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    @apply leading-4 text-corp-blueDark m-0 p-0 normal-case;

    a {
      @apply no-underline text-corp-blueDark;
    }
  }

  .drewHarper {
    @apply h-[83px];

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      @apply h-auto;
    }
  }

  a.drewhead {
    background-position: -39px -59px;
    background-size: 151%;
    filter: hue-rotate(210deg) grayscale(50%);
    @apply bg-[url('/img/drew_mug_red.png')] inline-block w-[80px] h-[80px] bg-no-repeat bg-corp-accentRed rounded-[1px] shadow-[0px_0px_1px_1px_#00000026];

    @media (max-width: $breakTwo) {
      background-position: -40px -50px !important;
      background-size: 145% !important;
    }
  }

  h1 {
    @apply font-corpHead text-[1.5rem] transition duration-[.25s] ease-in font-medium;

    a:hover {
      // color: initial !important;
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
  }

  h3 {
    @apply font-corpCopy text-[1.35rem] transition duration-[.25s] ease-in font-bold text-center leading-loose;

    a:hover {
      //
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
  }

  .uiux {
    @apply h-[4ch];

    @media (max-width: $breakOne) {
      @apply self-center;
    }

    @media (max-width: $breakTwo) {
      @apply h-[3ch];
    }
  }

  .drewTop {
    @apply flex flex-col flex-wrap content-center text-center;

    @media (max-width: $breakThree) {
      @apply w-full;
    }

  }

  .contact {
    @apply grow flex flex-col flex-wrap justify-center items-center content-center m-auto self-baseline gap-x-4 gap-y-2;

    @media (max-width: $breakOne) {
      @apply ml-0 flex-row mt-4;
    }

    @media (max-width: $breakTwo) {
      @apply mt-[.4em] flex-row;
    }

    @media (max-width: $breakThree) {
      @apply mt-4 transition duration-[.25s] ease-in flex-row;
    }

    @media (max-width: 520px) {
      @apply mt-4 transition duration-[.25s] ease-in flex-col;
    }

    p {
      @apply font-corpCopy text-[1.3em] tracking-[.01em] items-center text-center leading-[1.5em] grow font-semibold lowercase;

      a {
        // border-bottom: 2px dotted lighten($blue-dark, 20);
        @apply text-corp-blueMid;

        &:hover {
          @apply text-corp-blueDark border-b-2 border-dotted border-corp-blueMid;
        }
      }

      @media (max-width: $breakOne) {
        @apply justify-center;

        &:nth-child(1) {
          @apply text-right my-0 mx-1;
        }

        &:nth-child(2) {
          @apply text-left my-0 mx-1;
        }
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        @apply justify-center leading-5 mb-[-4px] text-center;
      }

      &.resume,
      &.email {
        @apply text-corp-blueMid leading-normal;

        a {
          @apply text-corp-blueDark;

          &:hover {
            @apply text-corp-blueDark border-b-2 border-dotted border-corp-blueMid;
          }
        }
      }

    }

  }
</style>
