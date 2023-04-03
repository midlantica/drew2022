<template>
  <div class="flex flex-row flex-wrap gap-y-2 gap-x-0 justify-start items-center content-start relative my-[-25px]">
    <div class="relative w-[210px] h-[210px] sm:left-[-2.7rem] min-[375px]:left-[-5.7rem]">
      <div class="groovyCircle float-left clear-left block">
        <router-link :to="{ name: 'ExtrasGroovy' }" class="drewhead jelloHorizontal min-[375px]:left-[4.1em]" />
      </div>
    </div>

    <router-link to="/Groovy" class="drewHarperSVG float-left lg:w-[45%] md:w-[60%] min-[375px]:w-[54%] ml-[-1.1rem] min-[375px]:ml-[-5.1rem]">
      <div class="flex flex-row gap-4 flex-wrap m-auto justify-center min-[375px]:text-[.5rem] sm:text-[.75rem] md:text-[.85rem] lg:text-[1rem]">
        <mastDrew class="svgArt mastDrew" />
        <mastHarper class="svgArt mastHarper" />
      </div>
      <h2 class="jobDesc text-[1.4em] text-center font-normal text-base-ivory lowercase leading-normal tracking-[.025em] my-1 min-[375px]:text-[.9rem] md:text-[1.3rem] min-[375px]:w-full mx-auto">
        {{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}
      </h2>
      <div class="shrink">
        <div class="w-full flex flex-row lg:flex-row flex-wrap gap-x-4 gap-y-2 items-center justify-center mx-auto">
          <div class="groovyOvalBtn">
            <a class="email" :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
          </div>
          <div class="groovyOvalBtn">
            <a class="resume" href="/resume/drew_harper_resume_portfolio.pdf" target="_blank">PDF Resume</a>
          </div>
        </div>
      </div>
    </router-link>
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

  .groovyCircle {
    width: 210px;
    height: 210px;
    box-shadow: 8px 6px 0px rgba(37, 37, 37, 0.25);
    border-radius: 10em;
    // top: -5em;
    // left: -1.2em;
    z-index: 5;
    display: block;
    // grid-row: 1 / 3;
    margin-right: -2.8em;
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
    animation: 1s ease-out;

    @media (max-width: $breakThou) {
      // margin-bottom: -4.4em;
      // margin-right: -2em;
    }

    @media (max-width: $breakOne) {
      // width: 180px;
      // height: 180px;
      // top: 1.1em;
      // left: -4.7em;
    }

    @media (max-width: $breakThree) {
      // width: 170px;
      // height: 170px;
      // top: -1.5em;
      // left: -4.2em;
      // box-shadow: 4px 5px 0px rgba(37, 37, 37, 0.25);
    }

    @media (max-width: $breakFour) {
      width: 160px;
      height: 160px;
      top: -1.4em;
      left: -2.9em;
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
        // width: 108px;
        // height: 129px;
        // display: block;
        // position: relative;
        // top: 1.8em;
        // left: 3.5em;
      }

      @media (max-width: $breakThree) {
        // width: 86px;
        // height: 102px;
        // top: 2.1em;
        // left: 4.2em;
      }

      @media (max-width: $breakFour) {
        // width: 73px;
        // height: 87px;
        // top: 2.6em;
        // left: 3.2em;
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
      height: 3em;

      @media (max-width: $breakThou) {
        // height: 6vw;
        // @apply self-center;
      }

      @media (max-width: $breakOne) {
        // height: 7.9vw;
      }

      @media (max-width: $breakTwo) {}

      @media (max-width: $breakThree) {
        // margin: 0.5em 0 0em;
        // height: 9.5vw;
      }

      @media (max-width: $breakFour) {
        // margin: 0.2em 0 0em;
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
    @apply w-fit py-[.1rem] px-4 pb-[.2rem] border border-groovy-orange border-solid rounded-[20rem] leading-normal gap-0;
    @apply hover:bg-groovy-redDk tracking-wide hover:text-white hover:cursor-pointer;

    a {
      @apply text-base-ivory;
      @apply no-underline;
      @apply text-[.8rem] md:text-[.9rem];

      &:link {
        @apply text-base-ivory;
        @apply no-underline;
      }
    }

    @media (max-width: $breakThou) {
      // @apply text-[1.79vw];
      @apply leading-[.5em];
      @apply text-center;
      // @apply text-[2vw];
      @apply leading-[1.4em];
      // @apply text-left;
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
      // @apply text-[2.5rem];
      @apply text-center;
      // @apply my-0 mx-auto;
      // @apply float-none;
      // @apply clear-none;

      &:nth-child(2) {
        // @apply ml-2;
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
