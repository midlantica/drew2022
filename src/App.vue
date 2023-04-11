<template>
  <div class="wrapper">
    <component :is="Tabs" />
    <router-view v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component" />
      </transition>
    </router-view>
    <teleport to="#modal" />
  </div>
</template>

<script setup>
  import { provide } from 'vue'
  import store from './store/index'
  import quotes from './store/quotes'
  import Tabs from './components/Tabs.vue'

  provide('store', store)
  provide('quotes', quotes)
</script>

<style lang="scss">
  @import "./assets/css/main.scss";

  .wrapper {
    @apply relative max-w-[1024px] my-0 mx-auto;
  }

  // #############################
  // BOURBON
  body.bourbon {
    @apply bg-base-backBlack;

    .wrapper {
      @apply bg-[url('./template-bourbon/assets/img/bg/graphy_2.png')] bg-repeat;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        @apply bg-[url('./template-bourbon/assets/img/bg/bg_bag_dk.jpg')] bg-repeat;
      }
    }

    .about>p {
      @apply my-1 mx-auto font-bourbonCopy text-[.82em];

      @media (max-width: $breakThou) {
        @apply text-[1.65vw];
      }

      @media (max-width: $breakOne) {
        @apply text-[1.85vw];
      }

      @media (max-width: $breakTwo) {
        @apply text-[2.5vw];
      }

      @media (max-width: $breakThree) {
        @apply text-[3vw];
      }
    }

    &.extras .extrasWrapper {
      //

      h1 {
        @apply pt-4 font-bourbonHead text-[1.75em] font-light antialiased;
      }
    }

    .smallCaps {
      @apply text-[90%] tracking-wider uppercase;
    }
  }

  // #############################
  // MODERN
  body.modern {
    @apply h-[calc(100%)] bg-[hsl(320,100%,9%)];

    .wrapper {
      @apply flex flex-col grow max-w-[1024px] min-h-[780px] pb-14 bg-[hsl(320,100%,9%)] bg-[url('./template-modern/assets/img/bg/bg_bak_dk4.jpeg')] bg-cover;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        @apply shadow-none;
      }
    }

    .about {
      @apply w-1/2 my-0 mx-auto bg-gradient-to-b from-[#d71d5b] to-[#8b133b];
    }

    &.extras {
      @apply bg-[#2e001f];

      .flexxy a p {
        @apply text-white font-modernSubhead border-b border-solid border-[hsla(0,0%,100%,.5)];
      }
    }

    &.extras .extrasWrapper {
      //

      h1 {
        font-size: clamp(.85rem, 1.2rem, 1.4rem) !important;
        @apply pt-4 text-white font-semibold leading-normal capitalize antialiased font-modernSubhead;
      }
    }

    .smallCaps {
      @apply text-[90%] tracking-wider uppercase;
    }
  }

  // #############################
  // GROOVY
  body.groovy {
    @apply bg-base-backBlack;

    .wrapper {
      @apply bg-gradient-to-b from-white via-[#fff5cb] via-85% to-[#fff5cb];

      @media (max-width: $breakOne) {
        //
      }
    }

    .about>p {
      @apply text-[0.8em] tracking-wider font-groovyCopy;
    }

    &.extras .extrasWrapper {
      //

      h1 {
        @apply pt-4 text-black text-[1.5em] font-light capitalize font-groovyHead;
      }

      p {
        @apply text-[1em] font-groovyCopy;
      }
    }
  }

  // #############################
  // TECHY
  body.techy {
    @apply bg-base-backBlack;

    .wrapper {
      @apply bg-[#fffdf4];
    }

    &.extras .extrasWrapper {
      @apply bg-[#fffff1];

      h1 {
        @apply text-black/30 pt-4 font-techyCopy text-[1.5em] capitalize;
      }
    }

    .about {
      @apply bg-[#ffe268] shadow-none;

      p {
        @apply my-0 mx-auto font-techyCopy;
      }
    }

    .smallCaps {
      @apply text-[87.5%] tracking-wider uppercase;
    }

    .contact {
      @apply flex gap-x-4;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        @apply font-techyHead pt-4 text-[1.75em] font-medium mb-2 text-techy-blueTech;
      }

      p {
        @apply font-techyCopy text-[1em];
      }
    }

    &.extras .contact {
      @apply flex w-full m-auto gap-x-4;
    }
  }

  // #############################
  // CORP
  body.corp {
    @apply bg-base-backBlack;

    .wrapper {
      @apply bg-[url('/img/bg/white_paper_patt-01.jpg')] bg-repeat;
    }

    .smallCaps {
      @apply text-[90%] tracking-[.03em];
    }

    &.extras .extrasWrapper {
      //

      h1 {
        @apply pt-4 font-corpCopy text-[#01487f] text-[1.5em] font-semibold capitalize;
      }

      p {
        @apply text-[1em] font-corpCopy;
      }
    }

    .about p {
      @apply text-[1em] font-corpCopy;
    }
  }

  // #############################
  // PUNK
  body.punk {
    @apply bg-base-backBlack;

    .wrapper {
      // background-size: 100% 640%, 100% 100%;
      @apply w-full bg-repeat bg-center bg-[url('/img/bg/circles.svg'),_url('/img/bg/Drew-punk-back.jpg')] bg-[length:100%_640%,100%_100%];

      @media (max-width: $breakOne) {
        @apply bg-[length:100%_640%,130%_90%] bg-[center_center];
      }

      @media (max-width: $breakTwo) {
        background-position: center center, -3em 11em;
        background-size: 100% 600%, 120% 100%;
      }

      @media (max-width: $breakTwo) {
        background-position: center center, -3em 3em;
        background-size: 100% 600%, 250% 70%;
      }
    }

    .about>p {
      // font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important;
      @apply font-punkCopy text-[.8em];

      @media (max-width: $breakThou) {
        @apply text-[1.65vw];
      }

      @media (max-width: $breakOne) {
        @apply text-[1.85vw];
      }

      @media (max-width: $breakTwo) {
        @apply text-[2.5vw];
      }

      @media (max-width: $breakThree) {
        @apply text-[3vw];
      }
    }

    &.extras .extrasWrapper {
      //

      h1 {
        @apply font-punkHead pt-4 text-black text-[1.75em] font-light capitalize;
      }

      p {
        @apply font-punkCopy text-black;
      }
    }

    .smallCaps {
      @apply text-[95%] tracking-wider uppercase;
    }
  }
</style>
