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
  $font-groovy: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  $backer: #fffae4;
  $backBlack: #1f1f1f;

  .wrapper {
    @apply relative;
    @apply max-w-[1024px];
    @apply my-0 mx-auto;
    //
  }

  // #############################
  // BOURBON
  body.bourbon {
    background: $backBlack;

    .wrapper {
      background: url(./template-bourbon/assets/img/bg/graphy_2.png) repeat;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
        // @apply p-4;
      }
    }

    .about>p {
      font-family: "AmericanTypewriterStd-Med";
      @apply my-1 mx-auto;
      @apply text-[.84em];

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
        font-family: "VeneerTwo", Helvetica, Arial, sans-serif;
        @apply pt-4;
        @apply text-[1.75em];
        @apply font-light;
        @apply antialiased;
        text-rendering: optimizeLegibility;
      }
    }

    .smallCaps {
      @apply text-[90%];
      @apply tracking-wider;
      font-variant: small-caps !important;
    }
  }

  // #############################
  // MODERN
  body.modern {
    @apply h-[calc(100%)];
    @apply bg-[hsl(320,100%,9%)];

    .wrapper {
      @apply flex;
      @apply flex-col;
      @apply grow;
      @apply max-w-[1024px];
      @apply min-h-[780px];
      @apply pb-14;
      //
      @apply bg-[hsl(320,100%,9%)];
      background-image: url(./template-modern/assets/img/bg/bg_bak_dk4.jpeg);
      @apply bg-cover;

      @media (max-width: $breakOne) {
        // height: 100vh;
        // min-height: 100vh;
        // max-height: 100vh;
        // background-size: 100% calc(100%);
        // //
        // @apply w-full;
        // @apply absolute;
        // @apply top-0;
        // left: 0;
      }

      header,
      footer {
        // background: url(./template-modern/assets/img/bg/bg_bag_dk.jpg) repeat;
        @apply shadow-none;
      }
    }

    .about {
      @apply w-1/2;
      @apply my-0 mx-auto;
      // background: hsla(340, 76%, 48%, 1) !important;
      background: linear-gradient(180deg,
          hsl(340deg 76% 48% / 100%),
          hsl(340deg 76% 31% / 100%)) !important;
    }

    &.extras {
      @apply bg-[#2e001f];

      .flexxy a p {
        @apply text-white;
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
        @apply border-b border-solid border-[hsla(0,0%,100%,.5)];
      }
    }

    &.extras .extrasWrapper {

      //
      h1 {
        @apply pt-4;
        @apply text-white;
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
        font-size: clamp(.85rem, 1.2rem, 1.4rem) !important;
        @apply font-semibold;
        @apply leading-normal;
        @apply capitalize;
        @apply antialiased;
        text-rendering: optimizeLegibility;
      }
    }

    .smallCaps {
      @apply text-[90%];
      @apply tracking-wider;
      font-variant: small-caps !important;
    }
  }

  // #############################
  // GROOVY
  body.groovy {
    background: $backBlack;

    .wrapper {
      background: linear-gradient(lighten($backer, 10) 0%,
          darken($backer, 05) 85%,
          darken($backer, 10) 100%);

      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }
    }

    .about>p {
      @apply mt-1 mx-0;
      font-family: $font-groovy;
      @apply text-[.85rem];
      @apply leading-[1.25rem];
    }

    .smallCaps {
      @apply text-[87.5%];
      @apply tracking-wider;
      font-variant: small-caps !important;
    }

    &.extras .extrasWrapper {
      //

      h1 {
        font-family: $font-groovy;
        @apply pt-4;
        @apply text-black;
        @apply text-[1.5em];
        @apply font-light;
        @apply capitalize;
      }

      p {
        font-family: $font-groovy;
        @apply text-[1em];
      }
    }
  }

  // #############################
  // TECHY
  body.techy {
    background: $backBlack;

    .wrapper {
      @apply bg-[#fffdf4];
    }

    &.extras .extrasWrapper {
      @apply bg-[#fffff1];

      h1 {
        @apply pt-4;
        color: lighten(black, 30);
        @apply font-['Dosis,"Helvetica_Neue",Arial,sans-serif'];
        @apply text-[1.5em];
        @apply capitalize;
      }
    }

    .about {
      @apply bg-[#ffe268];
      box-shadow: none !important;

      p {
        @apply my-0 mx-auto;
        @apply font-['Dosis,"Helvetica_Neue",Arial,sans-serif'];
      }
    }

    .smallCaps {
      @apply text-[87.5%];
      @apply tracking-wider;
      font-variant: small-caps !important;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        @apply font-['Dosis,"Helvetica_Neue",Arial,sans-serif'];
        @apply pt-4;
        @apply text-[1.75em];
        @apply font-medium;
      }

      p {
        @apply font-['Dosis,"Helvetica_Neue",Arial,sans-serif'];
        @apply text-[1em];
      }
    }

    &.extras .contact {
      @apply w-full;
    }
  }

  // #############################
  // CORP
  body.corp {
    background: $backBlack;

    .wrapper {
      background: url(/img/bg/white_paper_patt-01.jpg) repeat;
    }

    .smallCaps {
      @apply text-[90%];
      @apply tracking-[.03em];
      font-variant: small-caps !important;
    }

    &.extras .extrasWrapper {
      //

      h1 {
        font-family: "Bodoni Moda", Times, serif !important;
        @apply pt-4;
        @apply text-[#01487f];
        @apply text-[1.5em];
        @apply font-semibold;
        @apply capitalize;
      }

      p {
        font-family: "Bodoni Moda", Times, serif !important;
        @apply text-[1em];
      }
    }

    .about p {
      font-family: "Bodoni Moda", Times, serif !important;
      @apply text-[1em];
    }
  }

  // #############################
  // PUNK
  body.punk {
    background: $backBlack;

    .wrapper {
      @apply w-full;
      @apply bg-repeat;
      @apply bg-center;
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
        @apply font-['Poppins,"Helvetica_Neue",Helvetica,Arial,sans-serif'];
        @apply pt-4;
        @apply text-black;
        @apply text-[1.75em];
        @apply font-light;
        @apply capitalize;
      }

      p {
        @apply font-['Poppins,"Helvetica_Neue",Helvetica,Arial,sans-serif'];
        @apply text-black;
      }
    }

    .smallCaps {
      @apply text-[95%];
      @apply tracking-wider;
      font-variant: small-caps !important;
    }
  }
</style>
