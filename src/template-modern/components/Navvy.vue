<template>
  <nav class="flex flex-col items-center justify-center p-0 mt-14 flex-nowrap gap-y-4">
    <h1 class="font-modernSubhead text-[3.25rem] font-light tracking-[-0.05em] leading-10 transition ease-in duration-200 text-center antialiased w-auto grow drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] text-modern-accentRed hover:text-modern-accent lowercase">
      <router-link class="text-modern-accentRed" :to="{ name: 'ModernProjects' }">
        drew harper
      </router-link>
    </h1>

    <h2 class="text-[1.3rem] tracking-0 leading-[1.5em] font-modernCopy font-normal text-[hsla(0,0%,100%,0.85)] text-center lowercase antialiased drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
      {{ store.copy.uiuxDesigner }} / {{ store.copy.vizDesigner }}
    </h2>

    <section class="mt-0 z-10 transition duration-[.25s] ease-in">
      <p class="flex flex-row flex-wrap justify-center gap-x-3 gap-y-3 grow font-modernCopy font-medium text-center leading-[1.4rem] tracking-[0.05rem] antialiased text-[0.8rem] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <a
          :href="`mailto:` + `${store.copy.druEmail}`"
          class="btn"
        >{{ store.copy.druEmail }}</a>
        <a class="btn" :href="resumeUrl" target="_blank">PDF&nbsp;Resume</a>
      </p>
    </section>
  </nav>
</template>

<script setup>
  import { inject } from 'vue'

  const store = inject('store')
  const resumeUrl = '/resume/drew_harper_resume_portfolio.pdf'
</script>

<style lang="scss" scoped>
  .btn {
    @apply border border-[#ff000054] border-solid py-[0.3rem] rounded-[2rem] my-0 px-5 text-base-ivory hover:text-black hover:no-underline hover:bg-modern-ruby no-underline;
  }
</style>
