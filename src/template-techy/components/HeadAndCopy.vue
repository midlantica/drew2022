<template>
  <section>
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy" />
  </section>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import '../assets/css/techy-main.scss';

  section {
    @apply mt-[2rem] mr-[1.5rem] mb-0 ml-4;

    @media (max-width: theme("screens.breakXlg")) {
      @apply mt-6 mx-6 mb-4;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply mx-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply mx-4;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply ml-4 mr-2;
    }
  }

  h1 {
    @apply text-techy-blueTech font-semibold font-techyHead leading-[2.4rem] text-[1.5rem] mt-0 mb-4 normal-case;

    @media (min-width: theme("screens.breakXlg")) {
      @apply max-w-[26ch];
    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply max-w-none;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply max-w-none;
    }

    @media (max-width: theme("screens.breakSm")) {
      max-width: 26ch;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply max-w-none;
    }
  }

  p {
    @apply text-[1.2rem] font-techyCopy leading-[2.9rem] tracking-[.06em] text-techy-blueTech;

    &.smallCaps {
      @apply text-[80%] tracking-wider uppercase;
    }

    @media (min-width: theme("screens.breakXlg")) and (-webkit-min-device-pixel-ratio: 2) {
      //

    }

    @media (max-width: theme("screens.breakXlg")) {
      @apply columns-2 text-[1.2rem] leading-[2.1em] text-justify tracking-wider gap-x-12 hyphens-auto rule-w-[2px] rule-style-dotted rule-color-[#423ba08b];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply columns-2;
    }

    @media (max-width: 700px) {
      @apply columns-1;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply columns-1 text-[1.2rem] leading-[2.3em] tracking-[.01em];
    }

    @media (max-width: theme("screens.breakSm")) and (-webkit-min-device-pixel-ratio: 2) {
      @apply columns-1 text-[1.15rem];
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply columns-1 text-[1.18em] mt-2 mr-0 mb-0 pt-0 px-0 pb-0;
    }

    @media only screen and (min-device-width : 375px) and (max-device-width : 667px) {
      //
    }

  }
</style>
