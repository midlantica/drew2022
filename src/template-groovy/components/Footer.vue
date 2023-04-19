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

  // 1024px: 1024px // 840px: 840px  // 630px: 630px  // 430px: 530px

  footer {
    @apply relative text-base-ivory h-[160px] bg-[linear-gradient(180deg,_#6cebe4_0%,_#6cebe4_25%,_#fece00_0,_#fece00_50%,_#e68f00_50%,_#e68f00_75%,_#e60008_0,_#e60008_100%)];

    @media (max-width: theme("screens.breakThou")) {
      //
    }

    @media (max-width: theme("screens.breakOne")) {
      //
    }

    @media (max-width: theme("screens.breakTwo")) {
      //
    }

    @media (max-width: theme("screens.breakThree")) {
      //
    }

    .car {
      @apply bg-no-repeat bg-cover block absolute top-[-.3rem] left-2 w-[226px] h-[165px] bg-[url('/img/alfa-carabo.png')];

      @media (max-width: theme("screens.breakThree")) {
        @apply w-[165px] h-[135px] top-4 -left-4;
      }

      // IPHONE 6,7,8
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
        @apply w-[186px] h-[135px] top-4 -left-4;
      }
    }

    .starWars {
      @apply bg-no-repeat bg-cover block absolute top-[-17px] right-0 w-[148px] h-[177px] bg-[url('/img/star-wars-transfers.png')];

      @media (max-width: theme("screens.breakThree")) {
        @apply w-[120px] h-[177px];
      }

    }
  }
</style>
