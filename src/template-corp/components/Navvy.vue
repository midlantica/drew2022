<template>
  <nav>
    <section class="flex min-[830px]:flex-column flex-row flex-wrap w-full min-[830px]:content-center justify-center gap-0">
      <div class="drewTop max-[830px]:m-auto gap-2 grow">
        <router-link :to="{ name: 'Corp' }" class="w-full flex max-[830px]:flex-column flex-row flex-wrap content-center gap-6 justify-center">
          <router-link :to="{ name: 'ExtrasCorp' }" class="drewhead jelloHorizontal content-center m-0" />
          <drewHarper class="drewHarper marTH" />
        </router-link>
        <div class="flex flex-row just-center">
          <h3>{{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}</h3>
        </div>
      </div>
      <section class="contact">
        <p class="resume">
          <a :href="resumeUrl" target="_blank">PDF Resume</a>
        </p>
        <p class="email">
          <a :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
        </p>
      </section>
    </section>
  </nav>
</template>

<script setup>
  import drewHarper from '../components/navvyArt/drewHarper.vue'
  import { inject } from 'vue'

  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang='scss' scoped>
  @import '../assets/css/corp-main.scss';

  nav {
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply items-center;
    @apply pt-[2em] px-[2em] pb-0;
    @apply justify-between;
    @apply mb-4;

    @media (max-width: $breakOne) {
      @apply justify-center;
      @apply mb-4;
    }
  }

  a {
    @apply text-base-ivory;
    @apply no-underline;

    &:link {
      @apply text-base-ivory;
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
    @apply leading-4 text-corp-blueDark;
    @apply m-0;
    @apply p-0;
    @apply normal-case;

    a {
      @apply no-underline text-corp-blueDark;
    }
  }

  .drewHarper {
    height: 83px;
    //

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      height: auto;
    }
  }

  a.drewhead {
    @apply inline-block;
    background: #c00000;
    background-image: url(/img/drew_mug_red.png);
    // @apply bg-no-repeat;
    // @apply bg-cover;
    @apply w-[80px] h-[80px];
    background-position: -39px -59px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
    @apply bg-no-repeat;
    background-size: 151%;
    filter: hue-rotate(210deg) grayscale(50%);
    border-radius: 1px;
    margin-bottom: .75rem;

    @media (max-width: $breakTwo) {
      background-position: -40px -50px !important;
      background-size: 145% !important;
    }
  }

  h1 {
    @apply font-corpCopy;
    @apply text-[1.5rem];
    @apply transition duration-[.25s] ease-in;
    @apply font-medium;

    a:hover {
      color: initial !important;
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

  h3 {
    @apply font-corpCopy;
    @apply text-[1.35rem];
    @apply transition duration-[.25s] ease-in;
    @apply font-bold;
    @apply text-center;
    @apply leading-loose;

    a:hover {
      color: initial !important;
      //
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

  .uiux {
    @apply h-[4ch];

    @media (max-width: $breakOne) {
      @apply self-center;
    }

    @media (max-width: $breakTwo) {
      @apply h-[3ch];
    }
  }

  .drewTop {
    @apply flex;
    @apply flex-col;
    @apply flex-wrap;
    @apply content-center;
    @apply text-center;

    @media (max-width: $breakThree) {
      @apply w-full;
    }

  }

  .contact {
    @apply grow;
    @apply flex;
    @apply flex-col;
    @apply flex-wrap;
    @apply justify-center;
    @apply items-center;
    @apply content-center;
    @apply mt-4;
    @apply self-baseline;
    //

    @media (max-width: $breakOne) {
      @apply ml-0;
      @apply flex-row;
      @apply mt-4;
    }

    @media (max-width: $breakTwo) {
      @apply mt-[.4em];
      @apply flex-row;
    }

    @media (max-width: $breakThree) {
      @apply mt-4;
      @apply transition duration-[.25s] ease-in;
      @apply flex-row;
    }

    @media (max-width: 520px) {
      @apply mt-4;
      @apply transition duration-[.25s] ease-in;
      @apply flex-col;
    }

    p {
      @apply font-corpCopy;
      @apply text-[1.3em];
      @apply tracking-[.01em];
      @apply items-center;
      @apply text-center;
      @apply leading-[1.5em];
      @apply grow;
      @apply font-semibold;
      @apply lowercase;
      // @apply mt-[1rem];

      a {
        border-bottom: 2px dotted lighten($blue-dark, 20);

        &:hover {
          @apply text-[maroon];
          @apply border-b-2 border-dotted border-[hsl(0,100%,25%)];
        }
      }

      @media (max-width: $breakOne) {
        @apply justify-center;

        &:nth-child(1) {
          @apply text-right;
          @apply my-0 mx-1;
        }

        &:nth-child(2) {
          @apply text-left;
          @apply my-0 mx-1;
        }
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        @apply justify-center;
        @apply leading-5;
        @apply mb-[-4px];
        @apply text-center;
      }

      &.resume,
      &.email {
        color: $blue-dark !important;
        @apply leading-normal;

        a {
          color: $blue-dark !important;
          border-bottom: 1px dotted $accent;

          &:hover {
            @apply text-[maroon];
            @apply border-b-2 border-dotted border-[hsl(0,100%,25%)];
          }
        }
      }

    }

  }
</style>
