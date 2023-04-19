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
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

  .headBlock {
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    @apply grid gap-x-1.5 justify-items-start items-center mt-4 mb-3 gap-2;

    a.drewhead {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      @apply bg-no-repeat bg-cover w-[78px] h-[94px] self-start bg-[url('/img/drew_mug_red.png')];
    }

    h1 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      @apply inline-block font-modernSubhead tracking-[-0.01ch] p-0 self-center mt-[2.2rem] w-[20ch] text-white font-normal text-[1.1rem] drop-shadow-[1px_1px_4px_black];

      @media (max-width: 535px) {
        @apply mt-[.75rem] w-auto;
      }

      @media (max-width: var(--breakOne)) {
        @apply w-auto;
      }

      @media (max-width: var(--breakTwo)) {
        @apply max-w-[30ch];
      }

      @media (max-width: var(--breakThree)) {
        //
      }

    }
  }

  p.smallCaps {
    @apply text-[180%] font-light uppercase tracking-wider;
  }

  p {
    font-size: clamp(0.8rem, 0.95rem, 1.35rem);
    line-height: clamp(1.5rem, 2.2rem, 2.6rem);
    @apply font-light tracking-[0.03rem] m-0 font-modernCopy;
  }
</style>
