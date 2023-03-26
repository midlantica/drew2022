<template>
  <transition name="topDown" appear>
    <footer>
      <div class="car" />
      <div class="starWars" />
    </footer>
  </transition>
</template>

<style lang='scss' scoped>
  @import '../assets/css/groovy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  footer {
    @apply relative;
    height: 160px;
    color: $ivory;
    background: linear-gradient(
        /* 0 - 25% */
        $groovy-aqua 0%,
        $groovy-aqua 25%,
        /* 25% - 50% */
        $groovy-yellow 25%,
        $groovy-yellow 50%,
        /* 50% - 75% */
        $groovy-orange 50%,
        $groovy-orange 75%,
        /* 75% - 100% */
        $groovy-red 75%,
        $groovy-red 100%);

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }

    .car {
      background: url(/img/alfa-carabo.png);
      @apply bg-no-repeat;
      @apply bg-cover;
      width: 226px;
      height: 165px;
      @apply block;
      @apply absolute;
      top: -0.3em;
      left: 0.7em;

      @media (max-width: $breakThree) {
        width: 186px;
        height: 135px;
        top: 1em;
        left: -1em;
      }

      // IPHONE 6,7,8
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
        width: 186px;
        height: 135px;
        top: 1em;
        left: -1em;
      }
    }

    .starWars {
      background: url(/img/star-wars-transfers.png);
      @apply bg-no-repeat;
      @apply bg-cover;
      width: 148px;
      height: 177px;
      @apply block;
      @apply absolute;
      top: -17px;
      right: 0px;

      @media (max-width: $breakThree) {
        width: 120px;
        height: 177px;
      }

    }
  }
</style>
