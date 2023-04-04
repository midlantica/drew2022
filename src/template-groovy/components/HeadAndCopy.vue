<template>
  <section>
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy" />
  </section>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang='scss' scoped>
  @import '../assets/css/groovy-main.scss';

  $breakThree: 530px;

  section {
    @apply mt-10 mx-6 mb-2;

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      margin: 1.8rem 1rem 0rem;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  h1 {
    @apply font-groovyHead text-[1.5rem] leading-[2.1rem] font-medium mb-2 text-groovy-redDk;
    text-transform: initial;

    @media (min-width: $breakThou) {
      max-width: 26ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 26ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }
  }

  p {
    @apply font-groovyCopy text-base-grey text-[1.125rem] tracking-[0.009rem] leading-[2.6rem];

    @media (max-width: $breakThou) {
      @apply gap-x-12 text-justify hyphens-auto;
      columns: 2 200px;
      column-rule: 2px dotted transparentize($orange, 0.5);
    }

    @media (max-width: $breakOne) {
      @apply tracking-[0.05rem];
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      @apply text-[1.05rem] leading-[2.4rem] pl-[1.3rem] mr-2;
      columns: initial;
      border-left: 2px dotted transparentize($orange, 0.5);
    }

    @media (max-width: $breakTwo) {
      //
    }

  }
</style>
