<template>
  <div>
    <div class="flexbox">
      <div class="jobTitles">
        <p>{{ store.copy.uiuxDesigner }}</p>
        <p>{{ store.copy.vizDesigner }}</p>
      </div>

      <div class="resumeLinks">
        <a class="resume rOne" :href="resumeUrl" target="_BLANK">PDF
          Resume</a>
      </div>
    </div>

    <div class="copyGrid">
      <div class="mainBody">
        <h1>{{ store.copy.druHead }}</h1>
        <p v-html="store.copy.druCopy" />
      </div>
    </div>
  </div>
</template>

<script setup>
  // import { defineComponent } from 'vue'
  import { inject } from 'vue'
  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang="scss" scoped>
  @import "../assets/css/punk-main.scss";

  .flexbox {
    @apply flex;
    @apply flex-row;
    @apply justify-between;

    .jobTitles {
      @apply flex-row;
      flex: 0 1 auto;
      @apply self-start;

      p {
        color: $black;
        background: white;
        @apply text-[0.9em];
        font-family: Poppins !important;
        @apply font-medium;
        @apply not-italic;
        @apply tracking-[.02em];
        transform: rotate(-1.25deg);
        @apply lowercase;
        padding: 0.3em 0.5em;

        @media (max-width: $breakTwo) {
          //
        }

        @media (max-width: $breakThree) {
          //
        }

        &:nth-of-type(1) {
          transform: rotate(-.5deg);
          @apply inline-block;
        }

        &:nth-of-type(2) {
          transform: rotate(2deg);
          @apply inline-block;
          @apply ml-2;
        }

      }
    }

    .resumeLinks {
      @apply self-end;
      @apply flex-row;

      .resume {
        color: $black;
        background: white;
        @apply text-[0.9em];
        font-family: Poppins !important;
        @apply font-medium;
        @apply not-italic;
        @apply tracking-[.02em];
        @apply lowercase;
        padding: 0.3em 0.5em;
        @apply inline-block;
        @apply ml-1;

        &.rOne {
          transform: rotate(-2deg) !important;
          background: transparentize(#ff4bf5, .5);
          @apply text-white;
        }

        &.rTwo {
          transform: rotate(6deg) !important;
          @apply no-underline;

          &:hover {
            color: #ff4bf5 !important;
            @apply underline;
          }
        }

        &.rThree {
          transform: rotate(3deg) !important;
          @apply no-underline;

          &:hover {
            color: #ff4bf5 !important;
            @apply underline;
          }
        }

        a:hover {
          color: #ff4bf5 !important;
          background: red;
        }

      }

    }
  }

  .copyGrid {
    @apply flex;
    @apply flex-col;
    flex: 0 1 auto;
    // margin-top: 1em;
    @apply relative;
    left: 0;
    @apply top-0;

    @media (max-width: $breakOne) {
      @apply mb-[0em];
    }
  }

  .mainBody {
    transform: rotate(-1deg);

    h1 {
      @apply text-[1.15rem];
      background: hsla(0, 100%, 50%, 0.85);
      @apply text-white;
      @apply font-medium;
      padding: 0 0em 0.1em 0.2rem;
      transform: rotate(1deg);
      @apply z-10;
      @apply inline-block;
      @apply leading-[1.7rem];
      // transform: rotate(0deg);

      &:nth-of-type(1) {
        transform: rotate(0deg);
      }
    }

    p.smallCaps {
      @apply text-[90%];
      font-variant: small-caps !important;
      color: red !important;
    }

    p {
      font-family: Poppins !important;
      @apply font-normal;
      font-style: italic;
      @apply text-[1em];
      color: $grey;
      @apply leading-9;
      letter-spacing: 0.045em;
      @apply relative;
      top: 0em;
      background: #FBC83F;
      margin: 1em 1em 0em;
      @apply inline;
      padding: 0.4em 0.1em;
      /////////
      // HIGHLIGHTING EFFECT
      background: linear-gradient(180deg, #fbc83f 100%, #fbc83f 100%);
      // line-height: 3em;

      @media (min-width: $breakOne) {
        //
      }

      @media (min-width: 1010px) {
        //
      }

    }

  }
</style>
