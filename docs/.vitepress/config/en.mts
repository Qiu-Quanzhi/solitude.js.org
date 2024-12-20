export const en = {
    lang: 'en-US',
    title: "Solitude Docs",
    description: "An elegant, simple and easy-to-use Hexo theme",
    themeConfig: {
        nav: [
            {text: 'Preview', link: 'https://everfu.github.io/solitude-demo/'},
            {text: 'LightXi Cloud', link: 'https://www.lightxi.com/'}
        ],

        sidebar: [
            {
                text: 'Intro',
                collapsed: false,
                items: [
                    {text: 'Intro', link: '/guide/intro'},
                    {text: 'Install', link: '/guide/quick-start'},
                    {text: 'Front Matter', link: '/guide/front-matter'}
                ],
            },
            {
                text: 'Config',
                collapsed: false,
                items: [
                    {text: 'Basic', link: '/config/basic'},
                    {text: 'Extend', link: '/config/extend'},
                    {text: 'Advanced', link: '/config/advanced'},
                ],
            },
            {
                text: 'Comment',
                collapsed: false,
                items: [
                    {text: 'Basic', link: '/comment/basic'},
                    {text: 'Valine', link: '/comment/valine'},
                    {text: 'Waline', link: '/comment/waline'},
                    {text: 'Twikoo', link: '/comment/twikoo'},
                    {text: 'Artalk', link: '/comment/artalk'},
                    {text: 'Giscus', link: '/comment/giscus'},
                ],
            },
            {
                text: 'Search',
                collapsed: false,
                items: [
                    {text: 'Local Search', link: '/search/local'},
                    {text: 'Algolia', link: '/search/algolia'},
                ],
            },
            {
                text: 'Feature Pages',
                collapsed: false,
                items: [
                    {text: 'Links', link: '/feature/links'},
                    {text: 'About', link: '/feature/about'},
                    {text: 'Music', link: '/feature/music'},
                    {text: 'Equipment', link: '/feature/equipment'},
                    {text: 'Toolbox', link: '/feature/tools'},
                    {text: 'Message', link: '/feature/danmaku'},
                    {text: 'Essay', link: '/feature/jike'},
                    {text: 'Recent Comments', link: '/feature/recent-comments'},
                ],
            },
            {
                text: 'Third Party',
                collapsed: false,
                items: [
                    {text: 'Busuanzi', link: '/third-party/busuanzi'},
                    {text: 'Tianli GPT', link: '/third-party/tianli-gpt'},
                    {text: 'Post Chat', link: '/third-party/post-chat'},
                ],
            },
            {
                text: 'FAQ',
                link: '/faq'
            }
        ],

        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/everfu" target="_blank">everfu</a>`,
            message: 'Special Sponsor: <a href="https://www.lightxi.com/" target="_blank"><img src="https://www.lightxi.com/favicon.ico" style="height: 28px; display: inline-block; margin-bottom: -8px"/> LightXi Cloud</a>'
        },

        editLink: {
            pattern: 'https://github.com/everfu/solitude.js.org/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
}
