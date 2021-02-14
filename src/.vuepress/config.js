const { description } = require('../../package')

const navbar = {
  items: [
    {
      text: 'Guides',
      link: '/guides/'
    },
    { 
      text: 'Technology',
      link: '/technology/'
    },
    { 
      text: 'Design',
      link: '/design/'
    },
    {
      text: 'Services',
      items: [
        { text: 'API', link: 'https://api.kpgov.tech' },
        { text: 'Pehchaan', link: 'https://pehchaan.kpgov.tech' },
        { text: 'Daakia', link: 'https://daakia.kpgov.tech' }
      ]
    }
  ]
}

const sidebar = {
  guides: [
    {
      title: 'Guides',
      path: '/guides/',
      collapsable: false,
      children: [
        '/guides/principles',
      ]
    },
  ],
  technology: [
    {
      title: 'Technology',
      path: '/technology/',
      collapsable: false,
      children: [
        '/technology/code-of-practice',
        '/technology/architecture',
        '/technology/api-standards',
        '/technology/resources',
        '/technology/sitemap',
      ]
    },
    {
      title: 'API Management',
      path: '/technology/api/',
      collapsable: false,
      children: [
        '/technology/api/requirements',
        '/technology/api/prototyping',
        '/technology/api/testing',
        '/technology/api/service-levels',
        '/technology/api/documentation',
        '/technology/api/management',
      ]
    },
  ],
  design: [
    {
      title: 'Design',
      path: '/design/',
      collapsable: false,
      children: [
        '/design/principles',
        '/design/design-system',
        '/design/prototype-kits',
        '/design/style-guide',
        '/design/accessibility',
        '/design/resources'
      ]
    }
  ],
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'KP Digital Services Framework',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/codeforpakistan/kpitb-framework',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    nav: navbar.items,
    sidebar: {
      collapsable: false,
      '/guides/': sidebar.guides,
      '/technology/': sidebar.technology,
      '/design/': sidebar.design
    },
    // sidebarDepth: 0
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
