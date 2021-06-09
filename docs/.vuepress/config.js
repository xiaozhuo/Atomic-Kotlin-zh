module.exports = {
  base: "/Atomic-Kotlin-zh/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  title: 'Atomic Kotlin',
  description: '《Atomic Kotlin》中文版',
  // 多语言设置
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  // 主题配置
  themeConfig: {
    logo: '/favicon.png',
    // 仓库相关
    repo: 'Angus-Liu/Atomic-Kotlin-zh',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '首页', link: '/' },
          { text: '官网', link: 'https://www.atomickotlin.com' },
        ],
        editLinkText: '翻译有错？帮助改进:)',
        // 侧边栏配置
        sidebar: {
          '/': [
            'Copyright',
            'Section-1',
            'Chapter-1',
            'Chapter-2',
            'Chapter-3',
            'Chapter-4',
            'Chapter-5',
            'Chapter-6',
            'Chapter-7',
            'Chapter-8',
            'Chapter-9',
            'Chapter-10',
            'Chapter-11',
            'Chapter-12',
            'Chapter-13',
            'Chapter-14',
            'Chapter-15',
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Official', link: 'https://www.atomickotlin.com' },
        ],
        editLinkText: 'Edit this page on GitHub :)',
        sidebar: {
          '/en/': [
            'Copyright',
            'Section-1',
            'Chapter-1',
            'Chapter-2',
            'Chapter-3',
            'Chapter-4',
            'Chapter-5',
            'Chapter-6',
            'Chapter-7',
            'Chapter-8',
            'Chapter-9',
            'Chapter-10',
            'Chapter-11',
            'Chapter-12',
            'Chapter-13',
            'Chapter-14',
            'Chapter-15',
          ]
        }
      }
    },
  },
  // markdown 配置
  markdown: {
    // lineNumbers: true
  },
}
