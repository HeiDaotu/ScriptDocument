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
            {text: '参考文档', link: '/jd/config/'},
            {
                text: '脚本地址', items: [
                    {
                        text: '主地址',
                        link: 'http://frp-fly.top:12078/#/'
                    }, {
                        text: '备用地址',
                        link: 'http://frp-fly.top:12078/#/'
                    }
                ]
            }
        ],
        sidebar: [
            {
                text: '青龙脚本',
                items: [
                    {text: '京东', link: '/jd/config/'},
                    {
                        text: 'B站工具',
                        items: [
                            {
                                text: '配置说明',
                                link: '/biliTools/config/'
                            },
                            {
                                text: '配置详情',
                                link: '/biliTools/config/account'
                            },
                            {
                                text: '功能配置',
                                link: '/biliTools/config/func'
                            }
                        ]
                    },
                    {text: '52破解', link: '/52pj/config/'},
                    // {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/HeiDaotu'}
        ]
    }
})
