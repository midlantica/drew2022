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
  // @import '../../assets/css/carousel.scss';

  :root {
    --carouselFade: .5s;
  }

  $carouselFade: 0.5;

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

  .miniGallery {
    @apply w-full flex flex-row flex-wrap justify-center items-center content-center;

    div {
      @apply flex-auto w-[125px] no-underline cursor-pointer inline-block text-center;

      &:hover {
        @apply text-bourbon-ivory no-underline;
      }

      a {
        @apply flex;
      }

      .box {
        @apply flex flex-col flex-nowrap items-center content-center justify-center duration-75 text-center m-auto bg-white border border-solid text-gray-400/80 min-w-[130px] shadow-[0px_2px_2px_-3px_black];

        p {
          @apply text-[#333] relative ease-out lowercase;
        }

        &:hover {
          @apply ease-out top-[-5px] border border-solid text-gray-400/80;

          p {
            @apply relative top-[-5px] ease-out;
          }

          svg {
            @apply relative top-[-5px] ease-out;
          }
        }

        &.Uiux {
          //

          @media (max-width: var(--breakThou)) {
            //
          }
        }

        &.Mobile {
          //

          @media (max-width: var(--breakThou)) {
            //
          }
        }

        &.Kiosk {
          //
        }

        &.Graphics {
          //
        }

        &.Print {
          //
        }

        &.Misc {
          //
        }

        p {
          @apply w-full text-[0.85em] normal-case text-center tracking-wider mb-2;

          &:hover {
            // @apply text-bourbon-ivory;
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
        @apply font-modernCopy text-white text-[1rem] text-center lowercase tracking-[0em];
      }

      .carouselArrow {
        @apply rounded-[20px] m-0 pt-[.2rem] pr-[.75rem] pb-[.15rem] pl-[.6rem] shadow-none absolute transform-none tracking-[.05em] cursor-pointer border border-solid border-[#FFFFFF33] text-[#FFFFFFBF] font-modernCopy bg-black/5;

        &:hover {
          @apply bg-white/5;
        }
      }
    }

    .miniGallery {
      @apply bg-none gap-4;

      div {
        @apply max-w-[150px];
        .box {
          @apply h-[168px] rounded-xl top-0 relative bg-transparent border border-solid border-transparent;

          @media (max-width: var(--breakThou)) {
            @apply min-h-min;
          }

          &:hover {
            @apply ease-out rounded-xl border border-solid border-[#FFFFFF80] shadow-[0px_0px_1rem_0px_#d71d5b];

            p {
              @apply top-[-5px];
            }

            svg {
              @apply relative top-[-5px] ease-out;

              &:hover {
                @apply opacity-[.8] relative ease-out stroke-modern-accentRed;
              }
            }
          }

          p {
            @apply font-modernCopy text-white text-[.85rem] relative lowercase top-[5px] text-center mt-[4px] mx-0 mb-0 ease-out;

            &:hover {
              @apply ease-out;
            }
          }

          .iconSVG {
            @apply relative ease-out w-auto;
            // width: initial !important;

            &:hover {
              @apply relative ease-out top-[-5px];
            }

            svg path,
            svg polygon,
            svg rect,
            svg polyline {
              @apply stroke-white top-[-5px] ease-out;
            }
          }
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

  .miniGallery div {
    //

    &:nth-of-type(1) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51) + s);
    }

    &:nth-of-type(2) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51).2 + s);
    }

    &:nth-of-type(3) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51).3 + s);
    }

    &:nth-of-type(4) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51).4 + s);
    }

    &:nth-of-type(5) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51).5 + s);
    }

    &:nth-of-type(6) {
      animation: carouselFader (calc(var(--carouselFade) * 0.51).6 + s);
    }
  }

  .iconSVG {
    @apply relative ease-out duration-200 w-auto;

    &:hover {
      @apply relative ease-out duration-200;
    }

    svg path,
    svg polygon,
    svg rect,
    svg polyline {
      @apply stroke-white ease-out duration-200;
    }
  }

  .carouselArrow {
    @apply text-[.65rem] text-black/80 bg-black/10 pt-[.125rem] pr-[.5rem] pb-[.2rem] pl-[.4rem] shadow-none;

    &:hover {
      @apply text-white bg-black/40;
    }
  }
</style>-
