<template>
  <div class="about" ref='target' :style="{ transform: cardTransform, transition: 'transform 0.25 ease-out' }">
    <div class="flagBox">
      <div class="flag">&nbsp;</div>
    </div>
    <p>{{ store.copy.aboutCopy }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { inject, ref, computed } from "vue"
  import { useMouseInElement } from '@vueuse/core'

  const store: any = inject("store")

  const target = ref(null)
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
  const cardTransform = computed(() => {
    const MAX_ROTATION = 10

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2) // handles x-axis
    const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2) // handles x-axis

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  })
</script>

<style lang="scss" scoped>
.about {
  background: #fbf3bb;
  padding: 1.25rem 1.75rem;
  // display: block;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  //
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  border-radius: 2px;
  @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

  @media (max-width: $breakThou) {
    margin: 0rem 0 0.5rem;
  }

  @media (max-width: $breakOne) {
    margin: 0 0 0.5rem;
  }

  @media (max-width: $breakFour) {
    flex-direction: column;
  }
}

.flagBox {
  display: flex;
  flex-direction: column;
  //
  align-content: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  //
  float: left;
  clear: left;
  flex-basis: auto;

  @media (max-width: $breakFour) {
    margin-bottom: 0.5em;
  }
}

.flag {
  display: block;
  background: url("/img/brit_amer_flag.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 1em;
  background-position-y: center;
  //
  align-content: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100px;
  height: 60px;
}

p {
  display: block;
  color: lighten($grey, 15);
  font-size: 0.9em;
  line-height: 1.4em;
  letter-spacing: 0.05em;
  //
  align-content: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: left;
}

.corp .about {
  @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
  border-radius: 2px;
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
    color: white;
    margin: 0.25rem auto;
  }
}

.corp .about {

  //
  p {
    font-family: "Bodoni Moda", Times, serif !important;
    font-size: 1.071rem;
    letter-spacing: 0.04rem;
    line-height: 1.8rem;
    margin: 0;
    font-weight: 500;

    @media (max-width: $breakThou) {
      font-size: 1.15rem;
      line-height: 1.75rem;
    }

    @media (max-width: $breakTwo) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}

.modern .about {
  display: flex;
  flex-direction: column;
  margin: initial;
  margin-top: auto;
  width: 100%;
  // min-width: 30ch;
  gap: 1rem;
  box-shadow: 2px 2px 10px 0px black;
  border-radius: 3px;

  @media (max-width: 850px) {
    flex-direction: row;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }

  .flagBox {
    width: auto;
    // margin-bottom: 1rem;
  }

  .flag {
    display: block;
    background: url("/img/brit_amer_flag.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: initial !important;
    background-position-y: center;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100px;
    height: 60px;
  }

  p {
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    font-size: clamp(0.75rem, 0.8rem, 1.15rem) !important;
    letter-spacing: 0rem;
    line-height: 1.5rem;
    margin: 0;
    font-weight: 300;
    color: $ivory;

    // @media (max-width: $breakThou) {
    //   font-size: 1.15rem;
    //   line-height: 1.75rem;
    // }

    // @media (max-width: $breakTwo) {
    //   font-size: 1rem;
    //   line-height: 1.5rem;
    // }
  }
}
</style>
