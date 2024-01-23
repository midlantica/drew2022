<script setup>
  import { computed } from 'vue'
  import { cva } from 'class-variance-authority'

  import Spinner from '../components/Icons/spinner.vue'

  const props = defineProps({
    leftIcon: {
      type: Object,
      default () {
        return []
      },
      required: false
    },
    rightIcon: {
      type: Object,
      default () {
        return []
      },
      required: false
    },
    loading: Boolean,
    as: {
      type: [String, Object],
      default: 'button'
    },
    intent: {
      type: String,
      validator: val => ['primary', 'secondary', 'tertiary', 'danger', 'text'].includes(val),
      default: 'primary'
    },
    size: {
      type: String,
      validator: val => ['small', 'normal', 'large', 'largest'].includes(val),
      default: 'normal'
    }
  })

  const buttonClass = computed(() => {
    return cva('text-white pt-[.5rem] px-5 py-2 rounded-[2rem] no-underline uppercase font-semibold leading-0 inline-flex gap-2 items-center content-center justify-center relative cursor-pointer',
               {
                 variants: {
                   intent: {
                     primary: 'bg-gradient-to-b from-modern-rubyLight to-modern-rubyDark hover:from-modern-ruby hover:to-modern-rubyDarker',
                     secondary: 'bg-gradient-to-b from-blue-500 to-blue-800 hover:bg-blue-800 hover:from-blue-700 hover:to-blue-950',
                     tertiary: 'bg-gradient-to-b from-green-500 to-green-800 hover:bg-green-800 hover:from-green-700 hover:to-green-950',
                     danger: 'bg-gradient-to-b from-red-500 to-red-900 hover:bg-red-800 hover:from-red-700 hover:to-red-950',
                     text: 'bg-gradient-to-b from-gray-400 to-gray-800 hover:bg-gray-800 hover:from-gray-500 hover:to-gray-950'
                   },
                   size: {
                     small: 'text-[.6rem] tracking-[0.25ch]',
                     normal: 'text-[.75rem] tracking-[0.075ch]',
                     large: 'text-[1rem] tracking-[0.075ch]',
                     largest: 'text-[1.15rem] tracking-[0.075ch]'
                   }
                 }
               }
    )({
      intent: props.intent,
      size: props.size
    })
  })
</script>

<template>
  <component :is="props.as" :class="buttonClass">
    <Spinner
      v-if="props.loading"
      :class="[`w-5 h-5 top-[-2px]`, !props.loading && `invisible`]"
    />

    <component
      :is="props.leftIcon"
      :class="[`relative w-5 h-5 top-[-1px]`, props.loading && `invisible`]"
    />

    <span :class="[props.loading && 'invisible']">
      <slot />
    </span>
    <component
      :is="props.rightIcon"
      :class="[`relative w-5 h-5 top-[-1px]`, props.loading && `invisible`]"
    />
  </component>
</template>

<style scoped>

</style>
