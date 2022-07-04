<h1 align="center">Vue3 + Ts + Vite + ElementPlus</h1>
<p align="center">
  <p align="right">作者：Soulmate</p>
</p>
<p align="center">一款技术栈基于vue3的项目架子，涉及axios、element+、pinia、国际化等插件</p>

* 💪 Vue 3.0+
* 💪 Vite 2.9+
* 💪 TypeScript 4.0+
* 🍍 Pinia 2.0+
* 🔥 ECharts 5.0+
* 🔥 VueI18n 9.0+
* 🔥 Axios 0.27.2
* 🔥 ElementPlus 2.0+

## 简介

### 项目仓库
- [国外 GitHub](https://github.com/soulmatez/vue3Store.git)
- [国内 Gitee](https://github.com/soulmatez/vue3Store.git)

### 线上demo
- [Vue3TsCliStore 在线预览](https://github.com/soulmatez/vue3Store.git)

> 生产环境使用 [Mockjs]() 代替


## 页面功能

```
- [x] 首页
  * [x] 数据盘
  * [x] 待办事项
- [x] 登录页
  * [x] 用户登录
    - [x] 模板管理
- [x] 其他
  * [x] 完善中
```

## 安装与使用

```bash
# 初始化项目
npm run init

# 跑起来！
npm run dev

# 构建发布
npm run build

# 本地预览，需要先执行 build
npm run serve
```

## 目录结构:

```bash
vueStroe
├── dist               # 打包出口文件
├── node_modules       # 依赖库
├── public             # 入口文件
├── src
│    ├── api              # api接口目录
│    ├── assets           # 图片资源目录
│    ├── components       # 公共组件
│    ├── directive        # 自定义指令
│    ├── lang             # 国际化
│    ├── router           # 路由配置
│    ├── store            # 状态管理
│    ├── types            # 接口声明
│    ├── utils            # 公共方法
│    ├── style            # 公共样式
│    ├── views            # 项目页面
│    ├── App.vue          # vue模板入口
│    └── main.ts          # 项目入口文件
├── .env               # 配置文件
├── .env.development   # 开发环境配置文件
├── .env.production    # 生产环境配置文件
├── .gitignore         # git忽略文件
├── .README.md         # 描述文件
├── tsconfig.json      # ts配置
└── vite.config.ts     # vite全局配置
```

## 国际化
目前只有 `登录页` 进行了国际化设置，有需要可自行添加。

### 添加多语言

多语言文件位置：`@/lang/*.ts`

### 使用

- 在模板中使用：
```html
<template>
  ...
    {{ $t('xxx') }}
  ...
</template>
```

- Componsition API：
```js
import { useI18n } from 'vue-i18n'

...
setup() {
  const { t } = useI18n({ useScope: 'global' })

  t('xxx')

  return { t }
}
...
```
## 关于贡献

- [Soulmate - 个人博客](http://blog.soulsuper.top/)
#### 本项目目前作为学习，希望更多的人能够参与项目的维护与拓展。本排名无任何次序。

## 许可

待接入。

## 注意

本项目主要用来研究与学习，如果商用请联系
`953005025@qq.com`
