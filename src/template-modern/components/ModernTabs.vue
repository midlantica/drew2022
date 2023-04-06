<template>
  <div class="modernTabs">
    <router-link to="/Modern/Projects" class="projectsTab">
      Projects
    </router-link>
    <router-link to="/Modern/Skills" class="skillsTab">
      Skills
    </router-link>
    <router-link to="/Modern/About" class="aboutTab">
      About
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import "../assets/css/modern-main.scss";

  body.modern.projects a.projectsTab,
  body.modern.skills a.skillsTab,
  body.modern.about a.aboutTab {
    @apply text-white;
  }

  .modernTabs {
    @apply font-modernCopy mt-7 mx-0 mb-3 flex flex-row flex-wrap justify-center;

    a {
      @apply text-black my-2 mx-2 pt-[.55rem] px-4 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby;
      background: linear-gradient(180deg, darken(#D71D5B, 0), darken(#D71D5B, 15));

      &:hover {
        @apply bg-modern-ruby text-white;
        background: linear-gradient(0deg, darken(#D71D5B, 0), darken(#D71D5B, 15));
      }
    }
  }
</style>
