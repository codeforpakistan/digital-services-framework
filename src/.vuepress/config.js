const { description } = require('../../package')

const navbar = {
  items: [
    { 
      text: 'Guides',
      link: '/guides/'
    },
    { 
      text: 'Framework',
      link: '/framework/'
    },
    {
      text: 'Resources',
      link: '/resources/',
    }
  ]
}

const sidebar = {
  guides: [
    {
      title: 'Essentials',
      collapsable: false,
      children: [
      ]
    },
    {
      title: 'Examples',
      collapsable: false,
      children: [
      ]
    }
  ],
  framework: [
    {
      title: 'Framework',
      collapsable: false,
      children:[
        '/framework/'
      ]
    },
    {
      title: 'Standards',
      collapsable: false,
      children: [
        '/framework/standards/',
        '/framework/standards/data-storage',
        '/framework/standards/communication',
        '/framework/standards/information'
      ]
    },
    {
      title: 'Technology',
      collapsable: false,
      children: [
        '/framework/technology/',
        '/framework/technology/api/',
        '/framework/technology/api/standards'
      ]
    },
    {
      title: 'Design',
      collapsable: false,
      children: [
        '/framework/design/principles',
        '/framework/design/design-system',
        '/framework/design/prototype-kits',
        '/framework/design/style-guide',
        '/framework/design/accessibility'
      ]
    }
  ]
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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: navbar.items,
    sidebar: {
      collapsable: false,
      '/guides/': sidebar.guides,
      '/framework/': sidebar.framework
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
