<script setup>
  import Button from '../components/Button.vue'
  import { EnvelopeIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center gap-4 mx-0 mb-3 font-modernCopy mt-7">
    <Button intent="primary" size="small" :right-icon="EnvelopeIcon">
      Primary
    </Button>
    <Button intent="primary" size="normal" :right-icon="EnvelopeIcon">
      Primary
    </Button>
    <Button intent="primary" size="large" :right-icon="EnvelopeIcon">
      Primary
    </Button>
    <Button intent="primary" size="largest" :right-icon="EnvelopeIcon">
      Primary
    </Button>
    <Button intent="secondary" :right-icon="EnvelopeIcon">
      Secondary
    </Button>
    <Button intent="tertiary">
      Tertiary
    </Button>
    <Button intent="danger">
      Danger
    </Button>
    <Button as="a" loading intent="text">
      Text
    </Button>
  </div>
</template>

<style scoped>
  .btnBox {
    @apply min-h-max p-12;
  }
</style>
