<template>
  <svg class="xOut" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.0918 11.3934L21.0918 1.39339M11.0918 11.3934L21.0918 21.3934M11.0918 11.3934L1.0918 21.3934M11.0918 11.3934L1.0918 1.39339"
      stroke="black" stroke-width="2" stroke-linecap="round" />
  </svg>
</template>

<style lang="scss" scoped>
svg.xOut {
  width: 20px !important;
  height: auto !important;
  margin: auto !important;

  path {
    // stroke: red;
    stroke: hsla(0, 0%, 0%, .5);
  }

  &:hover {
    cursor: pointer;

    path {
      // stroke: green;
      stroke: hsla(0, 0%, 0%, 1);
    }
  }
}
</style>
