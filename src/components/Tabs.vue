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
    @apply font-['Barlow_Semi_Condensed'] flex flex-row flex-nowrap justify-between items-start content-center text-center text-[0.85em] relative top-0 left-0 z-10 w-[100.1%] tracking-normal overflow-x-hidden bg-[#333];

    a {
      @apply grow text-[#fffdf4bf] py-2 px-0 border-r border-[#fffdf440] no-underline uppercase tracking-[0.1em] text-[0.8em];

      &:last-child {
        @apply border-r-0;
      }

      &:hover {
        @apply text-[#fffdf4] duration-200 ease-in;
      }
    }
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
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[#6f170f];
      }
    }

    >a.groovy {
      @apply bg-[#333];

      &:hover {
        color: $black;
        background: linear-gradient(
            /* // 0 - 10% */
            $groovy-aqua-dk 0%,
            $groovy-aqua-dk 20%,
            /* // 10% - 50% */
            $groovy-yellow-dk 20%,
            $groovy-yellow-dk 50%,
            /* // 50% - 75% */
            $groovy-orange-dk 50%,
            $groovy-orange-dk 75%,
            /* // 75% - 100% */
            $groovy-red-dk 75%,
            $groovy-red-dk 100%);
        // @apply bg-gradient-to-b
        //   /* // 0 - 10% */
        //   from-[#6cebe4]
        //   via-[#6cebe4]
        //   /* // 0 - 10% */
        //   via-[#fece00]
        //   via-[#fece00]
        //   /* // 0 - 10% */
        //   via-[#e68f00]
        //   via-[#e68f00]
        //   /* // 0 - 10% */
        //   via-[#e60008]
        //   to-[#e60008];
      }
    }

    >a.techy {
      @apply bg-[rgb(51,51,51)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[rgb(1,50,86)];
      }
    }

    >a.corp {
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(205,97%,27%)];
      }
    }

    >a.punk {
      @apply bg-[hsl(0,0%,20%)] drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];

      &:hover {
        @apply bg-[hsl(303,100%,35%)];
      }
    }
  }

  body.modern .tabs a.modern {
    @apply drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] text-base-ivory bg-gradient-to-b from-[#D71D5B] to-[#871239];
  }

  body.bourbon .tabs>a.bourbon {
    @apply text-base-ivory drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#c8291c] to-[#851c12];
  }

  body.groovy .tabs>a.groovy {
    @apply text-base-black drop-shadow-[0px_0px_1px_rgba(0,0,0,0.25)];
    background: linear-gradient($groovy-aqua-dk 0%,
        $groovy-aqua-dk 20%,
        $groovy-yellow-dk 20%,
        $groovy-yellow-dk 50%,
        $groovy-orange-dk 50%,
        $groovy-orange-dk 75%,
        $groovy-red-dk 75%,
        $groovy-red-dk 100%);

    &:hover {
      @apply text-base-black drop-shadow-[0px_0px_1px_rgba(0,0,0,1)];
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
    @apply text-base-ivory/75  drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#423ba0] to-[#2b2668];
  }

  body.corp .tabs>a.corp {
    @apply text-base-ivory/75 drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] bg-gradient-to-b from-[#025088] to-[#013255];
  }

  body.punk .tabs>a.punk {
    @apply text-base-ivory/75 bg-gradient-to-b from-[#B200AA] to-[#660061];
  }

</style>
