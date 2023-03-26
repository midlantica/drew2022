<template>
  <nav>
    <div class="greenBar">
      &nbsp;
    </div>
    <p class="email">
      <a :href="`mailto:` + `${store.copy.druEmail}`">{{ store.copy.druEmail }}</a>
    </p>

    <div class="mastMain">
      <router-link :to="{ name: 'Punk' }">
        <mastDrew class="svgArt mastDrew" />
      </router-link>
      <router-link :to="{ name: 'Punk' }">
        <mastHarper class="svgArt mastHarper" />
      </router-link>
      <router-link :to="{ name: 'ExtrasPunk' }" class="DrewHead jelloHorizontal">
        &nbsp;
      </router-link>
    </div>
  </nav>
</template>

<script setup>
  import { inject } from 'vue'
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import '../assets/css/punk-main.scss';

  $outRed: rgba(221, 9, 22, .3);
  $outBlue: rgba(92, 201, 245, .3);

  nav {
    @apply flex;
    @apply flex-col;
    @apply content-center;
    padding: .5em 1em;

    @media (max-width: $breakOne) {
      @apply justify-center;
      @apply content-center;
      @apply items-center;
    }

    .greenBar {
      @apply block;
      @apply w-full;
      @apply max-w-[1024px];
      @apply z-0;
      @apply absolute;
      @apply top-0;
      @apply left-1/2;
      @apply h-[5em];
      @apply self-center;
      transform: translate(-50%, 0%);
      filter: saturate(2.5);
      background: rgba(0, 128, 0, 0.25);
    }

    p.email {
      font-family: $font;
      @apply text-[1.5em];
      color: $ivory;
      @apply tracking-[0.03em];
      text-shadow: 1px 1px 2px black;
      @apply lowercase;
      @apply self-end;
      transform: rotate(-1deg);
      @apply mt-[-0.4em];

      a {
        color: $ivory;
        @apply tracking-wider;
        @apply text-[0.9em];
      }

      @media (max-width: $breakOne) {
        @apply self-center;
      }
    }

    // ###############################
    // ###############################

    .mastMain {
      @apply flex;
      @apply flex-row;
      @apply flex-nowrap;
      @apply justify-center;
      @apply items-center;
      @apply content-center;
      @apply mt-[-1.5em];
      @apply z-[2];
      @apply w-full;

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        @apply flex-wrap;
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        //
      }

      a {
        //

        &:nth-child(1) {
          @apply w-[60vw];

          @media (max-width: $breakThou) {
            @apply order-1;
          }

          @media (max-width: $breakOne) {
            @apply order-1;
            @apply w-[47vw];
            // @apply mb-6;
            @apply mt-6;
          }

          @media (max-width: $breakTwo) {
            @apply order-1;
            @apply w-[59vw];
          }

          @media (max-width: $breakThree) {
            @apply w-[63vw];
            @apply order-1;
          }
        }

        &:nth-child(2) {
          @apply w-[80vw];

          @media (max-width: $breakThou) {
            @apply order-1;
          }

          @media (max-width: $breakOne) {
            @apply w-[68vw];
            @apply order-3;
          }

          @media (max-width: $breakTwo) {
            @apply w-[88vw];
            @apply order-3;
          }

          @media (max-width: $breakThree) {
            @apply w-[92vw];
            @apply order-3;
          }
        }

        &:nth-child(3) {
          //

          @media (max-width: $breakThou) {
            @apply order-3;
          }

          @media (max-width: $breakOne) {
            @apply order-2;
          }

          @media (max-width: $breakTwo) {
            @apply order-2;
          }

          @media (max-width: $breakThree) {
            @apply order-2;
          }
        }

      }

      a.svg.svgArt.mastDrew {
        @apply w-[170px];
        // @apply block;
        // height: 12vw;
        // transform: rotate(1deg);
        // @apply mt-[-1.5em];
        // @apply order-1;

        @media (max-width: $breakThou) {
          // width: 34vw;
          // height: 17vh;
          // margin-top: 1em;
          // @apply order-1;
        }

        @media (max-width: $breakOne) {
          // width: 130px;
          // height: 140px;
          // margin-top: 1em;
          // @apply order-1;
        }

        @media (max-width: $breakTwo) {
          // width: 55vw;
          // height: 17vh;
          // margin-top: 1em;
          // @apply order-1;
        }

        @media (max-width: $breakThree) {
          // width: 55vw;
          // height: 17vh;
          // margin-top: 1em;
          // @apply order-1;
        }
      }

      a.svg.svgArt.mastHarper {
        // @apply block;
        // width: 480px;
        // width: 32.4vw;
        // height: 20vh;
        // transform: rotate(1deg);
        // margin-top: -0.6em;
        // margin-left: 1em;
        // @apply order-2;

        @media (max-width: $breakThou) {
          // @apply order-2;
          // width: 46vw;
          // height: 20vh;
          // @apply mt-[-1.5em];
          // @apply grow;
        }

        @media (max-width: $breakOne) {
          // @apply order-3;
          // width: 68vw;
          // height: 20vh;
          // @apply mt-[-1.5em];
          // @apply grow;
        }

        @media (max-width: $breakTwo) {
          // @apply order-3;
          // width: 64vw;
          // height: 20vh;
          // @apply mt-[-1.5em];
          // @apply grow;
        }

        @media (max-width: $breakThree) {
          // @apply order-3;
          // width: 64vw;
          // height: 20vh;
          // @apply mt-[-1.5em];
          // @apply grow;
        }

      }

      a.DrewHead {
        background-image: url(/img/drew_mug_punk.png);
        filter: hue-rotate(360deg);
        //
        @apply bg-no-repeat;
        @apply bg-contain;
        @apply w-[18vw];
        @apply h-[120px];
        @apply no-underline;

        @media (max-width: $breakOne) {
          @apply w-[122px];
          @apply h-[122px];
          @apply mt-4;
        }

        @media (max-width: $breakTwo) {
          @apply w-[122px];
          @apply h-[135px];
          @apply mt-2;
        }

        @media (max-width: $breakThree) {
          @apply w-[82px];
          @apply h-[93px];
        }

      }
    }

  }
</style>
