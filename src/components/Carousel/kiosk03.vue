<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
  >
    <vueper-slide
      v-for='(slide, i) in slides' :key='i'
      :image='slide.image'
    >
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  // let title = ref('')
  // const imgPath = ('/public/img/portfolio/01_uiux/')
  const slides = shallowRef([
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_home.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_home_signed_in.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_buy_jp3.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_music.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_music_songs_list.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_inbox.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_pic.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_email_read.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_buys.jpg'
    },
    {
      image: '/img/portfolio/03_kiosk/inmate_kiosk_ui_manage.jpg'
    },

  ])
</script>

<style lang="scss">
  @import '../../assets/css/carousel.scss';
</style>
