<template>
  <div class="tabs">
    <router-link :to="{ name: 'ModernProjects' }" class="modern">
      {{ store.copy.modern }}
    </router-link>
    <router-link :to="{ name: 'Bourbon' }" class="bourbon">
      {{ store.copy.bourbon }}
    </router-link>
    <router-link :to="{ name: 'Groovy' }" class="groovy">
      {{ store.copy.groovy }}
    </router-link>
    <router-link :to="{ name: 'Techy' }" class="techy">
      {{ store.copy.techy }}
    </router-link>
    <router-link :to="{ name: 'Corp' }" class="corp">
      {{ store.copy.corp }}
    </router-link>
    <router-link :to="{ name: 'Punk' }" class="punk">
      {{ store.copy.punk }}
    </router-link>
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap");

  .tabs {
    @apply font-['Barlow_Semi_Condensed'];
    @apply flex;
    @apply flex-row;
    @apply flex-nowrap;
    @apply justify-between;
    @apply items-start;
    @apply content-center;
    @apply text-center;
    @apply text-[0.85em];
    @apply relative;
    @apply top-0;
    @apply left-0;
    @apply z-10;
    @apply w-[100.1%];
    @apply tracking-normal;
    @apply overflow-x-hidden;
    @apply bg-[#333];

    a {
      @apply grow;
      @apply text-[#fffdf4bf];
      @apply py-2 px-0;
      @apply border-r border-[#fffdf440];
      @apply no-underline;
      @apply uppercase;
      @apply tracking-[0.1em];
      @apply text-[0.8em];

      &:last-child {
        @apply border-r-0;
      }

      &:hover {
        @apply text-[#fffdf4];
        @apply duration-200 ease-in;
      }
    }
  }

  body.modern .tabs a.modern {
    color: $ivory;
    background: linear-gradient(hsla(340, 76%, 48%, 1), hsl(340, 76%, 30%));
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
  }

  body.bourbon .tabs>a.bourbon {
    color: $ivory;
    background: linear-gradient(darken($orange, 10), darken($orange, 25));
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
  }

  body.groovy .tabs>a.groovy {
    color: $black;
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,0.25)];
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
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
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
    @apply text-[fffdf4e6];
    background: linear-gradient(darken(#423BA0, 00), darken(#423BA0, 15));
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
    // box-shadow: 0px -2px 6px black inset;
  }

  body.corp .tabs>a.corp {
    @apply text-[fffdf4e6];
    background: linear-gradient(darken(hsl(205, 97%, 27%), 0), darken(hsl(205, 97%, 27%), 10));
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
    // box-shadow: 0px -2px 6px black inset;
  }

  body.punk .tabs>a.punk {
    @apply text-[fffdf4e6];
    // background: #ff0000d9;
    // @apply bg-[hsla(0, 100%, 50%, 0.85)];
    background: linear-gradient(hsl(303, 100%, 35%), hsl(303, 100%, 20%));
  }

  body .tabs {
    //

    >a.modern {
      background: $grey;
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(340,76%,48%)];
      }
    }

    >a.bourbon {
      @apply bg-[hsl(0,0%,20%)];
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[#6f170f];
      }
    }

    >a.groovy {
      @apply bg-[#333];

      &:hover {
        color: $black;
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
      @apply bg-[rgb(51,51,51)];
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[rgb(1,50,86)];
      }
    }

    >a.corp {
      @apply bg-[hsl(0,0%,20%)];
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(205,97%,27%)];
      }
    }

    >a.punk {
      @apply bg-[hsl(0,0%,20%)];
      @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(303,100%,35%)];
      }
    }
  }
</style>
