<script setup>
  import Button from '../components/Button.vue'
  import { CogIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center gap-4 font-modernCopy mt-7">
    <Button
      intent="primary" size="small" :left-icon="CogIcon"
      loading
    >
      Primary
    </Button>
    <Button
      intent="primary" size="small"
      :right-icon="CogIcon"
    >
      Primary
    </Button>

    <Button
      intent="primary" size="normal"
      :right-icon="CogIcon"
    >
      Primary
    </Button>

    <Button
      intent="primary" size="large"
      :right-icon="CogIcon"
    >
      Primary
    </Button>

    <Button
      intent="primary" size="largest"
      :right-icon="CogIcon"
    >
      Primary
    </Button>

    <Button intent="secondary" :right-icon="CogIcon">
      Secondary
    </Button>

    <Button intent="tertiary">
      Tertiary
    </Button>

    <Button intent="danger">
      Danger
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
      Primary Disabled
    </Button>
  </div>
</template>

<style scoped>
  /* .btnBox {
    @apply min-h-max p-12;
  } */
</style>
