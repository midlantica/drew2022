<template>
  <div class="projectBox">
    <div class="projectBox__top">
      <transition name="bounce3" appear>
        <a class="carouselArrow flash" v-if="backButtonView" @click="viewCarousel()">﹤ back</a>
      </transition>
      <p class="projectHead" @click="viewCarousel()">
        Projects - {{ selectedViewTxt }}
      </p>
    </div>

    <component :is="selectedView">
      <transition name="bounce3" appear>
        <div class="miniGallery">
          <div v-for="item in projects" :key="item">
            <a @click="selectCarousel(item[1], item[2])">
              <div class="box" :class="item[3]">
                <component :is="item[0]" />
                <p>{{ item[2] }}</p>
              </div>
            </a>
          </div>
        </div>
      </transition>
    </component>
  </div>
</template>

<script setup>
  import { ref, shallowRef } from 'vue'

  import IconUiux from '../../components/Carousel/icons/iconUiux.vue'
  import IconMobile from '../../components/Carousel/icons/iconMobile.vue'
  import IconKiosk from '../../components/Carousel/icons/iconKiosk.vue'
  import IconGraphics from '../../components/Carousel/icons/iconGraphics.vue'
  import IconPrint from '../../components/Carousel/icons/iconPrint.vue'
  import IconMisc from '../../components/Carousel/icons/iconMisc.vue'

  import uiux01 from '../../components/Carousel/uiux01.vue'
  import mobile02 from '../../components/Carousel/mobile02.vue'
  import kiosk03 from '../../components/Carousel/kiosk03.vue'
  import graphics04 from '../../components/Carousel/graphics04.vue'
  import print05 from '../../components/Carousel/print05.vue'
  import misc06 from '../../components/Carousel/misc06.vue'

  const backButtonView = ref(false)
  const selectedView = shallowRef('Carousel')
  const selectedViewTxt = ref('Select one...')

  const projects = shallowRef([
    [
      IconUiux,
      uiux01,
      'UI/UX Design',
      'Uiux'
    ],
    [
      IconMobile,
      mobile02,
      'Mobile',
      'Mobile'
    ],
    [
      IconKiosk,
      kiosk03,
      'Kiosk',
      'Kiosk'
    ],
    [
      IconGraphics,
      graphics04,
      'Graphics',
      'Graphics'
    ],
    [
      IconPrint,
      print05,
      'Print',
      'Print'
    ],
    [
      IconMisc,
      misc06,
      'Misc.',
      'Misc'
    ]
  ])

  const selectCarousel = (i, x) => {
    selectedView.value = i
    selectedViewTxt.value = x
    backButtonView.value = true
  }

  const viewCarousel = () => {
    selectedView.value = 'Carousel'
    selectedViewTxt.value = 'Select one...'
    backButtonView.value = false
  }

</script>

