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

  $outRed: hsla(356, 92%, 45%, 0.3);
  $outBlue: hsla(197, 88%, 66%, 0.3);

  a {
    color: $ivory;
    @apply no-underline;

    &:link {
      color: $ivory;
      @apply no-underline;
    }

    &:hover {
      color: $accent !important;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    @apply leading-4;
    @apply m-0;
    @apply p-0;
    color: $ivory !important;

    a {
      color: $ivory !important;
      @apply no-underline;
    }
  }

  nav {
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-between;
    @apply items-center;
    padding: 0.5em 1.25em;

    @media (max-width: $breakOne) {
      @apply justify-center;
    }
  }

  h1 {
    font-family: $font-subhead;
    @apply font-normal;
    @apply text-[4em];
    @apply leading-none;
    text-shadow: 4px 0px 3px $black;
    @apply tracking-[.06em];
    @apply transition duration-[.25s] ease-in;
    @apply antialiased;
    @apply w-auto;
    @apply grow-0;

    @media (max-width: $breakOne) {
      @apply grow-0;
      // @apply leading-[4.5rem];
      @apply text-right;
    }

    @media (max-width: $breakTwo) {
      @apply grow-0;
      @apply text-center;
    }

    @media (max-width: $breakThree) {
      font-size: 3.05em;
      // margin-bottom: -9px;
    }
  }

  section.jobDesc {
    @apply grow;
    @apply ml-[0.55rem] mt-[.25rem];
    @apply transition duration-[.25s] ease-in;
    // @apply flex;

    @media (max-width: $breakOne) {
      @apply grow-0;
      @apply ml-2 mt-2;
    }

    @media (max-width: $breakTwo) {
      @apply grow-0;
      @apply text-center;
      @apply self-center;
      @apply ml-0 mt-2;

      &:nth-child(1) {
        // @apply float-left;
        // @apply clear-left;
      }

      &:nth-child(2) {
        // @apply float-left;
        // @apply ml-0;
      }
    }

    @media (max-width: $breakThree) {
      // @apply grow-0;
      // @apply text-center;
      // @apply self-center;
      @apply ml-0 mt-0;

      &:nth-child(1) {
        // @apply float-left;
        // @apply clear-left;
      }

      &:nth-child(2) {
        // @apply float-left;
        // @apply ml-0;
      }
    }

    h2 {
      @apply text-[1.675rem];
      @apply tracking-[0.075rem];
      text-shadow: 3px 0px 3px $black;
      @apply leading-[1.55rem];
      @apply antialiased;
      @apply mb-[.15rem];

      &:nth-child(2) {
        @apply text-[1.51rem];
        @apply mb-[.1em];
      }

      @media (max-width: $breakTwo) {
        @apply inline-block;
        @apply text-[1.775em];
        // @apply mt-[-3px];

        &:nth-child(2) {
          @apply ml-1;
          @apply text-[1.775em];
          // @apply mt-[-3px];
          // @apply text-[1.775em];
        }
      }

      @media (max-width: $breakThree) {
        @apply text-[1.25em];

        &:nth-child(2) {
          @apply text-[1.25em];
          // @apply ml-1;
          // @apply mt-[-3px];
        }
      }
    }
  }

  section.contact {
    @apply uppercase;
    @apply mt-[.5rem];
    @apply z-10;
    text-shadow: 3px 0px 1px $black;
    @apply transition duration-[.25s] ease-in;

    @media (max-width: $breakOne) {
      @apply w-full;
      @apply flex flex-row flex-wrap items-center justify-center gap-4;
    }

    @media (max-width: $breakTwo) {
      @apply mt-[0.5em];
      @apply flex-row;
    }

    @media (max-width: $breakThree) {
      @apply mt-1;
      @apply transition duration-[.25s] ease-in;
      @apply gap-x-2 gap-y-1;
    }

    p {
      font-family: $font-copy;
      @apply tracking-[0.05rem];
      @apply text-[1.15rem];
      @apply leading-[1.35rem];
      @apply lowercase;
      @apply antialiased;

      &:nth-child(1) {
        // @apply text-[1.25em];
      }

      &:nth-child(2) {
        // @apply text-[1.25em];
      }

      @media (max-width: $breakOne) {
        @apply justify-center;
        @apply text-[1.5rem];
        @apply tracking-[0.1785rem];
        @apply mt-[-.3em];
        line-height: 1.95rem;
        // letter-spacing: 0.215rem !important;

        &:nth-child(1) {
          // @apply float-left;
          // @apply clear-left;
          // @apply mr-2;
        }

        &:nth-child(2) {
          // @apply float-left;
        }
      }

      @media (max-width: $breakTwo) {
        @apply text-[1.05rem];
        @apply tracking-[.09em];
      }

      @media (max-width: $breakThree) {
        @apply justify-center;
        @apply text-[1rem];
        @apply tracking-[.09em];
        @apply leading-5;
        // @apply mb-[-4px];
        @apply text-center;
        // letter-spacing: 0.215rem !important;

        &:nth-child(1) {
          // @apply float-none clear-none;
          // @apply mr-0;
        }

        &:nth-child(2) {
          // @apply float-none;
          line-height: 1.6em;
        }
      }
    }
  }
</style>
