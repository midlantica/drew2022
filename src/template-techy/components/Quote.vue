<template>
  <transition name='bounce7' appear>
    <div class='quoteBlock'>
      <transition-group name='zoomQuote' tag='quotePad'>
        <div class='quotePad' v-bind:key="copy">
          <p class='fadeTexter'>&ldquo;{{ quotes.copy[slideNum].quote }}&rdquo; <cite>&ndash; {{
            quotes.copy[slideNum].author }}</cite></p>

        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { inject, ref, onMounted } from 'vue'
  const quotes: any = inject('quotes')

  // let quotesLength: any = ref(quotes.length.value)
  // const quoteViz = ref(false)
  let slideNum: any = ref(1)
  let rolls: any = ref([])
  let copy: any = ref('copy')

  function roll(): void {
    setInterval((): void => {
      slideNum.value = Math.floor(Math.random() * Math.floor(24)) + 1
      rolls.value.unshift(slideNum)
      // quoteViz.value = true
    }, 6000)
    // quoteViz.value = false
  }

  onMounted((): void => {
    console.log(`She's a-runnin'!`)
    roll()
  })

</script>

<style lang="scss" scoped>
@import '../assets/css/techy-main.scss';

/* Zoom animation */
.zoomQuote-enter-active,
.zoomQuote-leave-active {
  transition: transform 300ms ease;
}

.zoomQuote-enter-from,
.zoomQuote-leave-to {
  transform: scale(0.9);
}

.fadeTexter-enter-active {
  transition: all 0.3s ease-out;
  opacity: 1;
}

.fadeTexter-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 1;
}

.fadeTexter-enter-from,
.fadeTexter-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.quoteBlock {
  background: $mango;
  // margin-bottom: .5em;
  padding: .75em 2em 1em;
  // @include shadow;
  // @include clearfix;
  text-align: center;

  p {
    font-size: 1em;
    color: $blueTech;
    text-align: center;
    padding: .5em;
    letter-spacing: 0.02em;
    font-style: normal;
    display: inline !important;

    @media (max-width: $breakThou) {
      font-size: 1.25em;
    }

    @media (max-width: $breakOne) {
      font-size: 1.2em;
    }

    @media (max-width: $breakTwo) {
      font-size: 1em;
    }

    @media (max-width: $breakThree) {
      font-size: .85em;
      line-height: 1.25em;
    }
  }

  cite {
    display: inline !important;
    font-family: $font-copy;
    color: $blueTech;
    margin: 0 4em 0 0;
    text-align: right;
    letter-spacing: .08em;
    font-style: normal;
  }
}
</style>
