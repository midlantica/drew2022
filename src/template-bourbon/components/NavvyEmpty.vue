<template>
  <nav />
</template>

<style lang='scss' scoped>
  @import "../assets/css/bourbon-main.scss";

  nav {
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-between;
    @apply items-center;
    @apply my-2 mx-5;

    @media (max-width: $breakOne) {
      @apply justify-center;
    }
  }
</style>
