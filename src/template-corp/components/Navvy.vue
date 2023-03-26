<template>
  <nav>
    <section class="flex min-[830px]:flex-column flex-row flex-wrap w-full min-[830px]:content-center justify-center gap-12">
      <div class="drewTop max-[830px]:m-auto gap-4 grow">
        <router-link :to="{ name: 'Corp' }" class="w-full flex max-[830px]:flex-column flex-row flex-wrap content-center gap-x-6 justify-center">
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
    @apply pt-[1.5em] px-[2em] pb-[1em];
    @apply justify-between;

    @media (max-width: $breakOne) {
      @apply justify-center;
    }
  }

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
    color: $blue-dark !important;
    @apply normal-case;

    a {
      color: $blue-dark !important;
      @apply no-underline;
    }
  }

  .drewHarper {
    height: 83px;
    // margin: 0em 0 0 1rem;

    @media (max-width: $breakOne) {
      // @apply h-[60px];
      // margin-left: 0.75em;
    }

    @media (max-width: $breakTwo) {
      // height: 42px;
      height: auto;
      // margin-left: 0.75em;
    }
  }

  a.drewhead {
    @apply inline-block;
    background: #c00000;
    background-image: url(/img/drew_mug_red.png);
    // @apply bg-no-repeat;
    // @apply bg-cover;
    width: 80px;
    height: 80px;
    background-position: -39px -59px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
    @apply bg-no-repeat;
    background-size: 151%;
    filter: hue-rotate(210deg) grayscale(50%);
    border-radius: 1px;
    margin-bottom: .75rem;
    // width: 72px;
    // height: 88px;
    // @apply block;

    @media (max-width: $breakTwo) {
      // width: 80px;
      // height: 80px;
      background-position: -40px -50px !important;
      background-size: 145% !important;
    }
  }

  h1 {
    font-family: $font-copy;
    @apply text-[1.5rem];
    letter-spacing: -0.025em;
    @apply transition duration-[.25s] ease-in;
    font-weight: medium;

    a:hover {
      color: initial !important;
      // background: orange !important;
      // border-bottom: 2px dashed transparentize(navy, .75);
    }

    @media (max-width: $breakOne) {
      // font-size: 4.5em;
      // @apply grow-0;
      // @apply text-right;
    }

    @media (max-width: $breakTwo) {
      // font-size: 3.5em;
      // @apply grow-0;
      // @apply text-center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.5em;
      // margin-bottom: -9px;
    }
  }

  h3 {
    font-family: $font-copy;
    @apply text-[1.15rem];
    letter-spacing: -0.025em;
    @apply transition duration-[.25s] ease-in;
    @apply font-bold;

    a:hover {
      color: initial !important;
      // background: orange !important;
      // border-bottom: 2px dashed transparentize(navy, .75);
    }

    @media (max-width: $breakOne) {
      // font-size: 4.5em;
      // @apply grow-0;
      // @apply text-right;
    }

    @media (max-width: $breakTwo) {
      // font-size: 3.5em;
      // @apply grow-0;
      // @apply text-center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.5em;
      // margin-bottom: -9px;
    }
  }

  .uiux {
    // height: 35px;
    height: 4ch;
    // margin: 0.7em 0 -0.3em 1.3em;

    @media (max-width: $breakOne) {
      // height: 3ch;
      @apply self-center;
      // margin-top: 0.6em;
      // margin-left: 0.75em;
    }

    @media (max-width: $breakTwo) {
      height: 3ch;
      // margin-left: 0.75em;
    }
  }

  .drewTop {
    @apply flex;
    @apply flex-col;
    @apply flex-wrap;
    // flex-grow: 1 !important;
    @apply content-center;
    @apply text-center;

    @media (max-width: $breakThree) {
      @apply w-full;
    }

  }

  .contact {
    @apply grow;
    // @apply w-full;
    @apply flex;
    @apply flex-col;
    @apply flex-wrap;
    @apply justify-center;
    @apply items-center;
    @apply content-center;
    @apply mt-[0.2em];
    @apply self-center;
    // @apply z-10;
    // text-shadow: 3px 0px 1px $black;
    // transition: .25s ease-in;

    @media (max-width: $breakOne) {
      @apply ml-0;
      @apply flex-row;
      margin-top: 1em;
    }

    @media (max-width: $breakTwo) {
      @apply mt-[.4em];
      // margin-top: 1em;
      @apply flex-row;
      // color: red !important;
    }

    @media (max-width: $breakThree) {
      margin-top: 1em;
      @apply transition duration-[.25s] ease-in;
      @apply flex-row;
      // color: red !important;
    }

    @media (max-width: 520px) {
      margin-top: 1em;
      @apply transition duration-[.25s] ease-in;
      @apply flex-col;
    }

    p {
      font-family: $font-copy;
      font-size: 1.15em;
      letter-spacing: 0.01em;
      @apply items-center;
      @apply text-center;
      @apply leading-[1.5em];
      @apply grow;
      @apply font-semibold;
      @apply lowercase;

      a {
        border-bottom: 2px dotted lighten($blue-dark, 20);

        &:hover {
          color: darken($accent-red, 20) !important;
          border-bottom: 2px dotted darken($accent-red, 20);
        }
      }

      @media (max-width: $breakOne) {
        @apply justify-center;
        letter-spacing: 0.01em !important;

        &:nth-child(1) {
          @apply text-right;
          margin: 0 0.25em;
        }

        &:nth-child(2) {
          @apply text-left;
          margin: 0 0.25em;
        }
      }

      @media (max-width: $breakTwo) {
        letter-spacing: 0.03em !important;
      }

      @media (max-width: $breakThree) {
        @apply justify-center;
        letter-spacing: 0.09em !important;
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
            color: maroon !important;
            border-bottom: 1px dotted hsla(0, 100%, 25%, 1);
          }
        }
      }

    }

  }
</style>
