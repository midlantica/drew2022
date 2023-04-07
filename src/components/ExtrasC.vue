<template>
  <transition name="bounce3" appear>
    <div class="extrasWrapper flex flex-row flex-wrap w-full m-auto">
      <h1 class="marAuto">
        Portfolio Extras
      </h1>

      <div class="extrasWrap w-full p-0 flex flex-row flex-wrap place-content-center gap-x-4 items-start">
        <div v-for="(item, index) in portfolioExtras" :key="index" class="content-center gap-x-4">
          <a :href="itemUrl(item)" target="_BLANK">
            <img class="portThumbs" :src="itemSrc(item)">
            <div class="text-center">
              <p>{{ item.text }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  // import { ref } from 'vue'

  const myUrl = '/img/portfolio/extras/'

  const itemUrl = (item) => {
    return myUrl + item.imageUrl
  }

  const itemSrc = (item) => {
    return myUrl + item.imageSrc
  }

  const portfolioExtras = [
    {
      text: 'Zander Insurance',
      imageUrl: 'zander.png',
      imageSrc: 'zander_sm@2x.png'
    },
    {
      text: 'A Service Request page',
      imageUrl: 'serviceRequestV1.png',
      imageSrc: 'service-request@2x.png'
    },
    {
      text: 'JPay.com multipage PDF',
      imageUrl: 'jpay_com_ui_email_v64.pdf',
      imageSrc: 'jpay-email@2x.png'
    },
    {
      text: 'Multi-page JPay Mobile interface pdf',
      imageUrl: 'JP4_ui_v4.pdf',
      imageSrc: 'jp4-device-music@2x.png'
    },
    {
      text: 'Bridge Admin Business Analysis',
      imageUrl: 'Bridge_Program.png',
      imageSrc: 'bridge-analysis@2x.png'
    },
    {
      text: 'Civic Inc - Axure Wireframe',
      imageUrl: 'Axure-Bridge-Info-TDOT.png',
      imageSrc: 'axure-bridge@2x.png'
    },
    {
      text: 'JPay Kiosk Email screens',
      imageUrl: 'jpay_kiosk_emessages_v18.pdf',
      imageSrc: 'jpay-kiosk-email@2x.png'
    },
    {
      text: 'JPay Kiosk Music screens',
      imageUrl: 'Jpay_kiosk_music_v18b.pdf',
      imageSrc: 'jpay-kiosk-music@2x.png'
    },
    {
      text: 'Mobile Lottery interface, interactive pdf',
      imageUrl: 'mlotto_app.pdf',
      imageSrc: 'm-lotto-ui@2x.png'
    },
    {
      text: 'JPay Extras: Web, Mobile, Corp ID, Print Ads, Newsletters, Brochures, Package Design, PDF forms, Kiosk Design, Murals',
      imageUrl: 'JPay_Extras.pdf',
      imageSrc: 'JPay_Extras@2x.png'
    }
  ]

</script>

<style lang="scss" scoped>
  h1 {
    @apply text-[2em] text-center py-2 px-0;

    a {
      @apply no-underline;
    }
  }

  .extrasWrap {
    //

    a {
      @apply basis-auto grow box-border text-center items-center no-underline text-black ;

      img.portThumbs {
        @apply w-[400px] h-auto border-2 border-solid text-base-ivory shadow-druShadow transition-opacity duration-1000 ease-in-out;

        &:hover {
          @apply shadow-none border-2 border-solid text-base-accentRed;
        }
      }

      p {
        @apply inline-block text-center mt-2 text-[0.85em] text-black mb-4 max-w-[400px] pb-0 border-b border-solid border-transparent;

        &:hover {
          @apply border-b border-solid border-base-accentRed;
        }
      }

      &:hover p {
        @apply text-base-accentRed border border-solid border-base-accentRed/30;
      }

      &:hover img {
        @apply shadow-none cursor-pointer border-2 border-solid border-base-accentRed;
      }
    }
  }

  .modern .extrasWrap {
    //

    a {
      //

      img.portThumbs {
        //
      }

      p {
        @apply text-white;

        &:hover {
          @apply border border-solid border-base-white;
        }
      }

      &:hover p {
        @apply text-white border border-solid border-base-white;
      }

    }
  }

  .punk .extrasWrap {
    //

    a {
      //

      img.portThumbs {
        //
      }

      p {
        @apply text-white bg-base-accentRed py-[.15rem] px-[.25rem];

        &:hover {
          @apply border border-solid border-base-white;
        }
      }

      &:hover p {
        @apply text-white border border-solid border-base-black;
      }

    }
  }
</style>
