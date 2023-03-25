<template>
  <div class="marT1 marL1H marRH">
    <div class="headBlock">
      <router-link :to="{ name: 'ExtrasBourbon' }" class="drewhead jelloHorizontal" />
      <h1>{{ store.copy.druHead }}</h1>
    </div>
    <p v-html="store.copy.druCopy" />
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import "../assets/css/bourbon-main.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-auto-rows: auto;
    grid-template-rows: auto;
    @apply gap-x-1.5;
    @apply justify-items-start;
    @apply items-center;
    @apply mt-2;

    a.drewhead {
      // @apply ml-4;
      background-image: url(/img/drew_mug_red.png);
      @apply bg-no-repeat;
      @apply bg-cover;
      @apply w-[78px];
      @apply h-[94px];
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      @apply self-start;
    }

    h1 {
      display: inline-block;
      font-family: $font-subhead;
      color: $accent-red;
      font-size: 1.7rem;
      @apply p-0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @apply self-center;
      @apply max-w-[30ch];

      @media (min-width: $breakThou) {
        @apply max-w-[30ch];
      }

      @media (max-width: $breakOne) {
        max-width: initial;
        @apply text-[1.65rem];
      }

      @media (max-width: $breakTwo) {
        @apply max-w-[30ch];
        @apply text-[1.5rem];
      }

      @media (max-width: $breakThree) {
        @apply text-[1.15rem];
      }

    }
  }

  p.smallCaps {
    font-variant: small-caps !important;
    // @apply all-small-caps;
    @apply text-[185%];
    // @apply font-medium;
  }

  p {
    font-family: $font-copy;
    color: $grey;
    @apply text-[1.1rem];
    @apply leading-[2.6rem];
    @apply mt-2 mx-2 mb-0;
    @apply tracking-[0.03rem];

    @media (max-width: $breakThou) {
      columns: 2 20ch;
      @apply leading-9;
      @apply gap-x-12;
      column-rule: 1px solid transparentize($accent-red, .75);
      @apply text-justify;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      @apply tracking-[0.05rem];
      @apply text-justify;
      hyphens: auto;
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply text-justify;
      hyphens: auto;
    }

    @media (max-width: $breakTwo) {
      @apply text-justify;
      hyphens: auto;
    }
  }
</style>
