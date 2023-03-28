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
  @import '../../assets/css/carousel.scss';

  $carouselFade: 0.5;

  .projectBox {
    @apply bg-[#f2f2f2];
    @apply rounded;
    @apply p-2;
    @apply relative;
    @apply lowercase;
    @include clearfix;

    .projectBox__top {
      @apply flex;
      @apply flex-row;
      @apply flex-nowrap;
      @apply items-start;
      @apply h-6;
      @apply mb-1;
      @apply relative;
      @apply z-20;

      .projectHead {
        @apply text-[0.9em];
        @apply text-center;
        @apply normal-case;
        @apply m-auto;
        @apply cursor-pointer;
        @apply mt-[-2px];

        div a {
          @apply cursor-pointer;
        }
      }
    }
  }

  body.modern {
    //

    .projectBox {
      background: none;

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

      .projectBox__top {
        @apply mb-2;
      }

      p {
        font-family: Spartan, Helvetica, Arial, sans-serif !important;
        @apply text-white;
        @apply text-[1rem];
        @apply text-center;
        @apply lowercase;
        @apply tracking-[0em];
      }
    }

    .miniGallery div .box {
      @apply h-[168px];
      background: none !important;
      border: 1px solid transparent !important;
      @apply rounded-xl;
      @apply top-0;
      @apply relative;

      @media (max-width: $breakThou) {
        @apply min-h-min;
      }

      &:hover {
        @apply ease-out;
        @apply rounded-xl;
        border: 1px solid transparentize(white, .5) !important;
        box-shadow: 0px 0px 1rem 0px #d71d5b;
        // @apply top-[-5px];

        p {
          @apply top-[-5px];
        }

        svg {
          @apply relative;
          @apply top-[-5px];
          // @apply ease-out;

          &:hover {
            stroke: $accent-red;
            @apply opacity-[.8];
            @apply relative;
            @apply ease-out;
          }
        }
      }

      p {
        font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
        @apply text-white;
        @apply text-[1rem];
        @apply relative;
        @apply lowercase;
        @apply top-[5px];
        @apply text-center;
        @apply mt-[4px] mx-0 mb-0;
        // @apply ease-out;

        &:hover {
          // @apply ease-out;
          // @apply top-[-5px];
        }
      }

      .iconSVG {
        @apply relative;
        @apply ease-out;
        width: initial !important;

        &:hover {
          @apply relative;
          @apply ease-out;
          @apply top-[-5px];
        }

        svg path,
        svg polygon,
        svg rect,
        svg polyline {
          @apply stroke-white;
          top: -5px !important;
          @apply ease-out;
        }
      }

    }
  }

  body.bourbon {

    //
    .projectBox {
      @include box-shadow(0px, 2px, 6px, -2px, hsla(0, 0%, 0%, .9));

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

      p {
        font-family: 'Spartan', Helvetica, Arial, sans-serif !important;
        @apply text-gray-800;
        @apply font-medium;
        @apply lowercase;
      }
    }

    .miniGallery div .box {
      @apply h-[130px];
      @apply h-[181.5px];

      p {
        font-family: 'Spartan', Helvetica, Arial, sans-serif !important;
        @apply text-[.85rem];
        @apply text-gray-800;
        @apply text-center;
        @apply tracking-normal;
        @apply lowercase;

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
      @include box-shadow(0px, 6px, 0px, 0px, hsla(0, 0%, 0%, 0.25));

      @media (max-width: $breakThou) {
        @apply min-h-min;
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

      p {
        @apply text-gray-800;
      }
    }

    .miniGallery div .box {
      height: 170px !important;

      p {
        font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
        @apply text-center;
        @apply text-gray-800;
      }
    }
  }

  body.techy {

    //
    .projectBox {
      @include box-shadow(0px, 2px, 6px, -2px, hsla(0, 0%, 0%, 1));

      @media (max-width: $breakThou) {
        @apply min-h-min;
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

      p {
        @apply text-gray-800;
      }
    }

    .miniGallery div .box {
      height: 167px !important;

      p {
        font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
        @apply text-center;
        @apply text-gray-800;
      }
    }
  }

  body.corp {

    //
    .projectBox {
      background: #d7e7f3;
      @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);

      @media (max-width: $breakThou) {
        @apply min-h-min;
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        // min-height: 386px;
      }

      @media (max-width: $breakThree) {
        //
      }

      p {
        @apply text-gray-800;
      }
    }

    .miniGallery div .box {
      height: 182px !important;
      border: none;

      &:hover {
        border: none;
      }

      p {
        font-family: 'Bodoni Moda', Times, serif !important;
        @apply tracking-wider;
        @apply text-center;
        @apply text-gray-800;
      }
    }
  }

  body.punk {

    //
    .projectBox {
      @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);

      @media (max-width: $breakThou) {
        @apply min-h-min;
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

      p {
        @apply text-gray-800;
      }
    }

    .miniGallery div .box {
      @apply h-[181.5px];

      p {
        font-family: Poppins, 'Helvetica Neue', Arial, sans-serif !important;
        @apply text-center;
        @apply text-gray-800;
      }

    }
  }

  body.punk .miniGallery {
    @apply top-0;
  }

  body.modern .miniGallery {
    background: none;
    @apply gap-4;
  }

  body.corp .VueCarousel.druCarousel {
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.29);
  }

  .miniGallery {
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-between;
    @apply items-center;
    @apply content-center;
    @apply duration-75;
    @apply w-full;

    div {
      @apply grow;
      @apply w-[125px];
      @apply no-underline;
      @apply cursor-pointer;
      @apply inline-block;

      &:hover {
        // color: $ivory;
        @apply text-bourbon-ivory;
        @apply no-underline;
      }

      a {
        @apply flex;
      }

      .box {
        @apply flex;
        @apply flex-col;
        @apply flex-nowrap;
        @apply items-center;
        @apply content-center;
        @apply justify-center;
        @apply duration-75;
        @apply text-center;
        box-shadow: 0px 2px 2px -3px black;
        @apply m-auto;
        @apply bg-white;
        border: 1px solid transparentize(grey, 0.85) !important;

        p {
          @apply text-[#333];
          @apply relative;
          @apply ease-out;
          @apply lowercase;
        }

        &:hover {
          @apply ease-out;
          border: 1px solid transparentize(grey, 0.5);
          // box-shadow: 0px 2px 4px -1px hsla(0, 0%, 50%, 0.25);
          @apply top-[-5px];

          p {
            @apply relative;
            @apply top-[-5px];
            @apply ease-out;
          }

          svg {
            @apply relative;
            @apply top-[-5px];
            @apply ease-out;
          }
        }

        &.Uiux {
          //

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Mobile {
          //

          @media (max-width: $breakThou) {
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
          @apply w-full;
          @apply text-[0.85em];
          @apply normal-case;
          @apply text-white;
          @apply text-center;
          @apply tracking-wider;
          @apply mb-2;
          @apply text-center;

          &:hover {
            // color: $ivory;
            @apply text-bourbon-ivory;
          }
        }
      }

    }
  }

  @keyframes carouselFader {
    0% {
      @apply scale-0;
      @apply opacity-0;
    }

    50% {
      @apply scale-0;
      @apply opacity-0;
    }

    95% {
      @apply scale-100;
      @apply opacity-100;
    }

    100% {
      @apply scale-100;
      @apply opacity-100;
    }
  }

  .miniGallery div {
    @apply text-center;

    //
    &:nth-of-type(1) {
      animation: carouselFader ($carouselFade *0.51 + s);
    }

    &:nth-of-type(2) {
      animation: carouselFader ($carouselFade *0.51.2 + s);
    }

    &:nth-of-type(3) {
      animation: carouselFader ($carouselFade *0.51.3 + s);
    }

    &:nth-of-type(4) {
      animation: carouselFader ($carouselFade *0.51.4 + s);
    }

    &:nth-of-type(5) {
      animation: carouselFader ($carouselFade *0.51.5 + s);
    }

    &:nth-of-type(6) {
      animation: carouselFader ($carouselFade *0.51.6 + s);
    }
  }

  .iconSVG {
    @apply relative;
    @apply ease-out;
    width: initial !important;

    &:hover {
      @apply relative;
      @apply ease-out;
    }

    svg path,
    svg polygon,
    svg rect,
    svg polyline {
      @apply stroke-white;
      // @apply relative;
      // top: -10px !important;
      // @apply ease-out;
    }
  }

  .carouselArrow {
    color: hsla(0, 0%, 100%, 1);
    background: hsla(0, 0%, 0%, 0.3);
    padding: 0.2rem 0.5rem 0.1rem 0.4rem;

    &:hover {
      color: hsla(0, 0%, 100%, 1);
    background: hsla(0, 0%, 0%, 0.5);
  }
}</style>
