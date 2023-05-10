<template>
  <div class="flex flex-row flex-wrap justify-center gap-4 mx-0 mb-3 font-modernCopy mt-7">
    <router-link
      to="/Modern/Projects" class="text-black pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239] hover:bg-modern-ruby hover:text-white hover:bg-gradient-to-b hover:from-[#D71D5B] hover:to-[#871239]"
    >
      Projects
    </router-link>
    <router-link
      to="/Modern/Skills" class="text-black pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239] hover:bg-modern-ruby hover:text-white hover:bg-gradient-to-b hover:from-[#D71D5B] hover:to-[#871239]"
    >
      Skills
    </router-link>
    <router-link
      to="/Modern/About" class="text-black pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239] hover:bg-modern-ruby hover:text-white hover:bg-gradient-to-b hover:from-[#D71D5B] hover:to-[#871239]"
    >
      About
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

  body.modern.projects a.projectsTab,
  body.modern.skills a.skillsTab,
  body.modern.about a.aboutTab {
    @apply text-white;
  }

  .modernTabs {
    // @apply font-modernCopy mt-7 mx-0 mb-3 flex flex-row flex-wrap justify-center;

    a {
      // @apply text-black my-2 mx-2 pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239];

      &:hover {
        @apply bg-modern-ruby text-white bg-gradient-to-b from-[#D71D5B] to-[#871239];
      }
    }
  }
</style>
