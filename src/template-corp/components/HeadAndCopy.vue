<template>
  <div class="wrap">
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

  .wrap {
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    @apply mt-4 mr-4 mb-4 ml-6;

    @media (max-width: $breakTwo) {
      margin: 0em 1em 1em;
    }
  }

  h1 {
    // max-width: 28ch;
    @apply max-w-[28ch] font-corpHead text-corp-blueDark normal-case p-0 leading-[2rem] transition duration-[.25s] ease-in tracking-[0.01rem] w-full font-semibold text-[1.3rem] mt-0 mx-0 mb-2;

    @media (min-width: $breakThou) {
      max-width: 28ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 28ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }

  }

  p.smallCaps {
    @apply tracking-wider text-[75%] capitalize font-medium;
  }

  p {
    color: transparentize($black, 0.15);
    @apply font-corpCopy font-normal border-l-2 border-dotted border-corp-paleBlue ml-[.2rem] text-justify pl-[1.2rem] leading-[2.9rem] text-[1.1rem] tracking-normal;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      column-rule: 2px dotted #7cc3fa;
      @apply gap-x-12 text-justify hyphens-auto;
    }

    @media (max-width: $breakOne) {
      columns: 2 200px;
      @apply tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply border-l-2 border-dotted border-corp-paleBlue mr-2 pl-[1.3rem];
    }

    @media (max-width: $breakTwo) {
      //
    }
  }
</style>
