import {defineConfig} from 'vitepress'

export default defineConfig({
    // 语言
    lang: 'zh-CN',
    // 更新时间开启
    lastUpdated: true,
    // 网站标签标题
    title: "無非脚本",
    // 网站描述
    description: "这是WF的脚本站。",

    // 网站logo,在Git上打包的时候图片只能在docs/public文件夹下,否则打包看不到
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    // 路由，可有可无
    // base: '/ScriptDocument/',

    themeConfig: {
        // 左上角网站标题
        siteTitle: '無非',
        // 左上角logo
        logo: '/logo.png',
        // 右侧导航栏显示
        outline: {
            label:"大纲",
        },
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
        // 右上角社交图片跳转列表
        socialLinks: [
            {icon: 'github', link: 'https://github.com/HeiDaotu'}
        ],
        // 最下方，跳转页面的编辑链接
        editLink: {
            pattern: 'https://github.com/HeiDaotu/ScriptDocument/tree/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        // 最底下的页脚，版权信息等
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present WF'
        }
    }
})
