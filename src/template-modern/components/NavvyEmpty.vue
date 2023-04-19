<template>
  <nav />
</template>

<style lang='scss' scoped>
  @import '../assets/css/modern-main.scss';

  nav {
    @apply flex flex-row flex-wrap justify-between items-center py-2 px-5;

    @media (max-width: 840px) {
      @apply justify-center;
    }
  }
</style>
