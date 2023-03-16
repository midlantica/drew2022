<template>
  <transition name='bounce12' appear>
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
    }, 12000)
    // quoteViz.value = false
  }

  onMounted((): void => {
    // console.log(`She's a-runnin'!`)
    roll()
  })

</script>

<style lang='scss'></style>
