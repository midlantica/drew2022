<template>
  <div class='quoteBlock' v-if="currentQuote">
    <div @click="previousQuote()" class="arrowBtn">&lt;</div>
    <transition name='quoteFade'>
      <div class='quotePad'>
        <p>&ldquo;{{ currentQuote.quote }}&rdquo; <cite>&ndash; {{ currentQuote.author }}</cite></p>
      </div>
    </transition>
    <div @click="nextQuote()" class="arrowBtn">&gt;</div>
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
      quote: `A user experience is like a joke: if you have to explain it, it's not that good`,
      author: `Martin LeBlanc`
    },
    {
      quote: `Everything should be made as simple as possible, but not simpler.`,
      author: `Albert Einstein`
    },
    {
      quote: `The answer to life is knowing when to stop`,
      author: `My Mom, when I was a kid :)`
    },
    {
      quote: `If you can't explain it simply, you don't understand it well enough.`,
      author: `Albert Einstein`
    },
    {
      quote: `It is vain to do with more what can be done with fewer`,
      author: `William of Occam`
    },
    {
      quote: `Design is not just what it looks like and feels like. Design is how it works`,
      author: `Steve Jobs, 2003`
    },
    {
      quote: `A picture is worth a thousand words. An interface is worth a thousand pictures`,
      author: `Ben Shneiderman`
    },
    {
      quote: `We do not see things as they are; we see things as we are`,
      author: `The Talmud`
    },
    {
      quote: `Measure twice, cut once`,
      author: `unknown`
    },
    {
      quote: `You can use an eraser on the drafting table or a sledge hammer on the construction site.`,
      author: `Frank Lloyd Wright`
    },
    {
      quote: `Design should never say, 'Look at me.' It should always say, 'Look at this.'`,
      author: `David Craib`
    },
    {
      quote: `Good web design is about the character of the content, not the character of the designer.`,
      author: `Jeffrey Zeldman`
    },
    {
      quote: `Good design is about effective communication, not decoration at the expense of legibility.`,
      author: `Vitaly Friedman`
    },
    {
      quote: `If we want users to like our software, we should design it to behave like a likeable person.`,
      author: `Alan Cooper`
    },
    {
      quote: `Good designers want to be proved wrong, bad designers hope to be proved right.`,
      author: `Andy Budd`
    },
    {
      quote: `The ability to simplify means to eliminate the unnecessary so that the necessary may speak.`,
      author: `Hans Hofmann`
    },
    {
      quote: `Simple is hard. Easy is harder. Invisible is hardest.`,
      author: `Jean-Louis Gassée`
    },
    {
      quote: `As far as the customer is concerned, the interface is the product.`,
      author: `Jef Raskin`
    },
    {
      quote: `A lot of what we are doing is getting design out of the way.`,
      author: `Jonathan Ive`
    },
    {
      quote: `It's art if can't be explained. It's fashion if no one asks for an explanation.`,
      author: `unknown`,
    },
    {
      quote: `It's design if it doesn't need explanation.`,
      author: `Wouter Stokkel`
    },
    {
      quote: `Simple design, intense content.`,
      author: `Edward Tufte`
    },
    {
      quote: `The letter I have written today is longer than usual because I lacked the time to make it shorter`,
      author: `Blaise Pascal`
    },
    {
      quote: `If there's a 'trick' to it, the UI is broken`,
      author: `Douglas Anderson`
    },
    {
      quote: `Know the user, and You are not the user.`,
      author: `unknown`
    },
    {
      quote: `Usability is like oxygen, you don't notice it until it's missing`,
      author: `unknown`
    },
  ]
</script>

<style lang='scss'>
// ALL QUOTES ########################

.arrowBtn {
  color: white;
  font-weight: bold;
  // padding: 0.25rem 0.5rem 0.35rem;
  // border-radius: .25rem;
  // background: hsla(0, 0%, 0%, 0.25);
  // line-height: 1 !important;
  user-select: none;

  &:hover {
    color: yellow;
    cursor: pointer;
    // background: hsla(0, 0%, 0%, 0.5);
    // display: block;
  }

}

.quoteBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75em 1rem .5em;
  text-align: center;
  // border-radius: 2px;
  margin: auto;
  width: 100% !important;
  flex-basis: auto;
  min-width: 100%;
  min-height: 5rem;
  line-height: 1.5;
  font-size: .9rem;
  gap: .5rem;
  // padding: 1rem 2rem;
  // min-height: 5.5rem;

  @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
    clear: both;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    grid-row-gap: 0em;
    font-size: .8rem;
    gap: .25rem;
  }


  p,
  cite {
    font-style: normal;
    display: inline !important;
    line-height: 1.5;
  }

  cite {
    word-break: keep-all;
    white-space: nowrap;
  }

  .quotePad {
    padding: 0;
    line-height: 1;
    margin: auto;
    user-select: none;
  }
}

// ####################################
// ####################################

// MODERN ########################
.modern .quoteBlock {
  font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
  color: hsl(0, 0%, 80%);

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
  background: darken($accent-red, 10);
  border-radius: 2px;
  // min-height: 5.5rem;
  @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

  @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
    clear: both;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    grid-row-gap: 0em;
  }

  .quotePad {
    text-align: center !important;
    // color: white;
  }

  .quotePad a {
    color: white !important;
    cursor: pointer;

    &:hover {
      color: yellow !important;
    }
  }

  p {
    font-size: 0.9em;
    color: $ivory !important;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    text-align: center;
    //
    animation: fadeTexter 2s forwards;


    @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
      font-size: 0.9em;
    }

    @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
      font-size: 0.9em;
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
  background: darken($accent-red, 10);
  padding: .75em 2em 1em;
  @include shadow;
  text-align: center;

}

// TECHY ########################
.techy .quoteBlock {
  font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
  background: $mango;
  padding: 1rem !important;
  min-height: initial;
  // padding: .75em 2em 1em;

  .arrowBtn {
    color: $blueTech;
    padding: 0rem 0.5rem 0.2rem;
    border: 1px solid $blueTech;
    line-height: 1.3;


    &:hover {
      color: $mango;
      background: $blueTech;
    }
  }

  p {
    font-size: 1em;
    color: $blueTech;
    text-align: center;
    padding: .4rem auto .5rem;
    letter-spacing: 0.02em;

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

  .cite {
    display: inline !important;
    color: $blueTech;
    letter-spacing: .08em;
  }
}

// CORP ########################
.corp .quoteBlock {
  font-family: "Bodoni Moda", Times, serif !important;
  // background: #FFC600;
  padding: 1rem !important;
  background: #01487F;
  padding: 1em 0em 1rem;
  text-align: center;
  color: white;
  min-height: initial;

  .arrowBtn {
    color: white;
    padding: 0rem 0.5rem .1rem;
    // border: 1px solid white;
    font-weight: bold !important;

    &:hover {
      color: $mango;
      background: #00355d;
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
  opacity: 0;
}

.fadeTexter-enter,
.fadeTexter-enter-active {
  transition: all 1s ease-out;
  opacity: 1;
}

.fadeTexter-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 1;
}

.fadeTexter-enter-from,
.fadeTexter-leave-to {
  transform: translateX(20px);
  transition: all 1s ease-out;
  opacity: 0;
}

.quoteFade-enter-active,
.quoteFade-leave-active {
  transition: opacity 1s;
}

.quoteFade-enter,
.quoteFade-leave-to {
  opacity: 0;
}
</style>
