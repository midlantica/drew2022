// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import ModernRoot from './template-modern/pages/ModernRoot.vue'
import ModernExtras from './template-modern/pages/ModernExtras.vue'
import ModernProjects from './template-modern/pages/ModernProjects.vue'
import ModernSkills from './template-modern/pages/ModernSkills.vue'
import ModernAbout from './template-modern/pages/ModernAbout.vue'
import HomeBourbon from './template-bourbon/pages/HomeBourbon.vue'
import HomeGroovy from './template-groovy/pages/HomeGroovy.vue'
import HomeTechy from './template-techy/pages/HomeTechy.vue'
import HomeCorp from './template-corp/pages/HomeCorp.vue'
import HomePunk from './template-punk/pages/HomePunk.vue'
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
        path: '/Modern',
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
        component: ModernExtras,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper &ndash; UI/UX Designer Projects',
        },
      },
    ],
  },
  // />> END MODERN
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
        path: '/Bourbon/Extras',
        name: 'ExtrasBourbon',
        // route level code-splitting
        // this generates a separate chunk (Extras.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./template-bourbon/pages/Extras.vue'),
        meta: {
          bodyClass: 'bourbon extras',
          title: 'Drew Harper &ndash; UI/UX Designer',
        },
      }
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
        path: '/Groovy/Extras',
        name: 'ExtrasGroovy',
        component: () => import('./template-groovy/pages/Extras.vue'),
        meta: {
          bodyClass: 'groovy extras',
          title: 'Drew Harper &ndash; UI/UX Designer',
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
        path: '/Techy/Extras',
        name: 'ExtrasTechy',
        component: () => import('./template-techy/pages/Extras.vue'),
        meta: {
          bodyClass: 'techy extras',
          title: 'Drew Harper &ndash; UI/UX Designer',
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
        path: '/Corp/Extras',
        name: 'ExtrasCorp',
        component: () => import('./template-corp/pages/Extras.vue'),
        meta: {
          bodyClass: 'corp extras',
          title: 'Drew Harper &ndash; UI/UX Designer',
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
        path: '/Punk/Extras',
        name: 'ExtrasPunk',
        component: () => import('./template-punk/pages/Extras.vue'),
        meta: {
          bodyClass: 'punk extras',
          title: 'Drew Harper &ndash; UI/UX Designer',
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
