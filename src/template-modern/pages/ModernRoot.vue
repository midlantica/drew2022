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
  }

  .mainGrid {
    @apply w-[90%] grid grid-cols-1 gap-y-2 gap-x-0;

    @media (max-width: theme("screens.breakXlg")) {
      //
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply w-[90%] m-0;
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }
  }

  .slides {
    @apply content-center w-full justify-self-center max-w-[500px] col-start-1 col-end-1 row-start-1 row-end-1;

    @media (max-width: theme("screens.breakXlg")) {
      //
    }

    @media (max-width: theme("screens.breakLg")) {
      //
    }

    @media (max-width: theme("screens.breakSm")) {
      //
    }
  }

  .skillsGrid {
    @apply grid-cols-[repeat(6,_minmax(88px,_1fr))] col-start-1 col-end-2 row-start-2 row-end-4 justify-center justify-items-center w-[35vw];

    @media (max-width: theme("screens.breakXlg")) {
      @apply grid-cols-[repeat(4,_minmax(88px,_1fr))] w-[70vw] row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-start-2 row-end-2;
    }
  }
</style>
