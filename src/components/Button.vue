<script setup>
  import { computed } from 'vue'
  import { cva } from 'class-variance-authority'

  import Spinner from '../components/Icons/spinner.vue'

  const props = defineProps({
    leftIcon: {
      type: Object,
      default: null,
      required: false
    },
    rightIcon: {
      type: Object,
      default: null,
      required: false
    },
    loading: Boolean,
    disabled: Boolean,
    as: {
      type: [String, Object],
      default: 'button'
    },
    intent: {
      type: String,
      validator: val => ['primary', 'secondary', 'tertiary', 'danger', 'text'].includes(val),
      default: 'primary',
      required: false
    },
    size: {
      type: String,
      validator: val => ['small', 'normal', 'large', 'largest'].includes(val),
      default: 'normal',
      required: false
    }
  })

  const buttonClass = computed(() => {
    return cva('text-white py-[.3rem] px-5 rounded-[2rem] min-h-[32px] no-underline uppercase font-normal inline-flex flex-row items-center content-center justify-center relative cursor-pointer gap-2',
               {
                 variants: {
                   intent: {
                     primary: 'bg-gradient-to-b from-modern-rubyLight to-modern-rubyDark hover:from-modern-ruby hover:to-modern-rubyDarker',
                     secondary: 'bg-gradient-to-b from-blue-500 to-blue-800 hover:bg-blue-800 hover:from-blue-700 hover:to-blue-950',
                     tertiary: 'bg-gradient-to-b from-green-500 to-green-800 hover:bg-green-800 hover:from-green-700 hover:to-green-950',
                     danger: 'bg-gradient-to-b from-red-500 to-red-900 hover:bg-red-800 hover:from-red-700 hover:to-red-950',
                     text: '!text-modern-rubyDark hover:bg-gray-200 hover:text-modern-rubyDarker !underline underline-offset-4'
                   },
                   disabled: {
                     true: '!bg-gray-200 !text-gray-400 !cursor-not-allowed bg-none'
                   },
                   size: {
                     small: 'text-[.6rem] tracking-[0.15ch] !leading-regular',
                     normal: 'text-[.75rem] tracking-[0.05ch] !leading-regular',
                     large: 'text-[1rem] tracking-[0.05ch] !leading-regular',
                     largest: 'text-[1.15rem] tracking-[0.05ch] !leading-regular'
                   }
                 }
               }
    )({
      intent: props.intent,
      disabled: props.disabled,
      size: props.size
    })
  })
</script>

<template>
  <component :is="props.as" :disabled="props.disabled" :class="buttonClass">
    <!-- SPINNER -->
    <Spinner v-if="props.loading" />

    <!-- LEFT ICON -->
    <component v-if="!props.loading" :is="props.leftIcon" :class="['w-5 h-5', { 'invisible': props.loading }]" />

    <!-- CONTENT -->
    <div v-if="!props.loading" :class="{ 'invisible': props.loading }">
      <slot class="!mb-[-0.2rem]" />
    </div>

    <!-- RIGHT ICON -->
    <component v-if="!props.loading" :is="props.rightIcon" :class="['w-5 h-5', { 'invisible': props.loading }]" />
  </component>
</template>

<style scoped>

</style>
