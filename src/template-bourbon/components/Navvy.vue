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
    @apply leading-4;
    text-shadow: 4px 0px 3px $black;
    @apply tracking-[.06em];
    @apply transition duration-[.25s] ease-in;
    @apply antialiased;
    @apply w-auto;
    @apply grow-0;

    @media (max-width: $breakOne) {
      @apply grow-0;
      @apply leading-[4.5rem];
      @apply text-right;
    }

    @media (max-width: $breakTwo) {
      @apply grow-0;
      @apply text-center;
    }

    @media (max-width: $breakThree) {
      font-size: 2.75em;
      margin-bottom: -9px;
    }
  }

  section.jobDesc {
    @apply grow;
    @apply ml-4 mt-[.1rem];
    @apply transition duration-[.25s] ease-in;

    @media (max-width: $breakTwo) {
      @apply grow-0;
      @apply text-center;
      @apply self-center;

      &:nth-child(1) {
        @apply float-left;
        @apply clear-left;
      }

      &:nth-child(2) {
        @apply float-left;
        @apply ml-0;
      }
    }

    @media (max-width: $breakOne) {
      @apply grow-0;
    }

    h2 {
      @apply text-[1.6em];
      @apply tracking-[0.03em];
      text-shadow: 3px 0px 3px $black;
      @apply leading-[1.55rem];
      @apply antialiased;

      &:nth-child(2) {
        @apply text-[1.45rem];
        @apply mb-[.1em];
      }

      @media (max-width: $breakTwo) {
        @apply inline-block;
        @apply text-[1.775em];
        @apply mt-[-3px];

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: $breakThree) {
        @apply text-[1.25em];
      }
    }
  }

  section.contact {
    @apply uppercase;
    @apply mt-3 ml-4 mb-1;
    @apply z-10;
    text-shadow: 3px 0px 1px $black;
    @apply transition duration-[.25s] ease-in;

    @media (max-width: $breakOne) {
      @apply ml-0;
    }

    @media (max-width: $breakTwo) {
      @apply mt-[.4em];
    }

    @media (max-width: $breakThree) {
      @apply mt-0;
      @apply transition duration-[.25s] ease-in;
    }

    p {
      font-family: $font-copy;
      @apply tracking-[0.05rem];
      @apply text-[1.2rem];
      @apply leading-5;
      @apply lowercase;
      @apply antialiased;

      &:nth-child(1) {
        @apply text-[1.25em];
      }

      &:nth-child(2) {
        @apply text-[1.25em];
      }

      @media (max-width: $breakOne) {
        @apply justify-center;
        @apply text-[1.5rem];
        @apply tracking-[0.1785rem];
        @apply mt-[-.3em];

        &:nth-child(1) {
          @apply float-left;
          @apply clear-left;
          @apply mr-2;
        }

        &:nth-child(2) {
          @apply float-left;
        }
      }

      @media (max-width: $breakTwo) {
        @apply text-[1.05rem];
        @apply tracking-[.09em];
      }

      @media (max-width: $breakThree) {
        @apply justify-center;
        @apply text-[1.15rem];
        @apply tracking-[.09em];
        @apply leading-5;
        @apply mb-[-4px];
        @apply text-center;

        &:nth-child(1) {
          @apply float-none clear-none;
          @apply mr-0;
        }

        &:nth-child(2) {
          @apply float-none;
          font-size: 1.04em !important;
          line-height: 1.6em;
          margin-left: 0 !important;
        }
      }
    }
  }
</style>
