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

  .wrap {
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    @apply mt-4 mr-4 mb-4 ml-6;

    @media (max-width: $breakTwo) {
      margin: 0em 1em 1em;
    }
  }

  h1 {
    @apply font-corpHead text-corp-blueDark;
    @apply normal-case;
    margin: 0em 0em .5em;
    @apply p-0;
    @apply leading-[2rem];
    @apply transition duration-[.25s] ease-in;
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
    @apply font-medium;
    @apply capitalize;
    @apply text-[75%];
    @apply tracking-wider;
  }

  p {
    color: transparentize($black, 0.15);
    @apply font-corpCopy;
    @apply font-normal;
    font-size: 1.1rem;
    line-height: 2.9rem;
    padding-left: 1.2rem;
    text-align: justify;
    @apply border-2 border-dotted border-corp-paleBlue;
    @apply ml-[.2rem];
    letter-spacing: 0.00rem;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      @apply gap-x-12;
      column-rule: 2px dotted $paleBlue;
      @apply text-justify;
      @apply hyphens-auto;
    }

    @media (max-width: $breakOne) {
      @apply tracking-[0.05rem];
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      columns: initial;
      padding-left: 1.3rem;
      @apply border-2 border-dotted border-corp-paleBlue;
      margin-right: 0.5rem;
    }

    @media (max-width: $breakTwo) {
      //
    }
  }
</style>
