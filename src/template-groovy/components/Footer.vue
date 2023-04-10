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

  // $breakThou: 1024px;
  // $breakOne: 840px;
  // $breakTwo: 630px;
  // $breakThree: 530px;

  footer {
    @apply relative text-base-ivory h-[160px];
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
      @apply bg-no-repeat bg-cover block absolute top-[-.3rem] left-[-1em] w-[226px] h-[165px] bg-['/img/alfa-carabo.png'];

      @media (max-width: $breakThree) {
        @apply w-[165px] h-[135px] top-4 -left-4;
      }

      // IPHONE 6,7,8
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
        @apply w-[186px] h-[135px] top-4 -left-4;
      }
    }

    .starWars {
      @apply bg-no-repeat bg-cover block absolute top-[-17px] right-0 w-[148px] h-[177px] bg-[url('/img/star-wars-transfers.png')];

      @media (max-width: $breakThree) {
        @apply w-[120px] h-[177px];
      }

    }
  }
</style>
