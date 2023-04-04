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
    @apply bg-[#fbf3bb] py-5 px-7 flex flex-row flex-nowrap justify-center items-center content-center self-center rounded-sm cursor-pointer;
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
    @apply flex flex-col content-center items-center justify-center self-center float-left clear-left basis-auto;

    @media (max-width: $breakFour) {
      @apply mb-2;
    }
  }

  .flag {
    @apply block bg-no-repeat mr-4 content-center items-center justify-center self-center w-[100px] h-[60px] bg-[url('/img/brit_amer_flag.svg')] bg-center bg-contain;
  }

  p {
    color: lighten($grey, 15);
    @apply block text-[0.9em] leading-[1.4em] tracking-wider content-center items-center justify-center self-center text-left;
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
    @apply bg-techy-blueTech;

    p {
      @apply text-white my-1 mx-auto;
    }
  }

  .corp .about {
    //

    p {
      font-family: "Bodoni Moda", Times, serif !important;
      @apply text-[0.9rem] tracking-[0.02rem] leading-6 m-0 font-medium;

      @media (max-width: $breakThou) {
        @apply text-[1.15rem] leading-7;
      }

      @media (max-width: $breakTwo) {
        @apply text-[1rem] leading-6;
      }
    }
  }

  .modern .about {
    margin: initial;
    box-shadow: 2px 2px 10px 0px black;
    @apply flex flex-col w-full gap-4 rounded-[3px] mt-auto;

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
      background: url("/img/brit_amer_flag.svg");
      background-size: contain;
      margin-right: initial !important;
      background-position-y: center;
      //
      @apply block bg-no-repeat content-center items-center justify-center self-center w-[100px] h-[60px];
    }

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      font-size: clamp(0.75rem, 0.8rem, 1.15rem) !important;
      @apply tracking-normal leading-6 m-0 font-light text-base-ivory;
    }
  }
</style>
