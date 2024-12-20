import {defineConfig} from 'vitepress';

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: '一款优雅简洁易使用的 Hexo 主题',
    title: 'Solitude 文档',
    themeConfig: {
        nav: nav(),

        sidebar: [
                        {
                            text: '简介',
                            collapsed: false,
                            items: [
                                {text: '介绍', link: '/zh/guide/intro'},
                                {text: '安装', link: '/zh/guide/quick-start'},
                                {text: 'Front Matter', link: '/zh/guide/front-matter'}
                            ]
                        },
                        {
                            text: '配置',
                            collapsed: false,
                            items: [
                                {text: '基本', link: '/zh/config/basic'},
                                {text: '扩展', link: '/zh/config/extend'},
                                {text: '高级', link: '/zh/config/advanced'},
                            ]
                        },
                        {
                            text: '评论',
                            collapsed: false,
                            items: [
                                {text: '基本', link: '/zh/comment/basic'},
                                {text: 'Valine', link: '/zh/comment/valine'},
                                {text: 'Waline', link: '/zh/comment/waline'},
                                {text: 'Twikoo', link: '/zh/comment/twikoo'},
                                {text: 'Artalk', link: '/zh/comment/artalk'},
                                {text: 'Giscus', link: '/zh/comment/giscus'},
                            ]
                        },
                        {
                            text: '搜索',
                            collapsed: false,
                            items: [
                                {text: '本地搜索', link: '/zh/search/local'},
                                {text: 'Algolia', link: '/zh/search/algolia'},
                            ]
                        },
                        {
                            text: '页面',
                            collapsed: false,
                            items: [
                                {text: '友情链接', link: '/zh/feature/links'},
                                {text: '关于我', link: '/zh/feature/about'},
                                {text: '音乐馆', link: '/zh/feature/music'},
                                {text: '我的装备', link: '/zh/feature/equipment'},
                                {text: '在线工具', link: '/zh/feature/tools'},
                                {text: '弹幕留言页', link: '/zh/feature/danmaku'},
                                {text: '即刻短文', link: '/zh/feature/jike'},
                                {text: '最近评论', link: '/zh/feature/recent-comments'},
                            ],
                        },
                        {
                            text: '第三方',
                            collapsed: false,
                            items: [
                                {text: 'Busuanzi', link: '/zh/third-party/busuanzi'},
                                {text: 'Tianli GPT', link: '/zh/third-party/tianli-gpt'},
                                {text: 'Post Chat', link: '/zh/third-party/post-chat'},
                            ]
                        },
                        {
                            text: 'FAQ',
                            link: '/zh/faq'
                        }
                    ],

        editLink: {
            pattern: 'https://github.com/everfu/solitude.js.org/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',

        footer: {
            copyright: `版权所有 © ${new Date().getFullYear()} <a target="_blank" href="https://github.com/everfu">伍十七</a>`,
            message: '特别赞助：<a href="https://www.lightxi.com/" target="_blank"><img src="https://www.lightxi.com/favicon.ico" style="height: 28px; display: inline-block; margin-bottom: -8px"/> 晞云云计算</a>'
        },
    }
})

function nav() {
    return [
        {text: 'QQ 群', link: 'https://qm.qq.com/q/mYIJRTqo0w'},
        {text: '预览', link: 'https://everfu.github.io/solitude-demo/'},
        {text: '晞云云计算', link: 'https://www.lightxi.com/'}
    ]
}
