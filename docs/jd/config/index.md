---
outline: deep

---

## 获取京东CK

浏览器标识符弄成安卓，可以过验证,登录[京东移动端](https://m.jd.com)，登录后在F12里找到cook，cook需要找到`pt_key`和 `pt_pin` ，京东ck由 `pt_key=xxx; pt_pin=xx;` 组成

![image-20221205200215295](https://cdn.jsdelivr.net/gh/HeiDaotu/img-bucket/img/202212052002800.png)

### 环境变量配置

**变量组：** 京东

**变量值：** pt_key=xxxxxxx; pt_pin=xxxxx;

**备注：** 建议写上自己的备注，不然不知道是谁。