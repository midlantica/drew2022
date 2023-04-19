<template>
  <div>
    <p>"Everything should be made as simple as possible, but not simpler." &ndash; Albert&nbsp;Einstein</p>
  </div>
</template>

<style lang='scss' scoped>
  @import '../assets/css/techy-main.scss';

  div {
    @apply bg-techy-mango;

    p {
      @apply text-[1.2em] text-center tracking-wide p-2 text-techy-blueTech;

      @media (max-width: theme("screens.breakXlg")) {
        @apply text-[1.25em];
      }

      @media (max-width: theme("screens.breakLg")) {
        @apply text-[1.2em];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply text-[1em];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply text-[.85em] leading-5;
      }
    }
  }
</style>
