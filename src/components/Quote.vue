<template>
  <div class="quoteBlock" v-if="currentQuote">
    <div @click="previousQuote()" class="arrowBtn">
      &lt;
    </div>
    <transition name="quoteFade">
      <div class="quotePad">
        <p>&ldquo;{{ currentQuote.quote }}&rdquo; <cite>&ndash; {{ currentQuote.author }}</cite></p>
      </div>
    </transition>
    <div @click="nextQuote()" class="arrowBtn">
      &gt;
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const currentQuoteIndex = ref(0)
  const currentQuote = ref(null)

  const nextQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length
    currentQuote.value = quotes[currentQuoteIndex.value]
  }

  const previousQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value - 1 + quotes.length) % quotes.length
    currentQuote.value = quotes[currentQuoteIndex.value]
  }

  onMounted(() => {
    currentQuote.value = quotes[currentQuoteIndex.value]
    setInterval(nextQuote, 10000)
  })

  const quotes = [
    {
      quote: 'A user experience is like a joke: if you have to explain it, it\'s not that good',
      author: 'Martin LeBlanc'
    },
    {
      quote: 'Everything should be made as simple as possible, but not simpler.',
      author: 'Albert Einstein'
    },
    {
      quote: 'The answer to life is knowing when to stop',
      author: 'My Mom, when I was a kid :)'
    },
    {
      quote: 'If you can\'t explain it simply, you don\'t understand it well enough.',
      author: 'Albert Einstein'
    },
    {
      quote: 'It is vain to do with more what can be done with fewer',
      author: 'William of Occam'
    },
    {
      quote: 'Design is not just what it looks like and feels like. Design is how it works',
      author: 'Steve Jobs, 2003'
    },
    {
      quote: 'A picture is worth a thousand words. An interface is worth a thousand pictures',
      author: 'Ben Shneiderman'
    },
    {
      quote: 'We do not see things as they are; we see things as we are',
      author: 'The Talmud'
    },
    {
      quote: 'Measure twice, cut once',
      author: 'unknown'
    },
    {
      quote: 'You can use an eraser on the drafting table or a sledge hammer on the construction site.',
      author: 'Frank Lloyd Wright'
    },
    {
      quote: 'Design should never say, \'Look at me.\' It should always say, \'Look at this.\'',
      author: 'David Craib'
    },
    {
      quote: 'Good web design is about the character of the content, not the character of the designer.',
      author: 'Jeffrey Zeldman'
    },
    {
      quote: 'Good design is about effective communication, not decoration at the expense of legibility.',
      author: 'Vitaly Friedman'
    },
    {
      quote: 'If we want users to like our software, we should design it to behave like a likeable person.',
      author: 'Alan Cooper'
    },
    {
      quote: 'Good designers want to be proved wrong, bad designers hope to be proved right.',
      author: 'Andy Budd'
    },
    {
      quote: 'The ability to simplify means to eliminate the unnecessary so that the necessary may speak.',
      author: 'Hans Hofmann'
    },
    {
      quote: 'Simple is hard. Easy is harder. Invisible is hardest.',
      author: 'Jean-Louis Gassée'
    },
    {
      quote: 'As far as the customer is concerned, the interface is the product.',
      author: 'Jef Raskin'
    },
    {
      quote: 'A lot of what we are doing is getting design out of the way.',
      author: 'Jonathan Ive'
    },
    {
      quote: 'It\'s art if can\'t be explained. It\'s fashion if no one asks for an explanation.',
      author: 'unknown'
    },
    {
      quote: 'It\'s design if it doesn\'t need explanation.',
      author: 'Wouter Stokkel'
    },
    {
      quote: 'Simple design, intense content.',
      author: 'Edward Tufte'
    },
    {
      quote: 'The letter I have written today is longer than usual because I lacked the time to make it shorter',
      author: 'Blaise Pascal'
    },
    {
      quote: 'If there\'s a \'trick\' to it, the UI is broken',
      author: 'Douglas Anderson'
    },
    {
      quote: 'Know the user, and You are not the user.',
      author: 'unknown'
    },
    {
      quote: 'Usability is like oxygen, you don\'t notice it until it\'s missing',
      author: 'unknown'
    }
  ]
</script>

