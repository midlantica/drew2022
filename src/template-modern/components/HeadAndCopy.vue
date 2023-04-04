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
    @apply grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    @apply gap-x-1.5;
    @apply justify-items-start;
    @apply items-center;
    margin-bottom: 1rem;
    gap: .5rem;

    a.drewhead {
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
      @apply inline-block;
      font-family: $font-subhead;
      @apply tracking-[-0.01ch];
      @apply p-0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @apply self-center;
      @apply mt-[2.2rem];
      // >>>>>>
      @apply w-[20ch];
      @apply text-[#da2561];
      @apply font-normal;
      font-size: clamp(.8rem, 1.1rem, 1.25rem) !important;
      text-shadow: 1px 1px 4px black;
      // >>>>>>
      @apply text-white;
      @apply font-medium;
      @apply text-[1.1rem];
      @apply w-[20ch];

      @media (max-width: 535px) {
        width: initial;
        @apply mt-[.75rem];
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
    // @apply text-[185%];
    @apply text-[180%];
    @apply font-light;
    @apply capitalize;
    @apply tracking-wider;
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
    //   // @apply text-[1rem];
    //   // columns: 2 200px;
    //   @apply text-justify;
    //   @apply hyphens-auto;
    // }

    // @media (max-width: 670px) {
    //   columns: initial;
    //   @apply text-justify;
    //   @apply hyphens-auto;
    // }

    // @media (max-width: $breakTwo) {
    //   @apply text-justify;
    //   @apply hyphens-auto;
    // }
  }
</style>
