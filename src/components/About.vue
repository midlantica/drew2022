<template>
  <div
    class="about" ref="target" :style="{ transform: cardTransform, transition: 'transform 0.25 ease-out' }"
    @click="play"
  >
    <div class="flagBox">
      <div class="flag">
        &nbsp;
      </div>
    </div>
    <p>{{ store.copy.aboutCopy }}</p>
  </div>
</template>

<script setup>
  import { inject, ref, computed } from 'vue'
  import { useMouseInElement } from '@vueuse/core'

  const store = inject('store')

  const target = ref(null)
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
  const cardTransform = computed(() => {
    const MAX_ROTATION = 10

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2) // handles x-axis
    const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2) // handles x-axis

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  })

  // SOUND!!! ###################################
  // SOUND!!! ###################################
  const yeehaw = new Audio('/yeehaw.mp3')
  const jollyGood = new Audio('/jollyGood.mp3')

  let isActive = false

  const play = () => {
    if (isActive) {
      yeehaw.play()
      console.log(isActive)
    } else {
      jollyGood.play()
      console.log(isActive)
    }
    isActive = !isActive
  }
</script>

<style lang="scss" scoped>
  .about {
    @apply bg-[#fbf3bb];
    @apply py-5 px-7;
    @apply flex;
    @apply flex-row;
    @apply flex-nowrap;
    @apply justify-center;
    @apply items-center;
    @apply content-center;
    @apply self-center;
    @apply rounded-sm;
    @apply cursor-pointer;
    @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

    @media (max-width: $breakThou) {
      margin: 0rem 0 0.5rem;
    }

    @media (max-width: $breakOne) {
      margin: 0 0 0.5rem;
    }

    @media (max-width: $breakFour) {
      @apply flex-col;
    }
  }

  .flagBox {
    @apply flex;
    @apply flex-col;
    //
    @apply content-center;
    @apply items-center;
    @apply justify-center;
    @apply self-center;
    //
    @apply float-left;
    @apply clear-left;
    @apply basis-auto;

    @media (max-width: $breakFour) {
      @apply mb-2;
    }
  }

  .flag {
    @apply block;
    background: url("/img/brit_amer_flag.svg");
    @apply bg-no-repeat;
    @apply mr-4;
    background-size: contain;
    background-position-y: center;
    //
    @apply content-center;
    @apply items-center;
    @apply justify-center;
    @apply self-center;
    @apply w-[100px];
    @apply h-[60px];
  }

  p {
    @apply block;
    color: lighten($grey, 15);
    @apply text-[0.9em];
    @apply leading-[1.4em];
    @apply tracking-wider;
    //
    @apply content-center;
    @apply items-center;
    @apply justify-center;
    @apply self-center;
    @apply text-left;
  }

  .corp .about {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
    @apply rounded-sm;
    font-family: Alegreya;
  }

  .punk .about {

    //
    p {
      margin: 0.25rem auto;
    }
  }

  .techy .about {
    background: #423BA0 !important;

    //
    p {
      @apply text-white;
      margin: 0.25rem auto;
    }
  }

  .corp .about {

    //
    p {
      font-family: "Bodoni Moda", Times, serif !important;
      @apply text-[0.9rem];
      @apply tracking-[0.02rem];
      @apply leading-6;
      @apply m-0;
      @apply font-medium;

      @media (max-width: $breakThou) {
        @apply text-[1.15rem];
        line-height: 1.75rem;
      }

      @media (max-width: $breakTwo) {
        @apply text-[1rem];
        @apply leading-6;
      }
    }
  }

  .modern .about {
    @apply flex;
    @apply flex-col;
    margin: initial;
    margin-top: auto;
    @apply w-full;
    @apply gap-4;
    box-shadow: 2px 2px 10px 0px black;
    @apply rounded-[3px];

    @media (max-width: 850px) {
      @apply flex-row;
    }

    @media (max-width: 550px) {
      @apply flex-col;
    }

    .flagBox {
      @apply w-auto;
    }

    .flag {
      @apply block;
      background: url("/img/brit_amer_flag.svg");
      @apply bg-no-repeat;
      background-size: contain;
      margin-right: initial !important;
      background-position-y: center;
      //
      @apply content-center;
      @apply items-center;
      @apply justify-center;
      @apply self-center;
      @apply w-[100px];
      @apply h-[60px];
    }

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      font-size: clamp(0.75rem, 0.8rem, 1.15rem) !important;
      @apply tracking-normal;
      @apply leading-6;
      @apply m-0;
      @apply font-light;
      color: $ivory;

      // @media (max-width: $breakThou) {
      //   @apply text-[1.15rem];
      //   line-height: 1.75rem;
      // }

      // @media (max-width: $breakTwo) {
      //   @apply text-[1rem];
      //   @apply leading-6;
      // }
    }
  }
</style>
