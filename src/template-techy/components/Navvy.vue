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
      margin: 0 auto;
      @apply text-center;

      .DHmast {
        display: grid;
        grid-template-columns: 2fr 4fr 7fr;
        grid-gap: 2em;
        @apply items-center;
        margin: 0 auto;
        padding-top: 1em;
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
          padding-top: 1em;
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
          //   margin-right: 0.5em;
          //   margin-left: 0em;
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
    margin: -1em 0em 1em 11.1em;
    @apply text-left;

    @media (max-width: $breakThou) {
      margin: 1em 0em;
      @apply text-center;
    }

    @media (max-width: $breakOne) {
      margin: 0rem 0rem 1rem;
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
      font-weight: 400;
      color: $blueTech;
      text-transform: lowercase;
      @apply text-[1.7em];
      line-height: 1.1em;
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
        font-size: 3.3vw;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

      @media (max-width: $breakOne) {
        @apply inline;
        font-size: 3.7vw;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

      @media (max-width: $breakTwo) {
        font-size: 5.8vw;
      }
    }
  }

  nav .bar {
    padding: 0.5vh 1em;
    background: $blueTech;
    color: $ivory;
    grid-column: 1 / 3;
    grid-row: 3 / 4;

    .contact {
      font-weight: 400;
      color: $ivory;
      @apply flex;
      @apply flex-row;
      @apply flex-wrap;
      @apply justify-center;
      @apply items-center;
      @apply content-center;
      @apply grow;
      width: 50%;

      @media (max-width: 1024px) {
        @apply w-full;
      }

      @media (max-width: $breakOne) {
        width: 100%
      }

      @media (max-width: $breakTwo) {
        width: 100%
      }

      @media (max-width: $breakThree) {
        width: 100%
      }

      p {
        font-family: $font-copy;
        @apply font-medium;
        letter-spacing: .09em;
        color: $ivory;
        @apply text-[1.3em];
        line-height: 2.5em;
        margin-left: 0.5em;

        >a {
          color: transparentize($ivory, .1);
          @apply no-underline;

          &:hover {
            text-decoration: underline;
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
          font-size: 1.2em !important;
          letter-spacing: .1em !important;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakTwo) {
          letter-spacing: 0.09em !important;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakThree) {
          @apply justify-center;
          font-size: 1.1em !important;
          letter-spacing: 0.07em !important;
          line-height: 2em;
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
