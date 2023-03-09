<template>
  <div class="skillsGrid">
    <div v-for="item in skills" key="index">
      <component :is="item[0]" class="icon {{item[1]}} { active: hover }" @mouseleave="hover = false"
        @click="showModal(item[0], item[1], item[2], item[3])" />
    </div>

    <div class="modalWrapper" v-if="isModalOpen">
      <div class="modalBg">
        <div class="modal">
          <div class="closeBtn" @click="closeModal">X</div>
          <div class="modalInner">
            <div>
              <component :is="icon" class="icon {{title}} { active: hover }" @mouseleave="hover = false" />
            </div>
            <div>
              <h4>{{ title }}</h4>
              <p>{{ text }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { ref, defineAsyncComponent, shallowRef } from "vue"

  const iconUiux = defineAsyncComponent((): Promise<any> => import('./Icons/iconUiux.vue'))
  const iconHtml5 = defineAsyncComponent((): Promise<any> => import('./Icons/iconHtml5.vue'))
  const iconCss3 = defineAsyncComponent((): Promise<any> => import('./Icons/iconCss3.vue'))
  const iconJs = defineAsyncComponent((): Promise<any> => import('./Icons/iconJs.vue'))
  const iconSketch = defineAsyncComponent((): Promise<any> => import('./Icons/iconSketch.vue'))
  const iconSass = defineAsyncComponent((): Promise<any> => import('./Icons/iconSass.vue'))
  const iconVue = defineAsyncComponent((): Promise<any> => import('./Icons/iconVue.vue'))
  const iconSvg = defineAsyncComponent((): Promise<any> => import('./Icons/iconSvg.vue'))
  const iconVSCode = defineAsyncComponent((): Promise<any> => import('./Icons/iconVscode.vue'))
  const iconFigma = defineAsyncComponent((): Promise<any> => import('./Icons/iconFigma.vue'))
  const iconNuxt = defineAsyncComponent((): Promise<any> => import('./Icons/iconNuxt.vue'))
  const iconChelsea = defineAsyncComponent((): Promise<any> => import('./Icons/iconChelsea.vue'))

  const hover = ref(false)

  // let item = ''
  const isModalOpen = ref(false)
  let icon = ''
  let title = ''
  let text = ''
  let open = ''

  function showModal(icon, title, text, open): void {
    // console.log("showModal() just ran: ", icon, title, text, open)
    // icon.value, title.value, text.value, open.value
    icon = icon.value
    title = title.value
    text = text.value
    open = open.value
    isModalOpen.value = true
  }

  function closeModal(): any {
    console.log("closeModal(item) just ran: ")
    isModalOpen.value = false
  }

  const skills = shallowRef([
    [
      iconUiux,
      'uiux',
      `UX Design is my first love. Humility before the User. Crack the flow!`,
      'openUiux'
    ],
    [
      iconHtml5,
      'html5',
      `HTML5: the bones of the Internet. As few divs and spans as possible if you please.`,
      'openHtml5'
    ],
    [
      iconCss3,
      'css3',
      `CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`,
      'openCss3'
    ],
    [
      iconJs,
      'js',
      `JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue 💚, like this site`,
      'openJs'
    ],
    [
      iconSass,
      'sass',
      `SASS has made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's a long way to go.`,
      'openSass'
    ],
    [
      iconVue,
      'vue',
      `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities.`,
      'openVue'
    ],
    [
      iconNuxt,
      'nuxt',
      `The Nuxt framework for Vue: SSR, routes by dir, SEO; it's jam-stacked with Dev happiness. Digging Gridsome.js too.`,
      'openNuxt'
    ],
    [
      iconVSCode,
      'vsCode',
      `VS Code: Used to be into Sublime Text but I'm all VS Code these days. MS better late than never.`,
      'openVSCode'
    ],
    [
      iconSketch,
      'sketch',
      `Sketch used to be the king of UX prototyping, now there are many alternatives.`,
      'openSketch'
    ],
    [
      iconFigma,
      'figma',
      `Figma is the new king of UX prototyping. It ain't Illustrator but UX rarely requires such sophistication.`,
      'openFigma'
    ],
    [
      iconSvg,
      'svg',
      `SVG: Vector is best because it scales and rasters don't, and it's editable, but it still cannot replace a photograph.`,
      'openSvg'
    ],
    [
      iconChelsea,
      'chelsea',
      `Blue is the color! Chelsea is the name! We're all together... and We're the only team in London with the European Cup! x2! 💙 `,
      'openChelsea'
    ],
  ])

</script>

<style lang="scss" scoped>
@import "../template-modern/assets/css/modern-main.scss";
@import "../assets/css/modal.scss";

.skillsGrid {
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  width: 100%;
  justify-content: space-between;
  justify-items: center;
  align-items: stretch;
  align-content: space-between;
  gap: 0.5rem auto;
  position: relative;

  @media (max-width: $breakThou) {
    grid-row: 2;
  }

  @media (max-width: $breakOne) {
    grid-row: 2;
  }

  @media (max-width: $breakTwo) {
    grid-row: 2;
  }

  @media (min-width: 1026px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(88px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;

    &:hover {
      // background: red !important;
      animation: shimmy 0.25s !important;
      // animation-duration: .25s;
    }
  }

  svg g {
    cursor: pointer;
  }
}

body.modern .skillsGrid {
  width: 70%;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  justify-content: center;
  margin: 1rem auto;

  @media (min-width: 770px) {
    width: 60%;
    // grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 80%;
  }

  svg {
    width: 100px;
    margin: 0rem auto 0.75rem;

    &:hover {
      // background: hsla(0, 100%, 25%, 0.25);
      // fill: red;
    }

    g {
      box-shadow: 0 0 12px black;
      // stroke: $accent !important;
    }
  }
}

body.bourbon .skillsGrid {
  //

  @media (min-width: 1026px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(88px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;
  }

}

body.techy .skillsGrid {

  //
  @media (min-width: 1026px) {
    grid-template-columns: repeat(12, minmax(84px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(84px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;
  }


}

body.groovy .skillsGrid {
  transition: 0.25s ease-in;
  margin: 0 -1em 0 0em;

  @media (min-width: 1026px) {
    grid-template-columns: repeat(12, minmax(84px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(84px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;
  }

}

body.corp .skillsGrid {
  //

  @media (min-width: 1026px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(88px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;

    &:hover {
      // background: red !important;
      animation: shimmy 0.25s !important;
      // animation-duration: .25s;
    }
  }

}

body.punk .skillsGrid {
  margin: 0.5em auto 0em;
  transition: 0.25s ease-in;
  transform: rotate(-0.5deg);
  background: transparentize(rgba(0, 140, 0, 0.829), 0.5) !important;

  @media (min-width: 1026px) {
    grid-template-columns: repeat(12, minmax(84px, 1fr));
  }

  @media (min-width: 563px) and (max-width: 1025px) {
    grid-template-columns: repeat(6, minmax(88px, 1fr));
  }

  @media (min-width: 471px) and (max-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  }

  svg {
    width: 88px;
  }

}
</style>
