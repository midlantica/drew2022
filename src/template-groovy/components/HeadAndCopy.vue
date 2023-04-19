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

  :root {
    --breakThree: 530px;
  }

  section {
    @apply mt-10 mx-6 mb-0;

    @media (max-width: 1024px) {
      //
    }

    @media (max-width: 840px) {
      //
    }

    @media (max-width: 630px) {
      @apply mt-[1.8rem] mx-4 mb-0;
    }

    @media (max-width: 430px) {
      //
    }
  }

  h1 {
    @apply font-groovyHead text-[1.5rem] leading-[2.1rem] font-medium mb-2 text-groovy-redDk normal-case;

    @media (min-width: 1024px) {
      max-width: 26ch;
    }

    @media (max-width: 1024px) {
      max-width: initial;
    }

    @media (max-width: 840px) {
      max-width: initial;
    }

    @media (max-width: 630px) {
      max-width: 26ch;
    }

    @media (max-width: 430px) {
      max-width: initial;
    }
  }

  p {
    @apply font-groovyCopy text-base-grey text-[1.125rem] tracking-[0.009rem] leading-[2.6rem];

    @media (max-width: 1024px) {
      columns: 2 200px;
      @apply gap-x-12 text-justify hyphens-auto rule-w-2 rule-style-dotted rule-color-[hsla(39,100%,50%,.75)];
    }

    @media (max-width: 840px) {
      columns: 2 200px;
      @apply tracking-[0.05rem];
    }

    @media (max-width: 670px) {
      columns: initial;
      @apply text-[1.05rem] leading-[2.4rem] pl-[1.3rem] mr-2 border-l-2 border-dotted border-[hsla(39,100%,50%,.75)];
    }

    @media (max-width: 630px) {
      //
    }

  }
</style>
