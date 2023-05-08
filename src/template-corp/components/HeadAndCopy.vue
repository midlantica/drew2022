<template>
  <div class="flex flex-col mx-4 mt-0 mb-4 ml-4 ml-6 mr-8 flex-nowrap breakXlg:mt-0">
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy" />
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import "../assets/css/corp-main.scss";

  h1 {
    @apply max-w-[28ch] font-corpHead text-corp-blueDark normal-case p-0 leading-[2rem] transition duration-[.25s] ease-in tracking-[0.01rem] w-full font-semibold text-[1.3rem] mt-0 mx-0 mb-2;

    @media (min-width: theme("screens.breakXlg")) {
      max-width: 28ch;
    }

    @media (max-width: theme("screens.breakXlg")) {
      max-width: initial;
    }

    @media (max-width: theme("screens.breakLg")) {
      max-width: initial;
    }

    @media (max-width: theme("screens.breakSm")) {
      max-width: 28ch;
    }

    @media (max-width: theme("screens.breakXsm")) {
      max-width: initial;
    }

  }

  p.smallCaps {
    @apply tracking-wider text-[75%] uppercase font-medium;
  }

  p {
    @apply text-corp-blueDark/90 font-corpCopy font-normal border-l-2 border-dotted border-corp-paleBlue ml-[.2rem] text-justify pl-[1.2rem] leading-[2.8rem] text-[1.1rem] tracking-normal hyphens-auto;

    @media (max-width: theme("screens.breakXlg")) {
      columns: 2 200px;
      @apply gap-x-12 text-justify hyphens-auto rule-w-[2px] rule-style-dotted rule-color-[#7cc3fa];
    }

    @media (max-width: theme("screens.breakLg")) {
      columns: 2 200px;
      @apply tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply border-l-2 border-dotted border-corp-paleBlue mr-2 pl-[1.3rem];
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }
  }
</style>
