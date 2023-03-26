<template>
  <div class="wrap">
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy" />
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import "../assets/css/corp-main.scss";

  // $breakOne: 840px;
  // $breakTwo: 630px;
  // $breakThree: 430px;

  $paleBlue: #7cc3fa;

  .wrap {
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    margin: 1em 1em 1em 1.5rem;
    // @apply relative;

    @media (max-width: $breakTwo) {
      margin: 0em 1em 1em;
    }
  }

  h1 {
    font-family: $font-head;
    // @apply font-medium;
    color: $blue-dark;
    @apply normal-case;
    // @apply text-[1.5em];
    margin: 0em 0em .5em;
    @apply p-0;
    @apply leading-[2rem];
    transition: 0.25s ease-in;
    @apply tracking-[0.01rem];
    @apply w-full;
    //
    @apply font-semibold;
    max-width: 28ch;
    @apply text-[1.3rem];

    @media (min-width: $breakThou) {
      max-width: 28ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 28ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }

  }

  p.smallCaps {
    font-family: $font-caps;
    font-variant: small-caps;
    font-size: 75%;
    @apply font-medium;
  }

  p {
    color: transparentize($black, 0.15);
    font-family: $font-copy;
    font-weight: normal;
    font-size: 1.05rem;
    line-height: 2.8rem;
    padding-left: 1.7rem;
    text-align: justify;
    border-left: 2px dotted $paleBlue;
    @apply ml-4;
    letter-spacing: 0.00rem;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      @apply gap-x-12;
      column-rule: 2px dotted $paleBlue;
      @apply text-justify;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      @apply tracking-[0.05rem];
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      columns: initial;
      // font-size: 1.05rem;
      // @apply leading-[2.4rem];
      padding-left: 1.3rem;
      border-left: 2px dotted $paleBlue;
      margin-right: 0.5rem;
    }

    @media (max-width: $breakTwo) {
      //
    }
  }
</style>
