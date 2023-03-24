<template>
  <div class="wrapper">
    <component :is="Tabs" />
    <router-view v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component" />
      </transition>
    </router-view>
    <teleport to="#modal"></teleport>
  </div>
</template>

<script lang="ts" setup>
  import { provide } from 'vue'
  import store from './store/index'
  import quotes from './store/quotes'
  import Tabs from './components/Tabs.vue'

  provide('store', store) as any
  provide('quotes', quotes) as any
</script>

<style lang="scss">
  @import "./assets/css/main.scss";
  $font-groovy: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  $backer: #fffae4;
  $backBlack: #1f1f1f;

  .wrapper {
    position: relative !important;
    max-width: 1024px;
    margin: 0 auto;
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
        // padding: 1rem;
      }
    }

    .about>p {
      margin: .25rem auto;
      font-family: "AmericanTypewriterStd-Med";
      font-size: .84em;

      @media (max-width: $breakThou) {
        font-size: 1.65vw;
      }

      @media (max-width: $breakOne) {
        font-size: 1.85vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.5vw;
      }

      @media (max-width: $breakThree) {
        font-size: 3vw;
      }
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        font-family: "VeneerTwo", Helvetica, Arial, sans-serif;
        font-size: 1.75em;
        font-weight: 300;
        text-rendering: optimizeLegibility;

        -webkit-font-smoothing: antialiased;
      }
    }

    .smallCaps {
      font-size: 90% !important;
      font-variant: small-caps !important;
      letter-spacing: .05rem;
    }
  }

  // #############################
  // MODERN
  body.modern {
    height: calc(100%);
    background: hsl(320, 100%, 9%);

    .wrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      max-width: 1024px;
      min-height: 780px;
      padding-bottom: 3.5rem;
      //
      background: hsl(320, 100%, 9%);
      background-image: url(./template-modern/assets/img/bg/bg_bak_dk4.jpeg);
      background-size: cover;

      @media (max-width: $breakOne) {
        // height: 100vh;
        // min-height: 100vh;
        // max-height: 100vh;
        // background-size: 100% calc(100%);
        // //
        // width: 100%;
        // position: absolute;
        // top: 0;
        // left: 0;
      }

      header,
      footer {
        // background: url(./template-modern/assets/img/bg/bg_bag_dk.jpg) repeat;
        box-shadow: none;
      }
    }

    .about {
      width: 50%;
      margin: 0 auto;
      // background: hsla(340, 76%, 48%, 1) !important;
      background: linear-gradient(180deg,
          hsl(340deg 76% 48% / 100%),
          hsl(340deg 76% 31% / 100%)) !important;
    }

    &.extras {
      background: #2e001f;

      .flexxy a p {
        color: white;
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
        border-bottom: 1px solid hsla(0, 0%, 100%, .5);
      }
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        color: white;
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
        font-size: clamp(.85rem, 1.2rem, 1.4rem) !important;
        font-weight: 600;
        line-height: 1.5;
        text-rendering: optimizeLegibility;
        text-transform: capitalize;

        -webkit-font-smoothing: antialiased;
      }
    }

    .smallCaps {
      font-size: 90% !important;
      font-variant: small-caps !important;
      letter-spacing: .05rem;
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
      margin: .25rem 0;
      font-family: $font-groovy;
      font-size: .85rem !important;
      line-height: 1.25rem;
    }

    .smallCaps {
      font-size: 87.5% !important;
      font-variant: small-caps !important;
      letter-spacing: .05rem;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        color: black;
        font-family: $font-groovy;
        font-size: 1.5em;
        font-weight: 300;
        text-transform: capitalize;
      }

      p {
        font-family: $font-groovy;
        font-size: 1em !important;
      }
    }
  }

  // #############################
  // TECHY
  body.techy {
    background: $backBlack;

    .wrapper {
      background: #fffdf4;
    }

    &.extras .extrasWrapper {
      background: #fffff1 !important;

      h1 {
        padding-top: 1em;
        color: lighten(black, 30);
        font-family: Helvetica !important;
        font-size: 1.5em;
        text-transform: capitalize;
      }
    }

    .about {
      background: #ffe268 !important;
      box-shadow: none !important;

      p {
        margin: 0rem auto;
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
      }
    }

    .smallCaps {
      font-size: 87.5% !important;
      font-variant: small-caps !important;
      letter-spacing: .05rem;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
        font-size: 1.75em;
        font-weight: 500;
      }

      p {
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
        font-size: 1em !important;
      }
    }

    &.extras .contact {
      width: 100% !important;
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
      font-size: 90% !important;
      font-variant: small-caps !important;
      letter-spacing: .03rem;
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        color: #01487f !important;
        font-family: "Bodoni Moda", Times, serif !important;
        font-size: 1.5em;
        font-weight: 600;
        text-transform: capitalize;
      }

      p {
        font-family: "Bodoni Moda", Times, serif !important;
        font-size: 1em;
      }
    }

    .about p {
      font-family: "Bodoni Moda", Times, serif !important;
      font-size: 1em;
    }
  }

  // #############################
  // PUNK
  body.punk {
    background: $backBlack;

    .wrapper {
      width: 100%;
      background: url(/img/bg/circles.svg), url(/img/bg/Drew-punk-back.jpg);
      background-repeat: repeat-y, repeat-y;
      background-position: center center, center center;
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
      font-size: .8em !important;

      @media (max-width: $breakThou) {
        font-size: 1.65vw !important;
      }

      @media (max-width: $breakOne) {
        font-size: 1.85vw !important;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.5vw !important;
      }

      @media (max-width: $breakThree) {
        font-size: 3vw !important;
      }
    }

    &.extras .extrasWrapper {

      //
      h1 {
        padding-top: 1em;
        color: black;
        font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        font-size: 1.75em;
        font-weight: 300;
        text-transform: capitalize;
      }

      p {
        color: black;
        font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
      }
    }

    .smallCaps {
      font-size: 95% !important;
      font-variant: small-caps !important;
      letter-spacing: .05rem;
    }
  }
</style>
