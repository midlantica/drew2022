<template>
  <nav />
</template>

<style lang='scss' scoped>
  @import "../assets/css/bourbon-main.scss";
  // @import '../assets/css/bourbon-main.scss';

  nav {
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-between;
    @apply items-center;
    padding: 0.5em 1.25em;

    @media (max-width: $breakOne) {
      @apply justify-center;
    }
  }
</style>
