<template>
  <transition name="modal-fade">
    <div class="modalWrapper" v-if="isModalOpen">
      <div class="modalBg">
        <div class="modal">
          <div class="closeBtn" @click="closeModal">X</div>
          <div class="modalInner">
            <div>
              <component :is="modelItem[0]" class="icon {{modelItem[1]}} { active: hover }" @mouseleave="hover = false" />
            </div>
            <div>
              <h4>{{ modelItem[2] }}</h4>
              <p>{{ modelItem[3] }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { ref } from "vue"

  defineProps({
    icon: String,
    title: String,
    text: String
  })

  defineEmits('close')

  const isModalOpen = ref(false)

  const close = () => {
    this.$emit('close')
  }

  const closeModal = () => {
    isModalOpen = false
  }
</script>

<style lang="scss" scoped>
.modalBg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal {
  position: relative;
  width: 400px;
  background-color: white;
  padding: 1rem 1rem 1rem 0rem;
  border-radius: .15rem;
  box-shadow: 0px 3px 5px 0px hsla(0, 0%, 0%, 0.25);

  p {
    color: black;
    margin-top: .25rem;
  }
}

.modalInner {
  position: relative;
  display: flex;
  margin-top: 1rem;
}

.closeBtn {
  position: absolute;
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: hsla(0, 0%, 0%, 0.85);
  border: none;
  cursor: pointer;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>