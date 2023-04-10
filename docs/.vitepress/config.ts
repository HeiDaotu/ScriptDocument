import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // 语言
    lang: 'zh-CN',
    // 更新时间开启
    lastUpdated: true,

    base: '/ScriptDocument/',
    title: "WFRobert",
    description: "脚本文档",
    themeConfig: {
        // 右上角显示
        nav: [
            {text: 'Home', link: '/'},
            // 上方activeMatch同一个文件夹里的文件，全部高亮
            {text: '参考文档', link: '/reference/', activeMatch: '/reference/'},
            {
                text: '脚本地址', items: [
                    {
                        text: '主地址',
                        link: 'https://script.heitu.eu.org/'
                    }, {
                        text: '备用地址',
                        link: 'https://script.heitu.eu.org/'
                    }
                ]
            }
        ],
        // 左边文章栏显示
        sidebar: [
            {
                text: '青龙脚本',
                items: [
                    {text: '环境配置', link: '/reference/'},
                    {text: '京东', link: '/reference/jd/'},
                    // {
                    //     text: 'B站工具',
                    //     link: '/reference/code_maintenance.md'
                    //     // items: [
                    //     //     {
                    //     //         text: '配置说明',
                    //     //         link: '/biliTools/config/'
                    //     //     },
                    //     //     {
                    //     //         text: '配置详情',
                    //     //         link: '/biliTools/config/account'
                    //     //     },
                    //     //     {
                    //     //         text: '功能配置',
                    //     //         link: '/biliTools/config/func'
                    //     //     }
                    //     // ]
                    // },
                    {text: '吾爱破解签到', link: '/reference/52pojie/'},
                    {text: '百度贴吧签到', link: '/reference/tieba/'},
                ]
            }
        ],
        // 右上角图片跳转列表
        socialLinks: [
            {icon: 'github', link: 'https://github.com/HeiDaotu'}
        ],
        // 最下方，跳转页面的编辑链接
        editLink: {
            pattern: 'https://github.com/HeiDaotu/ScriptDocument/tree/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
    }
})
