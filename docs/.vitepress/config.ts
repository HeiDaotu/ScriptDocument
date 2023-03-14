import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/WFRobertBlog/',
    title: "WFRobert",
    description: "个人博客",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Bili配置参考', link: '/biliTools/index'}
        ],
        sidebar: [
            {
                text: 'Bili配置',
                items: [
                    {text: '功能配置', link: '/biliTools/index'},
                    // {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
