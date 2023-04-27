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

    @media (min-width: theme("screens.breakXlg")) {
      //
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply px-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply px-2;
    }

    @media (max-width: theme("screens.breakXsm")) {
      //
    }
  }

  .headBlock {
    @apply grid grid-cols-[88px_auto] gap-x-1.5 justify-items-start items-center auto-rows-auto;

    a.drewhead {
      @apply col-start-1 col-end-2 row-start-1 row-end-2 bg-no-repeat bg-cover w-[78px] h-[94px] self-start bg-[url('/img/drew_mug_red.png')];
    }

    h1 {
      @apply col-start-2 col-end-3 row-start-1 row-end-2 font-bourbonSubhead text-[1.7rem] inline-block text-bourbon-accentRed p-0 self-center max-w-[30ch];

      @media (min-width: theme("screens.breakXlg")) {
        @apply max-w-[30ch];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply text-[1.65rem];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply max-w-[30ch] text-[1.5rem];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply text-[1.45rem] m-0;
      }

    }
  }

  p {
    @apply leading-[2.4rem] font-bourbonCopy text-[1.1rem] text-base-grey mt-2 mx-2 mb-0 tracking-[0.03rem] mr-2;

    @media (max-width: theme("screens.breakXlg")) {
      @apply columns-2 leading-9 gap-x-12 text-justify hyphens-auto rule-w-[1px] rule-style-solid rule-color-[hsla(7,77%,43%,50%)];
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply columns-2 tracking-[0.05rem] text-justify hyphens-auto;
    }

    @media (max-width: 670px) {
      @apply columns-1 text-justify hyphens-auto;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply columns-1 text-justify hyphens-auto;
    }
  }
</style>
