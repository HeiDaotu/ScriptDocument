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
            label: "大纲",
        },
        // 导航栏
        nav: nav(),
        // 侧边栏
        sidebar: {
            '/reference/': sidebarReference(),
            '/ai/': sidebarAi()
        },
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

function nav() {
    return [
        {text: 'Home', link: '/'},
        {text: '参考文档', link: '/reference/', activeMatch: '/reference/'},
        {
            text: '脚本地址', items: [
                {
                    text: '脚本挂机上车地址',
                    link: 'https://script.heidaotu.eu.org/#/'
                }, {
                    text: 'github开源脚本地址',
                    link: 'https://github.com/HeiDaotu/WFRobertQL'
                }
            ]
        },
        // {text: 'AI文档', link: '/ai/', activeMatch: '/ai/'},
    ]
}

// 左边文章栏显示
function sidebarReference() {
    return [
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
                {text: '吾爱破解', link: '/reference/52pojie/'},
                {text: '百度贴吧', link: '/reference/tieba/'},
                {text: '阿里云盘', link: '/reference/aliyunpan/'},
                {text: '天翼网盘', link: '/reference/tianyiwanpan/'},
                {text: 'DDNSTO', link: '/reference/ddnsto/'},
                {text: '小黑盒', link: '/reference/xiaoheihe/'},
                {text: '好游快报', link: '/reference/haoyoukuaibao/'},
                {text: '交易猫', link: '/reference/jiaoyimao/'},
                {text: '网易云游戏', link: '/reference/wangyiyungame/'},
            ]
        }
    ]
}

// 左边文章栏显示
function sidebarAi() {
    return [
        {
            text: 'AI文档',
            items: [
                {text: '推荐AI', link: '/ai/', activeMatch: '/ai/'}
            ]
        }
    ]
}