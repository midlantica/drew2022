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
      @apply text-[0.9em] leading-[1.4em] tracking-wider text-white font-medium content-center items-center justify-center self-center text-left align-left;

    }
  }

  // Other templates
  body.corp .tooltip {
    @apply rounded-sm font-corpCopy shadow-[0px_0px_3px_-1px_hsl(0,_0%,_0%,_50%)];
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
      @apply text-[1rem] leading-[1.4rem] m-0 font-medium tracking-[.001rem] font-corpCopy;

      @media (max-width: $breakThou) {
        @apply text-[1.15rem] leading-7;
      }

      @media (max-width: $breakTwo) {
        @apply text-[1rem] leading-6;
      }

    }
  }

  body.modern .tooltip {
    @apply m-auto w-[45%] py-4 px-6;

    p {
      @apply text-[.85rem] leading-[1.4rem] m-0 font-light font-modernCopy tracking-0;
    }
  }
</style>
