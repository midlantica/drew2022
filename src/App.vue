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
      background: url(./template-bourbon/assets/img/bg/graphy_2.png) repeat;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }

    .about>p {
      @apply my-1 mx-auto font-bourbonCopy text-[.84em];

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
        text-rendering: optimizeLegibility;
      }
    }

    .smallCaps {
      @apply text-[90%] tracking-wider;
      font-variant: small-caps !important;
    }
  }

  // #############################
  // MODERN
  body.modern {
    @apply h-[calc(100%)] bg-[hsl(320,100%,9%)];

    .wrapper {
      @apply flex flex-col grow max-w-[1024px] min-h-[780px] pb-14 bg-[hsl(320,100%,9%)] bg-cover;
      background-image: url(./template-modern/assets/img/bg/bg_bak_dk4.jpeg);

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        @apply shadow-none;
      }
    }

    .about {
      @apply w-1/2 my-0 mx-auto;
      background: linear-gradient(180deg,
          hsl(340deg 76% 48% / 100%),
          hsl(340deg 76% 31% / 100%)) !important;
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
        text-rendering: optimizeLegibility;
      }
    }

    .smallCaps {
      @apply text-[90%] tracking-wider;
      font-variant: small-caps !important;
    }
  }

  // #############################
  // GROOVY
  body.groovy {
    @apply bg-base-backBlack;

    .wrapper {
      // background: linear-gradient(lighten($backer, 10) 0%,
      //     darken($backer, 05) 85%,
      //     darken($backer, 10) 100%);
      @apply bg-gradient-to-b from-white via-[#fff5cb] via-85% to-[#fff5cb];

      @media (max-width: $breakOne) {
        //
      }
    }

    .about>p {
      @apply text-[0.8em] tracking-wider font-groovyCopy;
      // font-variant: small-caps !important;
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
        color: lighten(black, 30);
        @apply pt-4 font-techyCopy text-[1.5em] capitalize;
      }
    }

    .about {
      @apply bg-[#ffe268];
      box-shadow: none !important;

      p {
        @apply my-0 mx-auto font-techyCopy;
      }
    }

    .smallCaps {
      @apply text-[87.5%] tracking-wider;
      font-variant: small-caps !important;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        @apply font-['Dosis,"Helvetica_Neue",Arial,sans-serif'] pt-4 text-[1.75em] font-medium;
      }

      p {
        @apply font-techyCopy text-[1em];
      }
    }

    &.extras .contact {
      @apply w-full;
    }
  }

  // #############################
  // CORP
  body.corp {
    @apply bg-base-backBlack;

    .wrapper {
      background: url(/img/bg/white_paper_patt-01.jpg) repeat;
    }

    .smallCaps {
      @apply text-[90%] tracking-[.03em];
      font-variant: small-caps !important;
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
      @apply w-full bg-repeat bg-center;
      background: url(/img/bg/circles.svg), url(/img/bg/Drew-punk-back.jpg);
      background-size: 100% 640%, 100% 100%;

      @media (max-width: $breakOne) {
        background-position: center center, -3em 0;
        background-size: 100% 640%, 130% 90%;
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
      font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important;
      @apply text-[.8em];

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
      @apply text-[95%] tracking-wider;
      font-variant: small-caps !important;
    }
  }
</style>
