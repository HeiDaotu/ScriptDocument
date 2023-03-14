import {defineConfig} from 'vitepress'
import {reactive} from "vue";

// @ts-ignore
import {AnchorOptions} from "vitepress/dist/node";

// const md = require('markdown-it')()
//     .use(require('markdown-it-anchor'), opts)

const md = reactive({
    // level:1,

})


// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/WFRobertBlog/',
    title: "WFRobert",
    description: "个人博客",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'BiLi配置',
                items: [
                    {text: '功能配置', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true,
        anchor: md
    }
})
