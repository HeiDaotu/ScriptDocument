import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/ScriptDocument/',
    title: "WFRobert",
    description: "脚本文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: '参考文档', link: '/environment.md'},
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
        sidebar: [
            {
                text: '青龙脚本',
                items: [
                    {text: '环境配置', link: '/environment.md'},
                    {text: '京东', link: '/jd/config/'},
                    {
                        text: 'B站工具',
                        link: '/code_maintenance.md'
                        // items: [
                        //     {
                        //         text: '配置说明',
                        //         link: '/biliTools/config/'
                        //     },
                        //     {
                        //         text: '配置详情',
                        //         link: '/biliTools/config/account'
                        //     },
                        //     {
                        //         text: '功能配置',
                        //         link: '/biliTools/config/func'
                        //     }
                        // ]
                    },
                    {text: '吾爱破解签到', link: '/52pj/config/'},
                    // {
                    //     text:'百度贴吧',
                    //     items:[
                    //         {
                    //             text: '签到',
                    //             link: '/tieba/config/'
                    //         }
                    //
                    //     ]
                    // }
                    {text: '百度贴吧签到', link: '/tieba/config/'},
                    // {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/HeiDaotu'}
        ]
    }
})
