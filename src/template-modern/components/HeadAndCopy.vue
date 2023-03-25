<template>
  <div>
    <div class="headBlock">
      <router-link :to="{ name: 'ModernExtras' }" class="drewhead jelloHorizontal" />
      <h1>{{ store.copy.druHead }}</h1>
    </div>
    <p v-html="store.copy.druCopy" />
  </div>
</template>

<script setup>
// import { defineComponent } from 'vue'
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    @apply gap-x-1.5;
    @apply justify-items-start;
    @apply items-center;
    margin-bottom: 1rem;
    gap: .5rem;

    a.drewhead {
      @apply ml-4;
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
      letter-spacing: -0.01ch;
      @apply p-0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @apply self-center;
      margin-top: 2.2rem;
      // >>>>>>
      width: 20ch;
      color: #da2561 !important;
      font-weight: 400;
      font-size: clamp(.8rem, 1.1rem, 1.25rem) !important;
      text-shadow: 1px 1px 4px black;
      // >>>>>>
      @apply text-white;
      @apply font-medium;
      @apply text-[1.1rem];
      width: 20ch;

      @media (max-width: 535px) {
        width: initial;
        margin-top: .75rem;
      }

      @media (max-width: $breakOne) {
        max-width: initial;
        // @apply text-[1.65rem];
      }

      @media (max-width: $breakTwo) {
        @apply max-w-[30ch];
        // @apply text-[1.5rem];
      }

      @media (max-width: $breakThree) {
        // @apply text-[1.25rem];
      }

    }
  }

  p.smallCaps {
    font-variant: small-caps !important;
    @apply text-[185%];
    @apply font-light;
  }

  p {
    font-family: $font-copy;
    font-size: clamp(0.8rem, 0.95rem, 1.35rem);
    line-height: clamp(1.5rem, 2.2rem, 2.6rem);
    @apply font-light;
    margin: 0rem !important;
    // margin: 0.0rem auto 1rem !important;
    @apply tracking-[0.03rem];

    // @media (max-width: 300000rem) {
    //   // @apply text-[1.3rem];
    //   // line-height: 2.5rem !important;
    //   columns: 2 20ch;
    //   @apply gap-x-12;
    //   column-rule: 1px solid transparentize($accent-red, .75);
    //   @apply text-justify;
    //   hyphens: none;
    // }

    // @media (max-width: $breakOne) {
    //   @apply tracking-[0.05rem];
    //   // font-size: 1rem !important;
    //   // columns: 2 200px;
    //   @apply text-justify;
    //   hyphens: auto;
    // }

    // @media (max-width: 670px) {
    //   columns: initial;
    //   @apply text-justify;
    //   hyphens: auto;
    // }

    // @media (max-width: $breakTwo) {
    //   @apply text-justify;
    //   hyphens: auto;
    // }
  }
</style>
