<template>
  <div>
    <div class="grid grid-cols-[88px_auto] auto-rows-auto gap-x-1.5 justify-items-start items-center mt-4 mb-3 gap-2">
      <router-link :to="{ name: 'ModernExtras' }" class="col-start-1 col-end-2 row-start-1 row-end-2 bg-no-repeat bg-cover w-[78px] h-[94px] self-start bg-[url('/img/drew_mug_red.png')] jelloHorizontal" />
      <h1>{{ store.copy.druHead }}</h1>
    </div>
    <p class="font-light text-[0.95rem] leading-[2.2rem] tracking-[0.03rem] m-0 font-modernCopy text-white" v-html="store.copy.druCopy" />
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>

  h1 {
    @apply col-start-2 col-end-3 row-start-1 row-end-2  inline-block font-modernSubhead tracking-[-0.01ch] p-0 self-center mt-[2.2rem] w-[20ch] text-white font-normal text-[1.1rem] drop-shadow-[1px_1px_4px_black];

    @media (max-width: 535px) {
      @apply mt-[.75rem] w-auto;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply w-auto;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply max-w-[30ch];
    }

    @media (max-width: theme("screens.breakXsm")) {
      //
    }
  }

</style>
