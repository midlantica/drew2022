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

    @media (max-width: $breakThou) {
      @apply mt-6 mx-6 mb-4;
    }

    @media (max-width: $breakOne) {
      @apply mx-4;
    }

    @media (max-width: $breakTwo) {
      @apply mx-4;
    }

    @media (max-width: $breakThree) {
      @apply ml-4 mr-2;
    }
  }

  h1 {
    @apply text-techy-blueTech font-semibold font-techyHead leading-[2.4rem] text-[1.5rem] mt-0 mb-4 normal-case;

    @media (min-width: $breakThou) {
      max-width: 26ch;
    }

    @media (max-width: $breakThou) {
      @apply max-w-none;
    }

    @media (max-width: $breakOne) {
      @apply max-w-none;
    }

    @media (max-width: $breakTwo) {
      max-width: 26ch;
    }

    @media (max-width: $breakThree) {
      @apply max-w-none;
    }
  }

  p {
    @apply text-[1.2rem] font-techyCopy leading-[2.9rem] tracking-[.06em];
    color: transparentize(#423ba0, .2);

    &.smallCaps {
      @apply text-[80%] tracking-wider uppercase;
    }

    @media (min-width: $breakThou) and (-webkit-min-device-pixel-ratio: 2) {
      //

    }

    @media (max-width: $breakThou) {
      columns: 2 200px;
      column-rule: 2px dotted transparentize(#423ba0, .5);
      @apply text-[1.2rem] leading-[2.1em] text-justify tracking-wider gap-x-12 hyphens-auto;
    }

    @media (max-width: $breakOne) {
      columns: 2 200px;
      @apply columns-2;
    }

    @media (max-width: $breakTwo) {
      @apply text-[1.2rem] leading-[2.3em] tracking-[.01em];
      columns: 1;
    }

    @media (max-width: $breakTwo) and (-webkit-min-device-pixel-ratio: 2) {
      @apply text-[1.15rem];
      columns: 1;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        @apply text-[1.18em] mt-2 mr-0 mb-0 pt-0 px-0 pb-0;
        columns: 1;
    }

    @media only screen and (min-device-width : 375px) and (max-device-width : 667px) {
      //
    }

  }
</style>
