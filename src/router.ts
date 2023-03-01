// @ts-nocheck
import { createRouter, createWebHistory, useRoute } from 'vue-router'

import ModernRoot from './template-modern/pages/ModernRoot.vue'
import ModernProjects from './template-modern/pages/ModernProjects.vue'
import ModernSkills from './template-modern/pages/ModernSkills.vue'
import ModernAbout from './template-modern/pages/ModernAbout.vue'
import ModernExtras from './template-modern/pages/ModernExtras.vue'

import HomeBourbon from './template-bourbon/pages/HomeBourbon.vue'
import ExtrasBourbon from './template-bourbon/pages/ExtrasBourbon.vue'

import HomeGroovy from './template-groovy/pages/HomeGroovy.vue'
import ExtrasGroovy from './template-groovy/pages/ExtrasGroovy.vue'

import HomeTechy from './template-techy/pages/HomeTechy.vue'
import ExtrasTechy from './template-techy/pages/ExtrasTechy.vue'

import HomeCorp from './template-corp/pages/HomeCorp.vue'
import ExtrasCorp from './template-corp/pages/ExtrasCorp.vue'

import HomePunk from './template-punk/pages/HomePunk.vue'
import ExtrasPunk from './template-punk/pages/ExtrasPunk.vue'

import ExtrasC from './components/ExtrasC.vue'

import VueBodyClass from 'vue-body-class'

const routes = [
  {
    path: '/',
    redirect: 'Modern',
  },
  {
    path: '/:pathMatch(.*)',
    component: ModernRoot
  },
  {
    path: '/Modern',
    name: 'Modern',
    component: ModernRoot,
    meta: {
      bodyClass: 'modern',
      title: 'Drew Harper &ndash; UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
    children: [
      {
        path: 'Modern',
        name: 'Modern',
        redirect: '/Modern/Projects', // default child path
      },
      {
        path: 'Projects',
        name: 'ModernProjects',
        component: ModernProjects,
        meta: {
          bodyClass: 'projects',
          title: 'Drew Harper &ndash; UI/UX Designer Projects',
          // transition: 'flash',
        },
      },
      {
        path: 'Skills',
        name: 'ModernSkills',
        component: ModernSkills,
        // transition: 'fade',
        meta: {
          bodyClass: 'skills',
          title: 'Drew Harper &ndash; UI/UX Designer Skills',
        },
      },
      {
        path: 'About',
        name: 'ModernAbout',
        component: ModernAbout,
        // transition: 'fade',
        meta: {
          bodyClass: 'about',
          title: 'Drew Harper &ndash; UI/UX Designer About',
        },
      },
      {
        path: 'Extras',
        name: 'ModernExtras',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Projects Extras',
        },
      },
    ],
  },
  {
    path: '/Bourbon',
    name: 'Bourbon',
    component: HomeBourbon,
    meta: {
      bodyClass: 'bourbon',
      title: 'Drew Harper &ndash; UI/UX Designer',
    },
    children: [
      {
        path: 'Extras',
        name: 'ExtrasBourbon',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Extras',
        },
      },
    ]
  },
  {
    path: '/Groovy',
    name: 'Groovy',
    component: HomeGroovy,
    meta: {
      bodyClass: 'groovy',
      title: 'Drew Harper &ndash; UI/UX Designer',
    },
    children: [
      {
        path: 'Extras',
        name: 'ExtrasGroovy',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Extras',
        },
      },
    ]
  },
  {
    path: '/Techy',
    name: 'Techy',
    component: HomeTechy,
    meta: {
      bodyClass: 'techy',
      title: 'Drew Harper &ndash; UI/UX Designer',
    },
    children: [
      {
        path: 'Extras',
        name: 'ExtrasTechy',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Extras',
        },
      },
    ]
  },
  {
    path: '/Corp',
    name: 'Corp',
    component: HomeCorp,
    meta: {
      bodyClass: 'corp',
      title: 'Drew Harper &ndash; UI/UX Designer',
    },
    children: [
      {
        path: 'Extras',
        name: 'ExtrasCorp',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Extras',
        },
      },
    ]
  },
  {
    path: '/Punk',
    name: 'Punk',
    component: HomePunk,
    meta: {
      bodyClass: 'punk',
      title: 'Drew Harper &ndash; UI/UX Designer',
    },
    children: [
      {
        path: 'Extras',
        name: 'ExtrasPunk',
        component: ExtrasC,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Extras',
        },
      },
    ]
  },
  {
    path: '/NotFound',
    redirect: '/',
  },
  {
    path: '/404',
    redirect: '/',
  },
]

const vueBodyClass = new VueBodyClass(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) })

export default router
