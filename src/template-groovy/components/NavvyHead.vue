<template>
  <!-- h-[170px]  -->
  <div class="flex flex-row flex-wrap gap-2 items-start justify-start self-start pt-5 pb-4 relative sm:flex-end">
    <div class="groovyCircle">
      <router-link :to="{ name: 'ExtrasGroovy' }" class="drewhead jelloHorizontal" />
    </div>

    <div class="!ml-[170px] sm:w-full lg:w-[35%] flex flex-col sm:flex-row lg:flex-row flex-wrap gap-y-2 gap-x-4 lg:justify-start lg:self-start sm:justify-center sm:self-center lg:mr-4 sm:mr-2 items-center">
      <router-link to="/Groovy" class="drewHarperSVG flex flex-row sm:flex-col flex-wrap flex-end grow gap-y-1 m-x-auto">
        <div class="flex flex-row gap-4 flex-wrap m-auto">
          <mastDrew class="svgArt mastDrew" />
          <mastHarper class="svgArt mastHarper" />
        </div>
        <h2 class="jobDesc text-[1.4em] font-normal text-base-ivory lowercase leading-normal tracking-[.025em] m-auto">
          {{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}
        </h2>
      </router-link>

      <div class="grow flex flex-row md:flex-col flex-wrap gap-2 items-center">
        <div class="w-full flex lg:flex-row md:flex-col sm:flex-col flex-wrap gap-x-4 gap-y-4 items-center justify-center mx-auto">
          <div class="groovyOvalBtn">
            <a class="email" :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
          </div>
          <div class="groovyOvalBtn">
            <a class="resume" href="/resume/drew_harper_resume_portfolio.pdf" target="_blank">PDF Resume</a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="grow lg:shrink">
      &nbsp;
    </div> -->
  </div>
</template>

<script setup>
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang='scss' scoped>
  @import '../assets/css/groovy-main.scss';

  nav {
    //
  }

  .groovyCircle {
    width: 210px;
    height: 210px;
    box-shadow: 8px 6px 0px rgba(37, 37, 37, 0.25);
    border-radius: 10em;
    @apply absolute;
    top: -2.4em;
    left: -2.8em;
    z-index: 5;
    grid-row: 1 / 3;
    margin-right: -3em;
    margin-bottom: -5.3em;
    //
    background-image: radial-gradient(
        /* 0 - 25% */
        $groovy-aqua 0%,
        $groovy-aqua 35%,
        /* 25% - 50% */
        $groovy-yellow 35%,
        $groovy-yellow 47%,
        /* 50% - 75% */
        $groovy-orange 47%,
        $groovy-orange 59%,
        /* 75% - 100% */
        $groovy-red 59%,
        $groovy-red 100%);
    clip-path: polygon(21% 0%, 100% 0%, 110% 50%, 100% 100%, 21% 110%);

    @media (max-width: $breakThou) {
      margin-bottom: -4.4em;
      margin-right: -2em;
    }

    @media (max-width: $breakOne) {
      margin-bottom: -5.9em;
      margin-right: -2.8em;
    }

    @media (max-width: $breakThree) {
      width: 160px;
      height: 160px;
      top: -2.1em;
      left: -2.8em;
      box-shadow: 4px 5px 0px rgba(37, 37, 37, 0.25);
    }

    @media (max-width: $breakFour) {
      //
    }

    a.drewhead {
      background-image: url(/img/drew_mug_sepia.png);
      @apply bg-no-repeat;
      @apply bg-cover;
      width: 98px;
      height: 119px;
      @apply block;
      @apply relative;
      top: 2.8em;
      left: 3.5em;
      // background-position: 0px 0px;

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakThree) {
        width: 76px;
        height: 90px;
        top: 2.7em;
        left: 3.2em;
      }

      @media (max-width: $breakFour) {
        width: 73px;
        height: 87px;
        top: 2.6em;
        left: 3.2em;
      }
    }
  }

  .drewHarperSVG {
    // @apply flex;
    // @apply flex-row;
    // @apply flex-wrap;
    // align-items: flex-end;
    // @apply grow;

    @media (max-width: $breakThou) {
      // grid-column: 2 / 3;
      // grid-row: 1;
      // align-self: self-end;
      // margin-bottom: 0.3em;
      // margin-top: 1em;
    }

    @media (max-width: $breakOne) {
      // grid-row: 1;
      // align-self: self-end;
    }

    @media (max-width: $breakTwo) {
      // grid-row: 1;
      // grid-column: 2 / 3;
    }

    @media (max-width: $breakThree) {
      // grid-column: 2;
      // grid-row: 1;
    }

    .svgArt {
      height: 3.1em;

      @media (max-width: $breakThou) {
        height: 6vw;
        // @apply self-center;
      }

      @media (max-width: $breakOne) {
        height: 7.9vw;
      }

      @media (max-width: $breakTwo) {}

      @media (max-width: $breakThree) {
        margin: 0.5em 0 0em;
        height: 9.5vw;
      }

      @media (max-width: $breakFour) {
        margin: 0.2em 0 0em;
      }
    }

    .mastDrew {
      //

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        // @apply mr-2;
      }
    }

    .mastHarper {
      // @apply ml-4;

      @media (max-width: $breakThou) {
        // @apply ml-4;
        //
      }

      @media (max-width: $breakOne) {
        // @apply ml-4;
      }

      @media (max-width: $breakTwo) {
        // @apply ml-2;
      }
    }
  }

  .jobDesc {
    // grid-column: 2 / 3;
    // @apply self-center;
    // @apply text-[1em];

    @media (max-width: $breakThou) {
      // @apply my-4 mx-0;
      // @apply text-center;
      // grid-column: 2;
      // grid-row: 2;
      // @apply self-start;
    }

    @media (max-width: $breakOne) {
      // @apply m-0;
      // grid-row: 2;
      // grid-column: 2 / 3;
      // @apply self-center;
    }

    @media (max-width: $breakTwo) {
      //

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    h2 {
      font-family: $font-subhead;

      @media (max-width: $breakThou) {
        @apply text-[2.7vw];
      }

      @media (max-width: $breakOne) {
        @apply text-[3.525vw];
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        @apply text-[4.4vw];
      }
    }
  }

  .groovyOvalBtn {
    @apply w-fit py-[.15rem] px-4 pb-[.3rem] border border-groovy-orange border-solid rounded-[20rem] text-[.85rem] leading-normal;
    @apply hover:bg-groovy-redDk tracking-wide hover:text-white hover:cursor-pointer;
  }

  p {
    font-family: $font-copy;
    @apply inline-block;
    @apply text-[.85em];
    @apply tracking-normal;
    @apply normal-case;
    @apply leading-[0.7em];
    @apply text-center;
    @apply tracking-[0.03em];

    &:nth-child(1) {
      @apply m-0;
    }

    &:nth-child(2) {
      @apply mt-0 mr-0 mb-0 ml-2;
    }

    a {
      @apply text-base-ivory;
      @apply no-underline;

      &:link {
        @apply text-base-ivory;
        @apply no-underline;
      }
    }

    @media (max-width: $breakThou) {
      // @apply text-[1.79vw];
      @apply leading-[.5em];
      @apply text-center;
      @apply text-[2vw];
      @apply leading-[1.4em];
      @apply text-left;
      // @apply inline-block;
      // @apply float-left;
      // @apply clear-left;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        @apply ml-0;
      }
    }

    @media (max-width: $breakOne) {
      @apply text-[2.785vw];
      @apply text-center;
      @apply my-0 mx-auto;
      // @apply float-none;
      // @apply clear-none;

      &:nth-child(2) {
        @apply ml-2;
      }
    }

    @media (max-width: $breakThree) {
      @apply text-[3.6vw];
    }
  }

  .groovyOval {
    @apply w-fit;
    @apply py-[.15rem] px-5 pb-[.3rem];
    @apply border border-groovy-orange border-solid;
    @apply rounded-[20rem];
    @apply text-[1rem];
    @apply leading-normal;

    &:hover {
      @apply bg-groovy-redDk;
      @apply text-white;
      @apply cursor-pointer;
    }

    a {
      font-family: $font-copy;
      @apply text-white;

      &:hover {
        @apply text-white;
      }

    }

    @media (max-width: $breakThou) {
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

</style>
