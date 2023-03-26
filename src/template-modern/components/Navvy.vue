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
    line-height: 1em;
    @apply m-0;
    @apply p-0;
    color: $ivory !important;
    @apply normal-case;
    font-weight: 200;

    a {
      color: $ivory !important;
      @apply no-underline;
    }
  }

  h1 {
    @apply normal-case;
  }

  nav {
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    @apply justify-center;
    @apply items-center;
    padding: 2rem 0 0;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 200;
    letter-spacing: -0.05em;
    font-family: $font-subhead;
    text-shadow: 1px 1px 4px $black;
    transition: 0.25s ease-in;
    @apply text-center;
    @include font-smoothing;
    //
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
      // flex-grow: 0;
      // @apply text-right;
    }

    @media (max-width: $breakTwo) {
      // flex-grow: 0;
      // @apply text-center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.75em;
      // margin-bottom: -9px;
    }
  }

  section.jobDesc {
    // @apply grow;
    // margin-left: 1em;
    margin-top: 1rem;
    transition: 0.25s ease-in;
    text-decoration: lowercase;

    @media (max-width: $breakTwo) {
      // flex-grow: 0;
      @apply text-center;
      @apply self-center;

      &:nth-child(1) {
        // @apply float-left;
        // @apply clear-left;
      }

      &:nth-child(2) {
        // @apply float-left;
        // margin-left: 0em;
      }
    }

    @media (max-width: $breakOne) {
      // flex-grow: 0;
    }

    @media (max-width: $breakThree) {
      @apply w-[20ch];
    }

    h2 {
      @apply text-[1.15rem];
      letter-spacing: -0.01em;
      text-shadow: 3px 0px 3px $black;
      @apply leading-[1.5em];
      @apply font-normal;
      color: hsla(0, 0%, 100%, 0.85) !important;
      @apply text-center;
      text-shadow: 1px 1px 4px$black;
      text-transform: lowercase !important;
      @include font-smoothing;

      @media (max-width: $breakTwo) {
        // @apply inline-block;
        // font-size: 1.85rem !important;
        // margin-top: -3px;
      }

      @media (max-width: $breakThree) {
        // font-size: 1.25rem !important;
        // line-height: 2em;
      }
    }
  }

  section.contact {
    // @apply uppercase;
    margin-top: 0.2em;
    // margin-left: 1em;
    margin-bottom: 0rem;
    @apply z-10;
    // border: 1px solid $outBlue;
    // text-shadow: 3px 0px 1px $black;
    transition: 0.25s ease-in;

    @media (max-width: $breakOne) {
      // margin-left: 0;
    }

    @media (max-width: $breakTwo) {
      // margin-top: 0.4em;
    }

    @media (max-width: $breakThree) {
      @apply w-[30ch];
      // margin-top: 0em;
      // transition: 0.25s ease-in;
    }

    p {
      font-family: $font-subhead;
      letter-spacing: -0.01em;
      @apply font-normal;
      font-size: 1rem !important;
      @apply text-center;
      margin-top: 0.5rem;
      text-shadow: 1px 1px 4px $black;
      @apply leading-[1.4rem];
      @apply tracking-[0.05rem];
      @include font-smoothing;
      font-size: 0.85rem !important;

      a {
        // border-bottom: 1px solid $yellow-red;
        border: 1px #ff000054 solid;
        // color: $white;
        // font: 1rem !important;
        padding: 0.3rem 0.9rem;
        border-radius: 2rem;
        margin: 0 0.5rem;
        // background: transparentize($white, .65);

        &:hover {
          color: $yellow-red !important;
          @apply underline;
          @apply no-underline;
          background: darken($ruby, 15);
        }
      }

      @media (max-width: $breakOne) {
        // @apply justify-center;
        // font-size: 1.5rem !important;
        // letter-spacing: 0.1785rem !important;
        // margin-top: -0.3em;
      }

      @media (max-width: $breakTwo) {
        // font-size: 1.05rem !important;
        // letter-spacing: 0.09em !important;
      }

      @media (max-width: $breakThree) {
        // @apply justify-center;
        // font-size: 1.25rem !important;
        // letter-spacing: 0.09em !important;
        // line-height: 1.25em;
        // margin-bottom: -4px;
        // @apply text-center;
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
