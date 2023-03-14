<template>
  <div class="tabs">
    <router-link :to="{ name: 'ModernProjects' }" class="modern">{{ store.copy.modern }}</router-link>
    <router-link :to="{ name: 'Bourbon' }" class="bourbon">{{ store.copy.bourbon }}</router-link>
    <router-link :to="{ name: 'Groovy' }" class="groovy">{{ store.copy.groovy }}</router-link>
    <router-link :to="{ name: 'Techy' }" class="techy">{{ store.copy.techy }}</router-link>
    <router-link :to="{ name: 'Corp' }" class="corp">{{ store.copy.corp }}</router-link>
    <router-link :to="{ name: 'Punk' }" class="punk">{{ store.copy.punk }}</router-link>
  </div>
</template>

<script lang="ts" setup>
  // import { defineComponent } from 'vue'

  import { inject } from "vue"

  const store: any = inject("store")
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap");

.tabs {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  text-align: center;
  font-size: 0.85em;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: calc(100.1%);
  // width: auto;
  font-family: "Barlow Semi Condensed";
  letter-spacing: 0em;
  overflow-x: hidden !important;
  background: #333;

  a {
    flex-grow: 1;
    color: transparentize($ivory, 0.25);
    padding: 0.65em 0;
    border-right: 1px solid transparentize($ivory, 0.75);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    &:last-child {
      border-right: 0px !important;
    }

    &:hover {
      color: transparentize($ivory, 0);
      transition: 0.2s ease-in;
    }
  }
}

body.modern .tabs a.modern {
  color: $ivory;
  // background: hsla(340, 76%, 48%, 1);
  background: linear-gradient(hsla(340, 76%, 48%, 1), hsl(340, 76%, 30%));
  text-shadow: 0px 0px 1px black;
  // box-shadow: 0px -2px 6px black inset;
}

body.bourbon .tabs>a.bourbon {
  color: $ivory;
  // background: darken($orange, 30);
  background: linear-gradient(darken($orange, 10), darken($orange, 25));
  text-shadow: 0px 0px 1px black;
  // box-shadow: 0px -2px 6px black inset;
}

body.groovy .tabs>a.groovy {
  // color: transparentize($ivory, 0);
  color: $black;
  text-shadow: 0px 0px 1px hsla(0, 0%, 0%, 0.25);
  // box-shadow: 0px -2px 6px black inset;
  // background: darken(#ff3940, 30);
  background: linear-gradient($groovy-aqua-dk 0%,
      $groovy-aqua-dk 20%,
      $groovy-yellow-dk 20%,
      $groovy-yellow-dk 50%,
      $groovy-orange-dk 50%,
      $groovy-orange-dk 75%,
      $groovy-red-dk 75%,
      $groovy-red-dk 100%);

  &:hover {
    color: $black;
    text-shadow: 0px 0px 1px black;
    // border-bottom: 1px solid $ivory;
    background: linear-gradient($groovy-aqua 0%,
        $groovy-aqua 20%,
        $groovy-yellow 20%,
        $groovy-yellow 50%,
        $groovy-orange 50%,
        $groovy-orange 75%,
        $groovy-red 75%,
        $groovy-red 90% black 90% black 100%);
  }

}

body.techy .tabs>a.techy {
  color: transparentize($ivory, 0.1);
  // background: darken(#02528a, 10);
  background: linear-gradient(darken(#423BA0, 00), darken(#423BA0, 15));
  text-shadow: 0px 0px 1px black;
  // box-shadow: 0px -2px 6px black inset;
}

body.corp .tabs>a.corp {
  color: transparentize($ivory, 0.1);
  // background: darken(#02528a, 0);
  background: linear-gradient(darken(hsl(205, 97%, 27%), 0), darken(hsl(205, 97%, 27%), 10));
  text-shadow: 0px 0px 1px black;
  // box-shadow: 0px -2px 6px black inset;
}

body.punk .tabs>a.punk {
  color: transparentize($ivory, 0.1);
  background: hsla(0, 100%, 50%, 0.85);
  background: linear-gradient(hsl(303, 100%, 35%), hsl(303, 100%, 20%));
  // box-shadow: 0px -2px 6px black inset;
  // filter: saturate(40) opacity(0.7);
}

body .tabs {

  //
  >a.modern {
    background: $grey;
    text-shadow: 0px 0px 1px black;

    &:hover {
      background: #d71d5b;
    }
  }

  >a.bourbon {
    background: #333;
    text-shadow: 0px 0px 1px black;

    &:hover {
      background: darken($orange, 30);
    }
  }

  >a.groovy {
    background: #333;

    &:hover {
      color: $black;
      // background: darken(#ff3940, 30);
      background: linear-gradient( // 0 - 10%
          $groovy-aqua-dk 0%,
          $groovy-aqua-dk 20%,
          // 10% - 50%
          $groovy-yellow-dk 20%,
          $groovy-yellow-dk 50%,
          // 50% - 75%
          $groovy-orange-dk 50%,
          $groovy-orange-dk 75%,
          // 75% - 100%
          $groovy-red-dk 75%,
          $groovy-red-dk 100%);
    }
  }

  >a.techy {
    background: #333;
    text-shadow: 0px 0px 1px black;

    &:hover {
      background: darken(#02528a, 10);
    }
  }

  >a.corp {
    background: #333;
    text-shadow: 0px 0px 1px black;

    &:hover {
      background: darken(#02528a, 0);
    }
  }

  >a.punk {
    background: #333;
    text-shadow: 0px 0px 1px black;

    &:hover {
      background: darken(#ff4bf5, 30);
    }
  }
}
</style>
