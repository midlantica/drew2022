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
    @apply flex flex-row justify-between;

    .jobTitles {
      flex: 0 1 auto;
      @apply flex-row self-start;

      p {
        @apply font-punkCopy text-base-black bg-white text-[0.9em] font-medium not-italic tracking-[.02em] -hue-rotate-[1.25deg] lowercase py-1 px-2;

        @media (max-width: theme("screens.breakSm")) {
          //
        }

        @media (max-width: theme("screens.breakXsm")) {
          //
        }

        &:nth-of-type(1) {
          @apply inline-block -rotate-[.5deg];
        }

        &:nth-of-type(2) {
          @apply inline-block ml-2 rotate-2;
        }

      }
    }

    .resumeLinks {
      @apply self-end flex-row;

      .resume {
        @apply text-[0.9em] font-punkCopy text-base-black bg-white font-medium not-italic tracking-[.02em] lowercase inline-block ml-1 py-[0.3em] px-2;

        &.rOne {
          @apply text-white -rotate-2 bg-punk-magenta/50;

          &:hover {
            @apply bg-punk-magenta text-black;
          }
        }

        &.rTwo {
          @apply no-underline rotate-6;

          &:hover {
            @apply underline text-punk-magenta;
          }
        }

        &.rThree {
          @apply no-underline rotate-3;

          &:hover {
            @apply underline text-punk-magenta;
          }
        }

        a:hover {
          @apply underline text-punk-magenta bg-punk-red;
        }

      }

    }
  }

  .copyGrid {
    flex: 0 1 auto;
    @apply flex flex-col relative top-0 left-0;

    @media (max-width: theme("screens.breakLg")) {
      @apply mb-0;
    }
  }

  .mainBody {
    @apply -rotate-1;

    h1 {
      @apply font-medium z-10 inline-block leading-[1.7rem] text-white text-[1.15rem] bg-punk-red/80 rotate-1 pt-0 pr-0 pb-[.1rem] pl-[.2rem];

      &:nth-of-type(1) {
        @apply rotate-0;
      }
    }

    p.smallCaps {
      @apply text-[95%] text-punk-red font-medium uppercase;
    }

    p {
      @apply font-normal text-[1em] leading-9 relative inline italic font-punkCopy text-base-grey tracking-[.045em] top-0 bg-punk-peach mt-4 mx-4 mb-0 py-[.4rem] px-[.1rem];

      @media (min-width: theme("screens.breakLg")) {
        //
      }

    }

  }
</style>
