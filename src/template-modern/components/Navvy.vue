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
      <p class="flex flex-row flex-wrap justify-center gap-0 shrink">
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

  a {
    @apply text-base-ivory no-underline;

    &:link {
      @apply text-base-ivory no-underline;
    }

    &:hover {
      @apply text-modern-accent;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    @apply leading-4 m-0 p-0 normal-case font-extralight text-base-ivory;

    a {
      @apply no-underline text-base-ivory;
    }
  }

  nav {
    @apply flex flex-col flex-nowrap justify-center items-center pt-6 px-0 pb-0;
  }

  h1 {
    @apply font-modernSubhead normal-case text-[3.25rem] font-extralight tracking-[-0.05em] transition ease-in duration-200 leading-normal text-center antialiased w-auto grow drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)];

    a {
      @apply text-[3.25rem] text-modern-accent;

      &:hover {
        @apply text-modern-accent;
      }
    }

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }

    @media (max-width: theme("screens.breakXsm")) {
      //
    }
  }

  section.jobDesc {
    @apply transition duration-[.25s] ease-in lowercase;

    @media (max-width: theme("screens.breakSm")) {
      @apply text-center self-center;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply w-[20ch];
    }

    h2 {
      @apply text-[1.15rem] tracking-[-0.01em] leading-[1.5em] font-normal text-[hsla(0,0%,100%,0.85)] text-center lowercase antialiased drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)];

      @media (max-width: theme("screens.breakSm")) {
        //
      }

      @media (max-width: theme("screens.breakXsm")) {
        //
      }
    }
  }

  section.contact {
    @apply mt-0 z-10 transition duration-[.25s] ease-in;

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply w-[30ch];
    }

    p {
      @apply font-modernCopy font-normal text-center mt-4 leading-[1.4rem] tracking-[0.05rem] antialiased text-[0.75rem] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)];

      a {
        @apply border border-[#ff000054] border-solid py-[0.3rem] rounded-[2rem] my-0 mx-2 px-5;

        &:hover {
          @apply text-black no-underline bg-modern-ruby;
        }
      }

      @media (max-width: theme("screens.breakLg")) {
        //
      }

      @media (max-width: theme("screens.breakSm")) {
        //
      }

      @media (max-width: theme("screens.breakXsm")) {
        //
      }
    }
  }

  h1 {
    @apply text-modern-accentRed normal-case text-center;

    a {
      @apply text-modern-accentRed;

      &:hover {
        @apply text-modern-accentRed;
      }
    }
  }
</style>
