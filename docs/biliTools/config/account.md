---
outline: deep

---

## 配置详情

| Key             | 值类型                                                       | 默认值              | 说明                                              |
| --------------- | ------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| **cookie**      | 字符串                                                       | 无，必须手动添加    | **必须** 完整的 Cookie                            |
| `__common__`    | 布尔值                                                       | 空                  | 标记为公共，减少多用户的配置（例如配置推送）      |
| createCookieDay | 数值                                                         | 空                  | 间隔指定时间创建新 cookie                         |
| message         | [点击跳转详情](https://b.2024666.xyz/config/message.html)    |                     | 消息推送                                          |
| function        | [点击跳转详情](https://b.2024666.xyz/config/func.html)       |                     | 任务开关，需要使用什么任务一定要看哦              |
| userAgent       | 字符串                                                       | Edge/Firefox/Chrome | 浏览器用户代理，内置偶尔随机更新 （建议自行配置） |
| dailyRunTime    | 字符串                                                       | `17:30:00-23:40:00` | Serveless 随机运行的时间段                        |
| apiDelay        | `[数值, 数值]`或者数值                                       | `[2, 6]`            | 单位秒，区间中随机，或固定一个值（部分接口有效）  |
| coin            | [点击跳转详情](https://b.2024666.xyz/config/func.html#投币)  |                     | 投币相关                                          |
| gift            | [点击跳转详情](https://b.2024666.xyz/config/func.html#直播间礼物) |                     | 直播礼物相关                                      |
| couponBalance   | [点击跳转详情](https://b.2024666.xyz/config/func.html#使用-b-币券) |                     | 充电相关                                          |
| match           | [点击跳转详情](https://b.2024666.xyz/config/func.html#竞猜)  |                     | 竞猜相关                                          |
| lottery         | [点击跳转详情](https://b.2024666.xyz/config/func.html#天选时刻) |                     | 天选时刻相关                                      |
| redPack         | [点击跳转详情](https://b.2024666.xyz/config/func.html#天选红包) |                     | 天选红包（电池）相关                              |
| unFollow        | [点击跳转详情](https://b.2024666.xyz/config/func.html#取关分组) |                     | 取关分组相关                                      |
| intimacy        | [点击跳转详情](https://b.2024666.xyz/config/func.html#粉丝亲密度) |                     | 粉丝亲密度相关                                    |
| manga           | [点击跳转详情](https://b.2024666.xyz/config/func.html#漫画任务) |                     | 漫画相关                                          |
| jury            | [点击跳转详情](https://b.2024666.xyz/config/func.html#风纪委员) |                     | 风纪委员相关                                      |
| bigPoint        | [点击跳转详情](https://b.2024666.xyz/config/func.html#大积分) |                     | 大积分相关                                        |
| exchangeCoupon  | [点击跳转详情](https://b.2024666.xyz/config/func.html#兑换漫读券) |                     | 兑换漫读券相关                                    |
| activityLottery | [点击跳转详情](https://b.2024666.xyz/config/func.html#转盘抽奖) |                     | 转盘抽奖相关                                      |
| limit           | [点击跳转详情](https://b.2024666.xyz/config/account.html#解除限制) |                     | 解除内部限制配置                                  |
| log             | [点击跳转详情](https://b.2024666.xyz/config/logger.html)     |                     | 日志配置                                          |

**重要配置说明**

- cookie 详见 [获取 Cookie 的方法](https://b.2024666.xyz/config/get_value.html)。
- userAgent - 内置默认浏览器 UA，但请尽量自行设置为常用设备 UA。该浏览器的 UA 为：`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69`
- `__common__` 表示此配置为公共配置，所有账号都会使用此配置，如果某个账号有此配置，则会覆盖公共配置。只有一个公共配置。
- createCookieDay 无法用于云函数，因为云函数无法创建文件。