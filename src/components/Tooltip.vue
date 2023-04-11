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
    @apply bg-[#d71d5b] py-20 px-6 w-[30ch] rounded-2xl shadow-[0px_2px_20px_0px_black] fixed top-[-3rem];

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakFour) {
      //
    }

    p {
      // @apply block;
      @apply text-[0.9em] leading-[1.4em] tracking-wider text-white font-medium content-center items-center justify-center self-center text-left align-left;

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
      letter-spacing: .001rem;
      @apply text-[1rem] leading-[1.4rem] m-0 font-medium;

      @media (max-width: $breakThou) {
        @apply text-[1.15rem];
        line-height: 1.75rem;
      }

      @media (max-width: $breakTwo) {
        @apply text-[1rem] leading-6;
      }

    }
  }

  body.modern .tooltip {
    @apply m-auto;
    width: 45%;
    padding: 1rem 1.5rem;

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      letter-spacing: .000rem;
      @apply text-[.85rem] leading-[1.4rem] m-0 font-light;
    }
  }
</style>
