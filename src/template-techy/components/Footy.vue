<template>
  <div>
    <p>"Everything should be made as simple as possible, but not simpler." &ndash; Albert&nbsp;Einstein</p>
  </div>
</template>

<style lang='scss' scoped>
  @import '../assets/css/techy-main.scss';

  div {
    // height: 3em;
    background: $mango;

    p {
      @apply text-[1.2em];
      color: $blueTech;
      @apply text-center;
      padding: .5em;
      @apply tracking-wide;

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
        line-height: 1.25em;
      }
    }
  }
</style>
