<template>
  <nav>
    <h1>
      <router-link :to="{ name: 'ModernProjects' }">
        &nbsp;drew harper
      </router-link>
    </h1>
    <section class="jobDesc">
      <h2>{{ store.copy.uiuxDesigner }} / {{ store.copy.vizDesigner }}</h2>
    </section>
    <section class="contact">
      <p class="flexRowWrap flex-shrink-1 just-center">
        <a :href="`mailto:` + `${store.copy.druEmail}`" class="marTH">{{
          store.copy.druEmail
        }}</a>
        <a :href="resumeUrl" target="_blank" class="marTH">PDF&nbsp;Resume</a>
      </p>
    </section>
  </nav>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

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
      color: $accent;
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
    @apply normal-case;
    @apply font-extralight;

    a {
      color: $ivory !important;
      @apply no-underline;
    }
  }

  nav {
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    @apply justify-center;
    @apply items-center;
    padding: 1.5rem 0 0 !important;
  }

  h1 {
    @apply normal-case;
    @apply text-[3.75rem];
    @apply font-extralight;
    @apply tracking-[-0.05em];
    font-family: $font-subhead;
    text-shadow: 1px 1px 4px $black;
    @apply transition duration-[.25s] ease-in;
    @apply duration-200;
    @apply leading-normal;
    @apply text-center;
    @apply antialiased;
    @apply w-auto;
    @apply grow;

    a {
      color: $accent !important;

      //
      &:hover {
        color: $accent !important;
      }
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  section.jobDesc {
    @apply mt-0;
    @apply lowercase;
    @apply transition duration-[.25s] ease-in;

    @media (max-width: $breakTwo) {
      @apply text-center;
      @apply self-center;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakThree) {
      @apply w-[20ch];
    }

    h2 {
      @apply text-[1.15rem];
      @apply tracking-[-0.01em];
      @apply leading-[1.5em];
      @apply font-normal;
      // color: hsla(0, 0%, 100%, 0.85) !important;
      @apply text-[hsla(0,0%,100%,0.85)];
      @apply text-center;
      text-shadow: 1px 1px 4px $black;
      @apply lowercase;
      @apply antialiased;

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        //
      }
    }
  }

  section.contact {
    @apply mt-[0.2em];
    @apply mb-0;
    @apply z-10;
    @apply transition duration-[.25s] ease-in;

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      @apply w-[30ch];
    }

    p {
      font-family: $font-subhead;
      @apply tracking-[-0.01em];
      @apply font-normal;
      font-size: 1rem !important;
      @apply text-center;
      @apply mt-2;
      text-shadow: 1px 1px 4px $black;
      @apply leading-[1.4rem];
      @apply tracking-[0.05rem];
      @apply antialiased;
      @apply text-[0.85rem];

      a {
        @apply border border-[#ff000054] border-solid;
        @apply py-[0.3rem] px-[0.9rem];
        @apply rounded-[2rem];
        @apply my-0 mx-2;

        &:hover {
          @apply text-[$yellow-red];
          @apply underline;
          @apply no-underline;
          background: darken($ruby, 15);
        }
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        //
      }
    }
  }

  h1 {
    color: $accent-red !important;
    @apply normal-case;
    @apply text-center;

    a {
      color: $accent-red !important;

      &:hover {
        color: $accent-red !important;
      }
    }
  }
</style>
