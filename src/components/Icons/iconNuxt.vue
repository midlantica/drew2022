<template>
  <svg id="svgNuxt" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <!-- <title>Nuxt JS</title>
    <g class="groupNuxt">
      <path class="lightGreen" fill-rule="evenodd" clip-rule="evenodd"
        d="M22.1937 45.4945C21.8531 46.1187 22.3049 46.8798 23.016 46.8798H60.2592L41.6709 12.8063C41.3158 12.1555 40.3813 12.1555 40.0263 12.8063L22.1937 45.4945Z" />
      <path class="midGreen" fill-rule="evenodd" clip-rule="evenodd"
        d="M34.184 46.8798H65.258C65.969 46.8798 66.4208 46.1187 66.0803 45.4945L51.3323 18.4606C50.9773 17.8098 50.0428 17.8098 49.6877 18.4606L34.184 46.8798Z" />
      <path class="darkGreen" fill-rule="evenodd" clip-rule="evenodd"
        d="M47.2216 22.9811L60.2593 46.8799L34.184 46.8798L47.2216 22.9811Z" />
    </g>
  </svg> -->
    <!--

  <svg id="svgNuxt" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg"> -->
    <title>Nuxt JS</title>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M41.833 13.9399C40.2963 11.3264 36.4543 11.3263 34.9175 13.9399L18.169 42.4236C16.6322 45.0371 18.5532 48.3041 21.6267 48.3041H34.7016C33.3882 47.1688 32.9019 45.2048 33.8957 43.5198L46.5803 22.0135L41.833 13.9399Z"
      fill="#80EEC0" />
    <path
      d="M52.4398 20.6218C53.7419 18.5164 56.997 18.5164 58.299 20.6218L72.4891 43.567C73.7914 45.6723 72.1639 48.304 69.5599 48.304H41.1791C38.5751 48.304 36.9475 45.6723 38.2495 43.567L52.4398 20.6218Z"
      fill="#00DC82" />
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

#svgNuxt {

  //
  &:hover .lightGreen {
    fill: red;
  }
}

.lightGreen {
  fill: #00C58E;
}

.midGreen {
  fill: #108775;
}

.darkGreen {
  fill: #2F495E;
}
</style>