<style lang='scss'>
  // ALL QUOTES ########################

  .arrowBtn {
    @apply text-white;
    @apply font-bold;
    @apply select-none;

    &:hover {
      @apply text-[yellow];
      @apply cursor-pointer;
    }
  }

  .quoteBlock {
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply pt-3 px-4 pb-2;
    @apply text-center;
    @apply m-auto;
    @apply w-full;
    @apply basis-auto;
    @apply min-w-full;
    @apply min-h-[5rem];
    @apply leading-normal;
    @apply text-[0.9rem];
    @apply gap-2;

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply clear-both;
      @apply my-2;
      @apply gap-y-0;
      @apply text-[0.8rem];
      @apply gap-1;
    }

    p,
    cite {
      @apply not-italic;
      @apply inline;
      @apply leading-normal;
    }

    cite {
      @apply break-keep;
      @apply whitespace-nowrap;
    }

    .quotePad {
      @apply p-0;
      @apply leading-4;
      @apply m-auto;
      @apply select-none;
    }
  }

  // ####################################
  // ####################################

  // MODERN ########################
  .modern .quoteBlock {
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    @apply text-[hsl(0,0%,80%)];

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    }

    .cite {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    }
  }

  // BOURBON ########################
  .bourbon .quoteBlock {
    font-family: "AmericanTypewriterStd-Med";
    @apply bg-[#932213];
    @apply rounded-sm;
    @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      @apply clear-both;
      @apply mt-2;
      @apply mb-2;
      @apply gap-y-0;
    }

    .quotePad {
      @apply text-center;
    }

    .quotePad a {
      @apply text-white;
      @apply cursor-pointer;

      &:hover {
        @apply text-[yellow];
      }
    }

    p {
      @apply text-[0.9em];
      color: $ivory !important;
      @apply tracking-wider;
      @apply leading-[1.5em];
      @apply text-center;
      animation: fadeTexter 2s forwards;

      @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
        @apply text-[0.9em];
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
        @apply text-[0.9em];
      }

    }

    // GROOVY ########################
    .groovy .quoteBlock {
      p {
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      }

      .cite {
        font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
      }
    }
  }

  // GROOVY ########################
  .groovy .quoteBlock {
    font-family: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    @apply bg-[#932213];
    @apply pt-[0.75em] px-[2em] pb-[1em];
    @include shadow;
    @apply text-center;

  }

  // TECHY ########################
  .techy .quoteBlock {
    // @apply font-['Dosis,Helvetica,Arial,sans-serif'];
    font-family: 'Dosis, "Helvetica Neue", Arial, sans-serif' !important;
    background: $mango;
    @apply p-4;
    @apply min-h-min;

    .arrowBtn {
      color: $blueTech;
      @apply pt-0 px-2 pb-[0.2rem];
      border: 1px solid $blueTech;
      @apply leading-[1.3];

      &:hover {
        color: $mango;
        background: $blueTech;
      }
    }

    p {
      @apply text-[1em];
      color: $blueTech;
      @apply text-center;
      @apply tracking-wide;
      font-family: 'Dosis, "Helvetica Neue", Arial, sans-serif' !important;

      @media (max-width: $breakThou) {
        @apply text-[1.25em];
      }

      @media (max-width: $breakOne) {
        @apply text-[1.2em];
      }

      @media (max-width: $breakTwo) {
        @apply text-[1em];
      }

      @media (max-width: $breakThree) {
        @apply text-[.85em];
        @apply leading-5;
      }
    }

    .cite {
      @apply inline;
      color: $blueTech;
      @apply tracking-[.08em];
    }
  }

  // CORP ########################
  .corp .quoteBlock {
    font-family: "Bodoni Moda", Times, serif !important;
    @apply bg-[#01487F];
    @apply py-3 px-3;
    @apply text-center;
    @apply text-white;
    @apply min-h-min;

    .arrowBtn {
      @apply text-white;
      @apply py-0 px-1;
      @apply font-bold;

      &:hover {
        color: $mango;
        @apply bg-[#00355d];
      }
    }

    .arrowBtn:nth-child(1)::after {
      //

      &:hover {
        content: '<';
      }
    }

    .arrowBtn:nth-child(3)::after {
      //

      &:hover {
        content: '>';
      }
    }

    p {
      font-family: "Bodoni Moda", Times, serif !important;
    }

    .cite {
      font-family: "Bodoni Moda", Times, serif !important;
    }
  }

  // PUNK ########################
  .punk .quoteBlock {
    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    }

    .cite {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    }
  }

  // ZOOM ANIMATION ########################
  .zoomQuote-enter-active,
  .zoomQuote-leave-active {
    transition: transform 300ms ease;
  }

  .zoomQuote-enter-from,
  .zoomQuote-leave-to {
    transform: scale(0.9);
    transform: translateX(-20px);
    transition: all 1s ease-out;
    @apply opacity-0;
  }

  .fadeTexter-enter,
  .fadeTexter-enter-active {
    transition: all 1s ease-out;
    @apply opacity-100;
  }

  .fadeTexter-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
    @apply opacity-100;
  }

  .fadeTexter-enter-from,
  .fadeTexter-leave-to {
    transform: translateX(20px);
    transition: all 1s ease-out;
    @apply opacity-0;
  }

  .quoteFade-enter-active,
  .quoteFade-leave-active {
    transition: opacity 1s;
  }

  .quoteFade-enter,
  .quoteFade-leave-to {
    @apply opacity-0;
  }
</style>
