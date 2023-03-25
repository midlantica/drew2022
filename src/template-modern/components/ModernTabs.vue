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
    // margin: 0.75rem 0 0.5rem;
    margin: 1.25rem 0 1.5rem;
    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-center;
    // @apply justify-between;
    // justify-content: space-evenly;
    // justify-content: space-around;
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;

    a {
      color: $black;
      margin: 0.5rem 0.5rem;
      padding: 0.55rem 1rem 0.4rem;
      // border: 1px solid $ruby !important;
      border-radius: 2rem;
      text-decoration: none !important;
      @apply uppercase;
      font-size: 0.6rem;
      font-weight: 600;
      letter-spacing: 0.075ch;
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
