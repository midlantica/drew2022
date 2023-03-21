<template>
  <div>
    <p>
      "Everything should be made as simple as possible, but not simpler." &ndash;
      Albert&nbsp;Einstein
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/techy-main.scss";

div {
  // height: 3em;
  background: $mango;

  p {
    font-size: 1.2em;
    color: $blueTech;
    text-align: center;
    padding: 0.5em;
    letter-spacing: 0.02em;

    @media (max-width: $breakThou) {
      font-size: 1.25em;
    }

    @media (max-width: $breakOne) {
      font-size: 1.2em;
    }

    @media (max-width: $breakTwo) {
      font-size: 1em;
    }

    @media (max-width: $breakThree) {
      font-size: 0.85em;
      line-height: 1.25em;
    }
  }
}
</style>
