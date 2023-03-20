<template>
<transition name="modal-fade">
  <div
    class="modalBg"
    v-if="isModalOpen"
  >
    <div
      class="modal"
      ref="modal"
    >
      <div
        class="closeBtn"
        @click="closeModal"
      >
        <xOut />
      </div>
      <div class="modalInner">
        <div class="icon">
          <component
            :is="modelItem[0]"
            class="icon {{modelItem[1]}} { active: hover }"
            @mouseleave="hover = false"
          />
        </div>
        <div class="content">
          <h4>{{ modelItem[2] }}</h4>
          <p>{{ modelItem[3] }}</p>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script setup>
import { ref } from 'vue'

import xOut from './Icons/iconXout.vue'

defineProps({
  icon: String,
  title: String,
  text: String
})

defineEmits('close')

const isModalOpen = ref(false)
const modelItem = ref([])

function showModal (item) {
  modelItem.value = item
  isModalOpen.value = true
}

function closeModal () {
  isModalOpen.value = false
}

</script>

<style lang="scss" scoped>
.modalBg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  margin: auto;
  // transition: 20s ease-in;
  // transform: translate(0px, 0px) rotate(0deg) !important;
  animation: fade .25s;

  .modal {
    position: relative;
    // max-width: 300px;
    width: clamp(calc(300px - 2rem), 500px, calc(100% - 2rem));
    // min-width: 80%;
    // margin: auto 20%;
    // margin-bottom: 4rem;
    background: white;
    background: linear-gradient(180deg,
        hsl(0, 0%, 100%) 0%,
        hsl(186, 43%, 92%) 100%);
    // background: linear-gradient(180deg, white 0%, white 75%, rgba(230, 251, 255, 1) 100%);

    // padding: 1rem 1rem 1rem 0rem;
    border-radius: 20px;
    box-shadow: 0px 6px 10px 0px hsl(0deg 0% 0% / 30%);

    .closeBtn {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: transparent;
      color: hsla(0, 0%, 0%, 50%);
      border: none;
      cursor: pointer;
      background: #ffffff;
      border-radius: 20px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: hsla(0, 0%, 0%, 0.85);
      margin-top: .25rem;
      text-align: center;
    }

    h4 {
      font-size: 1.2rem;
      letter-spacing: 0rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
    }

    .modalInner {
      // width: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin: 1rem 2rem 1.5rem;
      justify-content: center;
      align-items: center;

      .icon {
        // display: inline-block;
        // margin-left: -1rem;
        // flex-shrink: 1;
        align-self: center;

        svg {
          // display: block;
          width: 180px !important;
          margin-right: -1.4rem !important;
          margin-left: -2rem !important;
          margin-bottom: -.5rem !important;
        }
      }

      .content {
        display: inline;
        flex-shrink: 1;
      }

    }

  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all .5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
