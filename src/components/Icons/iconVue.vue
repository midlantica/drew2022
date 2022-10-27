<template>
  <svg id="svgVue" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Vue.js</title>
    <g class="groupVue">
      <path class="darkGreen" d="M38.983 10.5H31l12.85 23L57 10.5h-7.737l-5.14 9.094z" />
      <path class="lightGreen" d="M31.123 10.5H23l21 37 21-37h-8.402L43.861 32.943z" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
// @import '~/assets/css/_colors.scss';

svg {
  // width: 88px;
  // height: 60px;
}

svg:hover {
  cursor: pointer;
}

#svgVue {
  //

  &:hover .groupVue {
    animation: iconFlipXAni 2s ease-in-out infinite;
    transform-origin: 50% 50%;
    animation-delay: 1s;
  }
}

.groupVue {}

.lightGreen {
  fill: #40b883;
}

.darkGreen {
  fill: #34495e;
}

@keyframes iconFlipXAni {
  to {
    transform: rotateY(360deg);
  }
}
</style>
