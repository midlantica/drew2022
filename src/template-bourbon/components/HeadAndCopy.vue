<template>
  <div class="areaWrapper">
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

  .areaWrapper {
    @apply w-full pt-4 pl-5 pr-2;

    @media (min-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      @apply px-4;
    }

    @media (max-width: var(--breakTwo)) {
      @apply px-2;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  .headBlock {
    grid-template-columns: 88px auto;
    @apply grid gap-x-1.5 justify-items-start items-center auto-rows-auto;

    a.drewhead {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      @apply bg-no-repeat bg-cover w-[78px] h-[94px] self-start bg-[url('/img/drew_mug_red.png')];
    }

    h1 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @apply font-bourbonSubhead text-[1.7rem] inline-block text-bourbon-accentRed p-0 self-center max-w-[30ch];

      @media (min-width: $breakThou) {
        @apply max-w-[30ch];
      }

      @media (max-width: $breakOne) {
        @apply text-[1.65rem];
        //
      }

      @media (max-width: var(--breakTwo)) {
        @apply max-w-[30ch] text-[1.5rem];
      }

      @media (max-width: $breakThree) {
        @apply text-[1.45rem] m-0;
      }

    }
  }

  p.smallCaps {
    @apply text-[180%] uppercase;
  }

  p {
    @apply leading-[2.4rem] font-bourbonCopy text-[1.1rem] text-base-grey mt-2 mx-2 mb-0 tracking-[0.03rem] mr-2;

    @media (max-width: $breakThou) {
      columns: 2 20ch;
      @apply leading-9 gap-x-12 text-justify hyphens-auto rule-w-[1px] rule-style-solid rule-color-[hsla(7,77%,43%,50%)];
    }

    @media (max-width: $breakOne) {
      @apply tracking-[0.05rem] text-justify hyphens-auto;
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply text-justify hyphens-auto;
    }

    @media (max-width: var(--breakTwo)) {
      @apply text-justify hyphens-auto;
    }
  }
</style>