<style lang='scss' scoped>
  :root {
    --carouselFade: .5s;
  }

  .projectBox {
    @apply bg-[#f2f2f2] rounded p-2 relative lowercase clear-both;

    .projectBox__top {
      @apply flex flex-row flex-nowrap items-start h-6 mb-1 relative z-20;

      .projectHead {
        @apply text-[0.9em] text-center normal-case m-auto cursor-pointer mt-[-2px];

        div a {
          @apply cursor-pointer;
        }
      }
    }
  }

  .carouselArrow {
    @apply text-[.7rem] text-gray-600 border-none rounded-sm border-l-[10px] bg-black/10 pt-[.2rem] pr-2 pb-[.16rem] pl-[.4rem] m-0 font-sans cursor-pointer absolute drop-shadow-[2px_2px_2px_hsla(0,0%,100%,0.5)];

    &:hover {
      @apply bg-black/20 text-black;
    }
  }

  .miniGallery {
    @apply w-full flex flex-row flex-wrap justify-center items-center content-center;

    div {
      @apply flex-auto w-[125px] no-underline cursor-pointer inline-block text-center;

      a {
        @apply flex;

        .box {
          @apply flex flex-col flex-nowrap items-center content-center justify-center text-center m-auto bg-white border border-solid text-gray-800 min-w-[130px] shadow-[0px_2px_2px_-3px_black] stroke-gray-800;

          svg.iconSVG {
            @apply stroke-[1px] stroke-gray-800 relative ease-out duration-200 w-auto fill-transparent;
          }

          p {
            @apply w-full text-gray-800 text-[0.85em] normal-case text-center tracking-wider relative;
          }

          &:hover {
            //

            p {
              @apply ease-out duration-300 top-[-7px];
              // @apply decoration-yellow-400 underline underline-offset-4 decoration-2;
            }

            svg.iconSVG {
              @apply ease-out duration-300 w-auto top-[-7px];
            }

          }

        }
      }

    }
  }

  body.modern {
    //

    .projectBox {
      @apply bg-transparent;

      @media (max-width: var(--breakThou)) {
        //
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

      .projectBox__top {
        @apply mb-2;

        .projectHead {
          @apply mt-[2px];
        }
      }

      p {
        @apply font-modernCopy text-white text-[.85rem] text-center lowercase tracking-[0em];
      }

      .carouselArrow {
        @apply rounded-xl text-white/80 bg-white/20 pt-[.15rem] pr-[.85rem] pb-[.2rem] pl-[.75rem] drop-shadow-none text-center;

        &:hover {
          @apply text-black bg-white/80;
        }
      }

    }

    .miniGallery {
      @apply bg-none gap-4;

      .box {
        @apply max-w-[150px] h-[168px] rounded-xl top-0 relative bg-transparent border border-solid border-transparent;

        @media (max-width: var(--breakThou)) {
          @apply min-h-min;
        }

        &:hover {
          @apply rounded-xl border border-solid border-[#FFFFFF80] shadow-[0px_0px_1rem_0px_#d71d5b] top-[-5px] ease-out duration-100;
        }

        .iconSVG {
          @apply relative w-auto ease-out duration-100;
        }

        p {
          @apply font-modernCopy font-extralight text-white text-[.85rem] relative lowercase text-center mt-[4px] mx-0 mb-0;
        }

      }

    }

  }

  body.bourbon {
    //

    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,_0%,_0%,_90%)];

      @media (max-width: var(--breakThou)) {
        //
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

      p {
        @apply text-gray-800 font-bourbonCopy font-medium lowercase;
      }

      .projectHead {
        @apply font-bourbonCopy mt-[1px] tracking-wide;
      }
    }

    .miniGallery div .box {
      @apply h-[180px];

      p {
        @apply text-[.85rem] font-bourbonCopy text-gray-800 text-center tracking-normal lowercase;

        a {
          @apply text-gray-800;

          &:hover {
            @apply text-gray-800;
          }
        }
      }
    }

  }

  body.groovy {
    //

    .projectBox {
      @apply shadow-[0px_6px_0px_0px_hsl(0,_0%,_0%,_25%)];

      @media (max-width: var(--breakThou)) {
        @apply min-h-min;
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

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply font-groovyCopy mt-[1px];
      }
    }

    .miniGallery div .box {
      @apply h-[170px];

      p {
        @apply font-groovyCopy text-center text-gray-800;
      }
    }

  }

  body.techy {
    //

    .projectBox {
      @apply shadow-[0px_2px_6px_-2px_hsl(0,_0%,_0%,_90%)] rounded-none;

      @media (max-width: var(--breakThou)) {
        @apply min-h-min;
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

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply font-techyCopy uppercase mt-[1px];
      }
    }

    .miniGallery div .box {
      @apply h-[167px] border border-solid border-gray-200 ease-out duration-200;

      &:hover {
        @apply border-2 border-solid border-techy-mango ease-out duration-200;
      }

      p {
        @apply font-techyCopy text-center text-gray-800 ease-out duration-200;
      }

      svg {
        @apply ease-out duration-200;

        path,
        polygon,
        circle {
          @apply ease-out duration-200;
        }
      }
    }
  }

  body.corp {

    //
    .projectBox {
      @apply bg-base-offWhite;
      @apply shadow-[0px_1px_1px_0px_hsl(0,_0%,_0%,_50%)];

      @media (max-width: var(--breakThou)) {
        @apply min-h-min;
      }

      @media (max-width: var(--breakOne)) {
        //
      }

      @media (max-width: var(--breakTwo)) {
        // min-height: 386px;
      }

      @media (max-width: var(--breakThree)) {
        //
      }

      p {
        @apply text-gray-800;
      }

      .projectHead {
        @apply font-corpHead mt-[1px];
      }

      .carouselArrow {
        @apply text-white bg-[hsla(205,98%,17%,0.6)] tracking-[0.05em] shadow-none rounded-sm;

        &:hover {
          @apply text-white bg-[hsla(205,98%,17%,0.85)];

        }
      }
    }

    .miniGallery div .box {
      @apply h-[183px] border border-solid border-[#D7E7F3];

      &:hover {
        @apply border border-solid border-[#abcbe3];
      }

      p {
        @apply font-corpCopy tracking-wider text-center text-gray-800;
      }
    }
  }

  body.punk {
    //

    .projectBox {
      @apply rounded-none bg-white/70;
      @apply shadow-[0px_1px_1px_0px_hsl(0,_0%,_0%,_50%)];

      @media (max-width: var(--breakThou)) {
        @apply min-h-min;
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

      p {
        @apply text-base-black;
      }

      .projectHead {
        @apply font-punkCopy mt-[1px];
      }

      .carouselArrow {
        @apply rounded-none text-white bg-black/30 pt-[.1rem] pr-[.5rem] pb-[.2rem] pl-[.4rem] shadow-none;

        &:hover {
          @apply text-white bg-black/50;
        }
      }
    }

    .miniGallery {
      @apply top-0;

      div .box {
        @apply h-[183px];

        p {
          @apply text-center font-punkCopy text-gray-800;
        }

      }
    }
  }

  @keyframes carouselFader {
    0% {
      @apply scale-0 opacity-0;
    }

    50% {
      @apply scale-0 opacity-0;
    }

    95% {
      @apply scale-100 opacity-100;
    }

    100% {
      @apply scale-100 opacity-100;
    }
  }

</style>
