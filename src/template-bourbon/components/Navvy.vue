<template>
  <nav>
    <h1>
      <router-link :to="{ name: 'Bourbon' }">
        DREW HARPER
      </router-link>
    </h1>
    <section class="jobDesc">
      <h2>{{ store.copy.uiuxDesigner }}</h2>
      <h2>{{ store.copy.vizDesigner }}</h2>
    </section>
    <section class="contact">
      <p class="email">
        <a :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
      </p>
      <p class="resume">
        <a href="/resume/drew_harper_resume_portfolio.pdf" target="_blank">PDF Resume</a>
      </p>
    </section>
  </nav>
</template>

<script setup>
  import { inject } from 'vue'
  import { RouterLink } from 'vue-router'

  const store = inject('store')
</script>

<style lang='scss' scoped>
  @import "../assets/css/bourbon-main.scss";

  a {
    @apply text-base-ivory no-underline;

    &:link {
      @apply text-base-ivory no-underline;
    }

    &:hover {
      @apply text-bourbon-orange;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    @apply text-bourbon-ivory leading-4 m-0 p-0;

    a {
      @apply text-bourbon-ivory no-underline;
    }
  }

  nav {
    @apply flex flex-row flex-wrap justify-between items-center py-2 px-5;

    @media (max-width: theme("screens.breakOne")) {
      @apply justify-center;
    }

    a {
      @apply text-bourbon-ivory;

      &:hover {
        @apply text-[orange];
      }
    }
  }

  h1 {
    @apply font-bourbonSubhead font-normal text-[4em] leading-none tracking-[.06em] transition duration-[.25s] ease-in antialiased w-auto grow-0 drop-shadow-[4px_0px_3px_rgba(0,0,0,0.1)];

    @media (max-width: theme("screens.breakOne")) {
      @apply grow-0 text-right;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply grow-0 text-center;
    }

    @media (max-width: theme("screens.breakThree")) {
      font-size: 3.05em;
    }

  }

  section.jobDesc {
    @apply grow ml-[0.55rem] mt-[.25rem] transition duration-[.25s] ease-in;

    @media (max-width: theme("screens.breakOne")) {
      @apply grow-0 ml-2 mt-2;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply grow-0 text-center self-center ml-0 mt-2;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    @media (max-width: theme("screens.breakThree")) {
      @apply ml-0 mt-0;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    h2 {
      @apply font-bourbonHead text-[1.675rem] tracking-[0.075rem] leading-[1.55rem] antialiased mb-[.15rem] drop-shadow-[3px_0px_3px_rgba(0,0,0,0.1)];

      &:nth-child(2) {
        @apply text-[1.51rem] mb-[.1em];
      }

      @media (max-width: theme("screens.breakTwo")) {
        @apply inline-block text-[1.775em];

        &:nth-child(2) {
          @apply ml-1 text-[1.775em];
        }
      }

      @media (max-width: theme("screens.breakThree")) {
        @apply text-[1.25em];

        &:nth-child(2) {
          @apply text-[1.25em];
        }
      }
    }
  }

  section.contact {
    @apply uppercase mt-[.5rem] z-10 transition duration-[.25s] ease-in drop-shadow-[3px_0px_1px_rgba(0,0,0,0.1)];

    @media (max-width: theme("screens.breakOne")) {
      @apply w-full flex flex-row flex-wrap items-center justify-center gap-4;
    }

    @media (max-width: theme("screens.breakTwo")) {
      @apply mt-[0.5em] flex-row;
    }

    @media (max-width: theme("screens.breakThree")) {
      @apply mt-1 transition duration-[.25s] ease-in gap-x-2 gap-y-1;
    }

    p {
      @apply font-bourbonCopy tracking-[0.05rem] text-[1.15rem] leading-[1.35rem] lowercase antialiased;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }

      @media (max-width: theme("screens.breakOne")) {
        @apply justify-center text-[1.5rem] tracking-[0.1785rem] mt-[-.3em] leading-[1.95rem];

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          //
        }
      }

      @media (max-width: theme("screens.breakTwo")) {
        @apply text-[1.05rem] tracking-[.09em];
      }

      @media (max-width: theme("screens.breakThree")) {
        @apply justify-center text-[1rem] tracking-[.09em] leading-5 text-center;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          @apply leading-[1.6rem]
        }
      }
    }
  }
</style>
