<template>
  <svg id="svgSketch" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Sketch</title>
    <g class="groupSketch1" transform="translate(-21.000000, -112.000000)">
      <g transform="translate(43.156320, 122.000000)">
        <polygon id="Polygon" fill="#FFAE00"
          points="22 37.8 0.988962058 13.6474326 10.097166 1.26845638 22 0 33.902834 1.26845638 43.0106278 13.6474326">
        </polygon>
        <polygon id="Polygon" fill="#EC6C00" points="22 37.8 1 13.65 43 13.65"></polygon>
        <polygon id="Polygon" fill="#FFAE00" points="22 37.8 9.4 13.65 34.6 13.65"></polygon>
        <polygon id="Polygon" fill="#FFEFB4" points="22 0 9.4 13.65 34.6 13.65"></polygon>
        <polygon id="Polygon" fill="#FED305" points="10 1.2796875 9.4 13.65 22 2.95585778e-12"></polygon>
        <polygon id="Polygon" fill="#FED305" points="34 1.2796875 34.6 13.65 22 0"></polygon>

      </g>
    </g>

    <g class="groupSketch2" transform="translate(-21.000000, 112.000000)">
      <g transform="translate(43.156320, 122.000000)">
        <polygon id="Polygon" fill="#FFAE00"
          points="22 37.8 0.988962058 13.6474326 10.097166 1.26845638 22 0 33.902834 1.26845638 43.0106278 13.6474326">
        </polygon>
        <polygon id="Polygon" fill="#EC6C00" points="22 37.8 1 13.65 43 13.65"></polygon>
        <polygon id="Polygon" fill="#FFAE00" points="22 37.8 9.4 13.65 34.6 13.65"></polygon>
        <polygon id="Polygon" fill="#FFEFB4" points="22 0 9.4 13.65 34.6 13.65"></polygon>
        <polygon id="Polygon" fill="#FED305" points="10 1.2796875 9.4 13.65 22 2.95585778e-12"></polygon>
        <polygon id="Polygon" fill="#FED305" points="34 1.2796875 34.6 13.65 22 0"></polygon>

      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg:hover {
  cursor: grab;
}

#svgSketch:hover .groupSketch1 {
  animation: cycleAni1 0.75s alternate;
  //animation-iteration-count: 2;
}

#svgSketch .groupSketch2 {
  transform: translate(-21px, -112px);

}

#svgSketch:hover .groupSketch2 {
  animation: cycleAni2 0.75s alternate;
  //animation-iteration-count: 2;
}


@keyframes cycleAni1 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    //transform: scale(1.2);
  }

  100% {
    transform: translate(-21px, 112px);
    opacity: 0;
  }
}

@keyframes cycleAni2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
    //transform: scale(1);
  }

  100% {
    transform: translate(-21px, -112px);
    opacity: 1;
  }
}
</style>
