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
    @apply w-full;
    @apply flex;
    @apply flex-col;
    @apply flex-nowrap;
    @apply justify-center;
    @apply items-center;
    @apply content-center;
    @apply grow;

    @media (max-width: $breakOne) {
      //
    }
  }

  nav .mastMain {
    @apply w-full;
    background: $mango;

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    .masty {
      @apply my-0 mx-auto;
      @apply text-center;

      .DHmast {
        @apply grid;
        grid-template-columns: 2fr 4fr 7fr;
        grid-gap: 2em;
        @apply items-center;
        @apply my-0 mx-auto;
        @apply pt-4;
        //

        @media (max-width: $breakThou) {
          grid-template-columns: auto auto;
          @apply justify-center;
          justify-items: center;
          grid-gap: .5em;
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

        @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {
          @apply pt-4;
        }

        a.drewHeadPic {
          @apply w-[92px];
          @apply h-[109px];
          @apply pt-4 pr-4 pb-0 pl-4;
          background-image: url(/img/drew_mug_dig.png);
          @apply bg-no-repeat;
          @apply bg-cover;
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          @apply justify-self-end;

          @media (max-width: $breakThou) {
            @apply w-[92px];
            @apply h-[109px];
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            @apply mt-0 mr-2 mb-0 ml-0;
            @apply justify-self-end;
          }

          @media (max-width: $breakTwo) {
            @apply w-[64px];
            @apply h-[75px];
          }

          @media (max-width: $breakThree) {
            @apply w-[46px];
            @apply h-[55px];
            @apply m-0;
          }

          @media (max-width: $breakFour) {
            // width: 28px !important;
            @apply h-[55px];
            @apply m-0;
          }

          // @media (max-device-width: 667px)
          // and (-webkit-device-pixel-ratio: 2)
          // {
          //   @apply mr-2;
          //   @apply ml-0;
          //   width: 65px !important;
          //   height: 77px !important;
          //   margin: 0em;
          // }

          // @media (max-width: $breakFour) {
          //   width: 39px !important;
          //   height: 46px !important;
          //   margin: 0em;
          // }

        }

        a.svgArt {
          @apply h-[5.9em];

          @media (max-width: $breakThou) {
            @apply h-[11.5vw];
          }

          @media (max-width: $breakOne) {
            @apply h-[14vw];
          }

          @media (max-width: $breakTwo) {
            @apply h-[14vw];
          }

          @media (max-width: $breakThree) {
            @apply h-[14vw];
          }
        }

        a.mastDrew {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          @apply w-[19em];

          @media (max-width: $breakThou) {
            grid-column: 2 / 3;
            grid-row: 1 / 1;
            @apply self-end;

            @apply mb-[-1em];
            @apply w-[40vw];
          }

          @media (max-width: $breakOne) {
            //
          }

          @media (max-width: $breakTwo) {
            //
          }

          @media (max-width: $breakThree) {
            @apply mb-[0em];
            width: 56vw;
          }
        }

        a.mastHarper {
          display: initial;
          grid-column: 3 / 4;
          grid-row: 1 / 3;
          @apply w-[25.3em];

          @media (max-width: $breakThou) {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
            @apply w-[50vw];
          }

          @media (max-width: $breakOne) {
            //
          }

          @media (max-width: $breakTwo) {
            @apply ml-0 mt-0;
          }

          @media (max-width: $breakThree) {
            @apply w-[77vw];
            @apply h-[20vw];
          }
        }
      }
    }
  }

  nav .jobDesc {
    @apply mt-[-1em] mr-0 mb-4 ml-[11.1em];
    @apply text-left;

    @media (max-width: $breakThou) {
      @apply my-4 mx-0;
      @apply text-center;
    }

    @media (max-width: $breakOne) {
      @apply my-0 mx-0 mb-4;
      @apply text-center;
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
      @apply m-0;
      font-family: $font-copy;
      @apply font-normal;
      @apply font-normal;
      color: $blueTech;
      @apply lowercase;
      @apply text-[1.7em];
      @apply leading-[1.1em];
      @apply tracking-[.03em];
      @apply inline;

      &:nth-child(1) {
        // @apply ml-4;
      }

      &:nth-child(2) {
        //
      }

      @media (max-width: $breakThou) {
        @apply inline;
        @apply text-[3.3vw];
        @apply mt-[-3px];

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: $breakOne) {
        @apply inline;
        @apply text-[3.7vw];
        @apply mt-[-3px];

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          @apply ml-1;
        }
      }

      @media (max-width: $breakTwo) {
        @apply text-[5.8vw];
      }
    }
  }

  nav .bar {
    @apply py-[.5vh] px-4;
    background: $blueTech;
    color: $ivory;
    grid-column: 1 / 3;
    grid-row: 3 / 4;

    .contact {
      @apply font-normal;
      color: $ivory;
      @apply flex;
      @apply flex-row;
      @apply flex-wrap;
      @apply justify-center;
      @apply items-center;
      @apply content-center;
      @apply grow;
      @apply w-1/2;

      @media (max-width: 1024px) {
        @apply w-full;
      }

      @media (max-width: $breakOne) {
        @apply w-full;
      }

      @media (max-width: $breakTwo) {
        @apply w-full;
      }

      @media (max-width: $breakThree) {
        @apply w-full;
      }

      p {
        font-family: $font-copy;
        @apply font-medium;
        @apply tracking-[.09em];
        @apply tracking-[.09em];
        color: $ivory;
        @apply text-[1.3em];
        @apply leading-10;
        margin-left: 0.5em;

        >a {
          color: transparentize($ivory, .1);
          @apply no-underline;

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

        @media (max-width: $breakOne) {
          @apply justify-center;
          @apply text-[1.2em];
          letter-spacing: .1em !important;
          @apply tracking-[.1em];

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakTwo) {
          letter-spacing: 0.09em !important;
          @apply tracking-[.1em];

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakThree) {
          @apply justify-center;
          @apply text-[1.1em];
          @apply tracking-[.07em];
          @apply leading-8;
          @apply text-center;

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
