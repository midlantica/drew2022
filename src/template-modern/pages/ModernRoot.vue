<template>
  <transition name="fade" appear>
    <div class="flex flex-col items-center">
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

</style>
