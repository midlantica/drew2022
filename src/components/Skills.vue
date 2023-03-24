<template>
  <div class="skillsGrid">
    <div v-for="item in skills" key="index">
      <component :is="item[0]" class="icon {{item[1]}} { active: hover }" @mouseleave="hover = false"
        @click="showModal(item)" />
    </div>

    <Teleport to="#modal">
      <transition name="modal-fade">
        <div class="modalBg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            <div class="closeBtn" @click="closeModal">
              <xOut />
            </div>
            <div class="modalInner">
              <div class="icon">
                <component :is="modelItem[0]" class="icon {{modelItem[1]}} { active: hover }"
                  @mouseleave="hover = false" />
              </div>
              <div class="content">
                <h4>{{ modelItem[2] }}</h4>
                <p>{{ modelItem[3] }}</p>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
  import { ref, markRaw, defineAsyncComponent } from "vue"
  import { onClickOutside } from '@vueuse/core'

  import xOut from './Icons/iconXout.vue'

  const iconUiux = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconUiux.vue')))
  const iconHtml5 = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconHtml5.vue')))
  const iconCss3 = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconCss3.vue')))
  const iconJs = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconJs.vue')))
  const iconSketch = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconSketch.vue')))
  const iconSass = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconSass.vue')))
  const iconVue = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconVue.vue')))
  const iconSvg = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconSvg.vue')))
  const iconTailwind = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconTailwind.vue')))
  const iconFigma = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconFigma.vue')))
  const iconNuxt = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconNuxt.vue')))
  const iconChelsea = markRaw(defineAsyncComponent((): Promise<any> => import('./Icons/iconChelsea.vue')))

  const modal = ref(null)

  const hover = ref(false)

  let modelItem = ref([])

  function showModal(item): void {
    modelItem.value = item
    isModalOpen.value = true
  }

  function closeModal(): any {
    isModalOpen.value = false
  }

  const isModalOpen = ref(false)

  onClickOutside(modal, (): boolean => (isModalOpen.value = false))

  const skills = markRaw([
    [
      iconUiux,
      'uiux',
      'UI/UX Design',
      `UX Design is my first love. Humility before the User. Crack the flow!`,
    ],
    [
      iconHtml5,
      'html5',
      'Html 5',
      `HTML5: the bones of the Internet. As few divs and spans as possible if you please.`,
    ],
    [
      iconCss3,
      'css3',
      'CSS 3',
      `CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`,
    ],
    [
      iconJs,
      'js',
      'JavaScript',
      `JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue 💚, like this site`,
    ],
    [
      iconFigma,
      'figma',
      'Figma',
      `Figma is the king of UX prototyping. It ain't Illustrator but collaboration ftw.`,
    ],
    [
      iconTailwind,
      'tailwind',
      'Tailwind CSS',
      `Tailwind takes the naming pain out of CSS and it's brilliant DX. Believe it or not, I actually made a mini Tailwind of my own, before Tailwind knocked it out of the park`,
    ],
    [
      iconSass,
      'sass',
      'SASS',
      `SASS has made CSS so much more fun and nesty to use. CSS's new --vars make it more robust, but there's a long way to go.`,
    ],
    [
      iconVue,
      'vue',
      'Vue',
      `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities.`,
    ],
    [
      iconNuxt,
      'nuxt',
      'Nuxt',
      `The Nuxt framework for Vue: SSR, routes by dir, SEO; it's jam-stacked with Dev happiness. Digging Gridsome.js too.`,
    ],
    [
      iconSketch,
      'sketch',
      'Sketch',
      `Sketch used to be the king of UX prototyping, now it's old school.`,
    ],
    [
      iconSvg,
      'svg',
      'SVG',
      `SVG: Vector is best because it scales and rasters don't, and it's editable, you can even put CSS in a SVG file.`,
    ],
    [
      iconChelsea,
      'chelsea',
      'Chelsea FC',
      `I love Chelsea FC! 💙  I enjoy competition. Love Rugby and Cricket, I was a demon fast bowler! And Football, Go Titans!`,
    ],
  ])

</script>

<style lang="scss" scoped>
  @import "../template-modern/assets/css/modern-main.scss";

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
      margin-bottom: auto;
      margin-top: 260px;
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
    // transform: rotate(-0.5deg);
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

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: all .5s ease;
    // transform: scale(1.1);
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
</style>
