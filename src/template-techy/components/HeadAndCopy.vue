<template>
  <section>
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy" />
  </section>
</template>

<script setup>
  // import { defineComponent } from 'vue'
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import '../assets/css/techy-main.scss';

  section {
    margin: 2rem 1.85rem 0rem 2.25rem;

    @media (min-width: $breakThou) {
      // margin-top: 1.5rem;
      // @apply ml-6;
      // @apply ml-6;
    }

    @media (max-width: $breakThou) {
      margin-top: 1.5rem;
      @apply ml-8;
      @apply ml-8;
    }

    @media (max-width: $breakOne) {
      @apply ml-4;
      @apply ml-4;
    }

    @media (max-width: $breakTwo) {
      // @apply ml-3;
      // margin-right: .75rem;
    }

    @media (max-width: $breakThree) {
      // @apply ml-1;
      // margin-right: .25rem;
    }
  }

  h1 {
    font-family: $font-head;
    @apply font-semibold;
    text-transform: initial;
    @apply leading-[2rem];
    @apply text-[1.5rem];
    margin-bottom: .85rem;
    margin-top: 2rem;
    color: $blueTech;

    @media (min-width: $breakThou) {
      max-width: 26ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 26ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }
  }

  p.smallCaps {
    // font-family: $font-caps;
    font-variant: small-caps;
    font-size: 80%;
    // @apply font-medium;
  }

  p {
    font-family: $font-copy;
    @apply text-[1.3rem];
    @apply leading-[3rem];
    color: transparentize($blueTech, .2);
    letter-spacing: 0.06em;

    @media (min-width: $breakThou) and (-webkit-min-device-pixel-ratio: 2) {
      // @apply text-[1.2rem];
      // line-height: 2.6em;
    }

    @media (max-width: $breakThou) {
      @apply text-[1.2rem];
      line-height: 2.1em;
      @apply tracking-wider;
      text-align: justify;
      columns: 2 200px;
      @apply gap-x-12;
      @apply text-justify;
      hyphens: auto;
      column-rule: 2px dotted transparentize($blueTech, .5);
    }

    @media (max-width: $breakOne) {
      // @apply text-[1rem];
      // line-height: 2.2em;
      // margin: 1.5em .5em 0;
      // letter-spacing: 0.00em;
      // background: red;
      columns: 2 200px;
    }

    @media (max-width: $breakTwo) {
      @apply text-[1.2rem];
      line-height: 2.3em;
      // margin: 1em 1em 0;
      letter-spacing: 0.01em;
      // background: red;
    }

    @media (max-width: $breakTwo) and (-webkit-min-device-pixel-ratio: 2) {
      @apply text-[1.15rem];
      // line-height: 2.4em;
      // margin: 1em 1em 0;
      // padding: 0 1em;
      // background: red;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      margin: 0.5em 0em 0em;
      // @apply pb-4;
      font-size: 1.18em;
      padding: 0em 0em 0em;
      // background: purple;
    }

    @media only screen and (min-device-width : 375px) and (max-device-width : 667px) {
      // background: red;
    }

  }
</style>
