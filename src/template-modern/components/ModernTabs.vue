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
    @apply mt-7 mx-0 mb-2;
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-center;
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;

    a {
      color: $black;
      @apply my-2 mx-2;
      @apply pt-[.55rem] px-4 pb-[.4rem];
      @apply rounded-[2rem];
      @apply no-underline;
      @apply uppercase;
      @apply text-[.6rem];
      @apply font-semibold;
      @apply tracking-[0.075ch];
      background: $ruby;
      background: linear-gradient(180deg, darken($ruby, 0), darken($ruby, 15));

      &:hover {
        color: $white;
        background: $ruby;
        background: linear-gradient(0deg, darken($ruby, 0), darken($ruby, 15));
      }
    }
  }
</style>
