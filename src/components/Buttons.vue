<script setup>
  import Button from '../components/Button.vue'
  import { CogIcon, MapIcon, UserIcon, TrophyIcon } from '@heroicons/vue/20/solid'

  console.log(CogIcon)
</script>

<template>
  <div class="flex flex-row flex-wrap content-center justify-center gap-2 px-20 font-modernCopy mt-7">
    <Button
      intent="primary" size="small" :right-icon="CogIcon"
      loading
    />
    <Button
      intent="primary" size="small" :icon="MapIcon"
    />
    <Button
      intent="tertiary" size="small" :icon="UserIcon"
    />
    <Button
      intent="primary" size="small"
      :right-icon="CogIcon"
    >
      Small
    </Button>

    <Button
      intent="primary" size="normal"
      :left-icon="CogIcon"
    >
      Normal
    </Button>

    <Button
      intent="primary" size="large"
      :right-icon="CogIcon"
    >
      Large
    </Button>

    <Button
      intent="primary" size="small"
      :left-icon="UserIcon"
    >
      Primary
    </Button>

    <Button intent="secondary" :right-icon="CogIcon">
      Secondary
    </Button>

    <Button intent="tertiary">
      Tertiary
    </Button>

    <Button intent="secondary" size="small">
      small
    </Button>
    <Button intent="secondary" size="normal">
      normal
    </Button>
    <Button intent="secondary" size="large">
      large
    </Button>
    <Button intent="secondary" size="largest">
      largest
    </Button>

    <Button
      as="a" intent="text"
      href="#"
    >
      Text
    </Button>
    <Button
      intent="primary"
      size="small"
      disabled
      :left-icon="CogIcon"
    >
      Disabled
    </Button>
  </div>
</template>

<style scoped>
  /* .btnBox {
    @apply min-h-max p-12;
  } */
</style>
