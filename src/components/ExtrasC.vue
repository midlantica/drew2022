<template>
  <transition name="bounce3" appear>
    <div class="extrasWrapper flexRowWrap w100 marAuto">
      <h1 class="marAuto">
        Portfolio Extras
      </h1>

      <div class="flexxy flexRowWrap center-flex gapY1 align-items-flex-start">
        <div v-for="(item, index) in portfolioExtras" :key="index" class="align-content-center marX1">
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

<script lang="ts" setup>
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
    font-size: 2em;
    text-align: center;
    padding: 0.5em 0;

    a {
      text-decoration: none;
    }
  }

  .flexxy {
    padding: 0 0em;
    display: flex;
    width: 100%;

    a {
      flex-basis: auto;
      flex-grow: 1;
      box-sizing: border-box;
      text-align: center;
      align-items: center;
      text-decoration: none;
      // margin: 0em 1em;
      color: black;

      img.portThumbs {
        width: 400px;
        height: auto;
        // margin: 1em auto 0;
        border: 2px solid $ivory;
        transition: opacity 1s ease-in-out;
        @include shadow;

        &:hover {
          border: 2px solid lighten($accent-red, 0);
          @include no-shadow;
        }
      }

      p {
        display: inline-block;
        text-align: center;
        // margin: 0;
        margin-bottom: 1em;
        margin-top: 0.5em;
        padding-bottom: 0;
        font-size: 0.85em;
        color: black;
        border-bottom: 1px solid transparent;
        max-width: 400px;
        @include clearfix;

        &:hover {
          border-bottom: 1px solid lighten($accent-red, 30);
        }
      }

      &:hover p {
        color: purple;
        border-bottom: 1px solid lighten($accent-red, 30);
      }

      &:hover img {
        border: 2px solid lighten($accent-red, 0);
        @include no-shadow;
        cursor: pointer;
      }
    }
  }
</style>
