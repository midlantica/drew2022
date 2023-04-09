<template>
  <transition name="fade" appear class="modBacker">
    <div>
      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <ModernTabs />
      </transition>

      <transition name="bounce3" appear>
        <main class="mainGrid">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </main>
      </transition>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy.vue'
  import ModernTabs from '../components/ModernTabs.vue'
</script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

  .modBacker {
    @apply flex flex-col items-center;

    @media (max-width: 900px) {
      //
    }

    @media (max-width: 600px) {
      //
    }

    @media (max-width: 300px) {
      //
    }
  }

  .mainGrid {
    @apply grid gap-y-2 gap-x-0 w-[90%];
    grid-template-columns: 1fr;

    @media (max-width: $breakThou) {}

    @media (max-width: $breakOne) {
      @apply w-[90%] m-0;
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .slides {
    grid-column: 1;
    grid-row: 1;
    @apply content-center w-full justify-self-center max-w-[500px];

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    grid-template-columns: repeat(6, minmax(88px, 1fr)) !important;
    width: initial !important;
    @apply justify-center justify-items-center w-[35vw];

    @media (max-width: 300000000rem) {
      grid-row: 2;
      grid-template-columns: repeat(4, minmax(88px, 1fr)) !important;
      @apply w-[70vw];
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }
</style>
