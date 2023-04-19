<template>
  <nav>
    <div class="mastMain">
      <div class="masty">
        <div class="DHmast">
          <router-link :to="{ name: 'ExtrasTechy' }" class="drewHeadPic jelloHorizontal" />
          <router-link to="/Techy" class="svgArt mastDrew">
            <mastDrew />
          </router-link>
          <router-link :to="{ name: 'Techy' }" class="svgArt mastHarper">
            <mastHarper />
          </router-link>
        </div>

        <div class="jobDesc block">
          <h2>{{ store.copy.uiuxDesigner }} +</h2>
          <h2 class="marLH">
            {{ store.copy.vizDesigner }}
          </h2>
        </div>
      </div>

      <div class="bar">
        <div class="contact">
          <p class="email">
            <a :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
          </p>
          <p class="resume">
            <a :href="resumeUrl" target="_blank">PDF Resume</a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  import { inject } from 'vue'

  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang='scss' scoped>
  @import '../assets/css/techy-main.scss';

  nav {
    @apply w-full flex flex-col flex-nowrap justify-center items-center content-center grow;

    @media (max-width: var(--breakOne)) {
      //
    }
  }

  nav .mastMain {
    @apply w-full bg-techy-mango;

    @media (max-width: var(--breakOne)) {
      //
    }

    @media (max-width: var(--breakTwo)) {
      //
    }

    .masty {
      @apply my-0 mx-auto text-center;

      .DHmast {
        grid-template-columns: 2fr 4fr 7fr;
        @apply grid items-center my-0 mx-auto pt-4 gap-8;

        @media (max-width: var(--breakThou)) {
          grid-template-columns: auto auto;
          @apply justify-center gap-2;
        }

        @media (max-width: var(--breakOne)) {
          //
        }

        @media (max-width: var(--breakTwo)) {
          //
        }

        @media (max-width: var(--breakThree)) {
          //
        }

        @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {
          @apply pt-4;
        }

        a.drewHeadPic {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          @apply w-[92px] h-[109px] pt-4 pr-4 pb-0 pl-4 bg-no-repeat bg-cover justify-self-end bg-[url('/img/drew_mug_dig.png')];

          @media (max-width: var(--breakThou)) {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            @apply w-[92px] h-[109px] mt-0 mr-2 mb-0 ml-0 justify-self-end;
          }

          @media (max-width: var(--breakTwo)) {
            @apply w-[64px] h-[75px];
          }

          @media (max-width: var(--breakThree)) {
            @apply w-[46px] h-[55px] m-0;
          }

          @media (max-width: var(--breakFour)) {
            @apply h-[55px] m-0;
          }

        }

        a.svgArt {
          @apply h-[5.9em];

          @media (max-width: var(--breakThou)) {
            @apply h-[11.5vw];
          }

          @media (max-width: var(--breakOne)) {
            @apply h-[14vw];
          }

          @media (max-width: var(--breakTwo)) {
            @apply h-[14vw];
          }

          @media (max-width: var(--breakThree)) {
            @apply h-[14vw];
          }
        }

        a.mastDrew {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          @apply w-[19em];

          @media (max-width: var(--breakThou)) {
            grid-column: 2 / 3;
            grid-row: 1 / 1;
            @apply self-end mb-[-1em] w-[40vw];
          }

          @media (max-width: var(--breakOne)) {
            //
          }

          @media (max-width: var(--breakTwo)) {
            //
          }

          @media (max-width: var(--breakThree)) {
            @apply w-[56vw] mb-0 ;
          }
        }

        a.mastHarper {
          // display: initial;
          grid-column: 3 / 4;
          grid-row: 1 / 3;
          @apply w-[25.3em];

          @media (max-width: var(--breakThou)) {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
            @apply w-[50vw];
          }

          @media (max-width: var(--breakOne)) {
            //
          }

          @media (max-width: var(--breakTwo)) {
            @apply ml-0 mt-0;
          }

          @media (max-width: var(--breakThree)) {
            @apply w-[77vw] h-[20vw];
          }
        }
      }
    }
  }

  nav .jobDesc {
    @apply mt-[-1em] mr-0 mb-4 ml-[11.1em] text-left;

    @media (max-width: var(--breakThou)) {
      @apply my-4 mx-0 text-center;
    }

    @media (max-width: var(--breakOne)) {
      @apply my-0 mx-0 mb-4 text-center;
    }

    @media (max-width: var(--breakTwo)) {
      //

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    h2 {
      @apply font-techyHead text-techy-blueTech m-0 font-normal lowercase text-[1.6em] leading-[1.1em] tracking-[.03em] inline;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }

      @media (max-width: var(--breakThou)) {
        @apply inline text-[3.3vw] mt-[-3px];

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: var(--breakOne)) {
        @apply inline text-[3.7vw] mt-[-3px];

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: var(--breakTwo)) {
        @apply text-[5.8vw];
      }
    }
  }

  nav .bar {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    @apply bg-techy-blueTech text-base-ivory py-[.5vh] px-4;

    .contact {
      @apply font-normal text-base-ivory flex flex-row flex-wrap justify-center items-center content-center grow w-1/2;

      @media (max-width: 1024px) {
        @apply w-full;
      }

      @media (max-width: var(--breakOne)) {
        @apply w-full;
      }

      @media (max-width: var(--breakTwo)) {
        @apply w-full;
      }

      @media (max-width: var(--breakThree)) {
        @apply w-full;
      }

      p {
        @apply font-techyCopy font-medium tracking-[.09em] text-base-ivory text-[1.3em] leading-10 ml-2;

        >a {
          @apply no-underline text-base-ivory/[.9] underline-offset-4;

          &:hover {
            @apply underline;
          }
        }

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          //
        }

        @media (max-width: var(--breakOne)) {
          @apply justify-center text-[1.2em] tracking-[.1em];

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: var(--breakTwo)) {
          @apply tracking-[.09em] ;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: var(--breakThree)) {
          @apply justify-center text-[1.1em] tracking-[.07em] leading-8 text-center;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }
      }
    }
  }
</style>
