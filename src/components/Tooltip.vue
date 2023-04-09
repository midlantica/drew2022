<template>
  <div class="tooltip">
    <p>{{ tooltipText }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const tooltipText = ref('tooltipText')
</script>

<style lang="scss" scoped>
  .tooltip {
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    box-shadow: 0 2px 20px 0px black;
    @apply bg-[#d71d5b] py-20 px-6 w-[30ch] rounded-2xl;
    //
    @apply fixed top-[-3rem];

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //

    @media (max-width: $breakFour) {
      //
    }

    p {
      // @apply block;
      @apply text-[0.9em];
      @apply leading-[1.4em];
      @apply tracking-wider;
      @apply text-white;
      @apply font-medium;
      //
      @apply content-center;
      @apply items-center;
      @apply justify-center;
      @apply self-center;
      @apply text-left;
      @apply align-left;

    }
  }

  // Other templates
  body.corp .tooltip {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
    @apply rounded-sm;
    font-family: 'Bodoni Moda', Times, serif !important;
  }

  body.punk .tooltip {

    //
    p {
     @apply my-1 mx-auto;
    }
  }

  body.corp .tooltip {

    //
    p {
      font-family: 'Bodoni Moda', Times, serif !important;
      @apply text-[1rem];
      letter-spacing: .001rem;
      @apply leading-[1.4rem];
      @apply m-0;
      @apply font-medium;

      @media (max-width: $breakThou) {
        @apply text-[1.15rem];
        line-height: 1.75rem;
      }

      @media (max-width: $breakTwo) {
        @apply text-[1rem];
        @apply leading-6;
      }

    }
  }

  body.modern .tooltip {
    width: 45%;
    @apply m-auto;
    padding: 1rem 1.5rem;

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      @apply text-[.85rem];
      letter-spacing: .000rem;
      @apply leading-[1.4rem];
      @apply m-0;
      @apply font-light;

      // @media (max-width: $breakThou) {
      //   @apply text-[1.15rem];
      //   line-height: 1.75rem;
      // }

      // @media (max-width: $breakTwo) {
      //   @apply text-[1rem];
      //   @apply leading-6;
      // }

    }
  }
</style>
