# Stitches-Face

Stitches-Face 为「玩具箱」系列的 Web UI 工程。由于与原始项目的定位纯在差异，本项目针对个性化需求做了对应的代码改装，以及三方接口调用。以作为个人**PetProject**的入口。



## 启动项目

基础环境需要 nodejs（版本不限，建议最新）、npm（yarn 也可以），涉及梯子问题需要自行`Google（bing）`解决:)

**npm环境**：

安装依赖：

```bash
npm install
```

启动项目：

```bash
npm run dev
```

编译项目：

```bash
npm build
```
注：`npm`环境下，`react-darkreader`依赖安装有些问题。需要在外部手动安装后，将`node_modules`文件夹拷入项目中



**yarn环境**

安装依赖：

```bash
yarn
```

启动项目：

```bash
yarn dev
```

编译项目：

```bash
yarn build
```

代码重复率分析：

```bash
yarn jscpd
```



## 开发计划

详细内容请查看[开发计划](https://github.com/kevynull/Stitches-Face/projects)

**多语言：**

VS Code 安装 i18n Ally 插件



## 代码结构

```
src
├── App.tsx
├── antd-global.css
├── apis
│   ├── auth
│   │   └── index.ts
│   ├── baidu
│   │   └── index.ts
│   ├── common
│   │   └── index.ts
│   ├── github
│   │   ├── index.ts
│   │   └── interface.d.ts
│   ├── hitokoto
│   │   ├── index.ts
│   │   └── interface.d.ts
│   ├── search
│   │   └── index.ts
│   ├── setting
│   │   ├── background.ts
│   │   └── otherApis.ts
│   └── site
│       └── index.ts
├── components
│   ├── global
│   │   ├── card
│   │   │   └── outline-card.tsx
│   │   ├── copyright.tsx
│   │   ├── index.tsx
│   │   ├── loading
│   │   │   ├── index.style.less
│   │   │   └── index.tsx
│   │   ├── logo
│   │   │   ├── Clock1
│   │   │   │   ├── data.ts
│   │   │   │   ├── digit.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── separator.tsx
│   │   │   ├── Clock2
│   │   │   │   └── index.tsx
│   │   │   ├── Clock3
│   │   │   │   ├── data.ts
│   │   │   │   ├── digit.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── separator.tsx
│   │   │   ├── index.tsx
│   │   │   ├── interface.ts
│   │   │   └── timeClockContext.tsx
│   │   ├── markdown
│   │   │   └── index.tsx
│   │   ├── renderContent.tsx
│   │   └── virtual
│   │       ├── grid.tsx
│   │       ├── index.tsx
│   │       └── list.tsx
│   ├── layout
│   │   ├── index.tsx
│   │   ├── menu-layout
│   │   │   ├── header.tsx
│   │   │   ├── index.tsx
│   │   │   └── itemHeader.tsx
│   │   └── menu-layout-new
│   │       ├── index.tsx
│   │       └── menu.tsx
│   └── md-custom
│       ├── card
│       │   └── BorderColorCard.tsx
│       ├── configForm
│       │   └── index.tsx
│       ├── dataGrid
│       │   └── index.tsx
│       ├── dialog
│       │   ├── confirm.tsx
│       │   ├── dialog.tsx
│       │   ├── dialogConfirm.tsx
│       │   └── index.tsx
│       ├── drawer
│       │   ├── drawer.tsx
│       │   └── index.tsx
│       ├── form
│       │   ├── form.tsx
│       │   ├── formItem.tsx
│       │   ├── index.tsx
│       │   └── select.tsx
│       ├── formModal
│       │   └── index.tsx
│       ├── menu
│       │   └── index.tsx
│       ├── progress
│       │   ├── BorderLinearProgress.tsx
│       │   └── index.tsx
│       ├── table
│       │   └── index.tsx
│       └── tabs
│           └── index.tsx
├── config
│   └── router.tsx
├── data
│   ├── README.md
│   ├── account
│   │   ├── default.ts
│   │   ├── guard.ts
│   │   └── interface.ts
│   ├── console
│   │   └── log.ts
│   ├── engine
│   │   └── index.ts
│   ├── github
│   │   └── gitemoji.ts
│   ├── help
│   │   ├── commit_website.md
│   │   ├── develop
│   │   │   └── 部分文件说明.md
│   │   └── index.ts
│   ├── logo
│   │   └── index.ts
│   ├── main
│   │   └── index.ts
│   ├── navigation
│   │   ├── all.ts
│   │   ├── classify.ts
│   │   ├── index.ts
│   │   ├── index.tsx
│   │   ├── interface.ts
│   │   └── types
│   │       └── classify.ts
│   ├── npm
│   │   └── package.ts
│   └── website.ts
├── favicon.svg
├── hooks
│   └── debounce.ts
├── index.css
├── locales
│   ├── en-US.json
│   ├── index.ts
│   └── zh-CN.json
├── logo.svg
├── main.tsx
├── pages
│   ├── help
│   │   └── index.tsx
│   ├── index
│   │   ├── components
│   │   │   ├── nav-drawer
│   │   │   │   └── index.tsx
│   │   │   ├── search-input
│   │   │   │   ├── engineChip.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── sugPopper.tsx
│   │   │   └── sites
│   │   │       ├── README.md
│   │   │       ├── dialog.tsx
│   │   │       ├── index.tsx
│   │   │       └── siteCard.tsx
│   │   └── index.tsx
│   ├── navigation
│   │   ├── components
│   │   │   ├── WebisteCard.tsx
│   │   │   ├── searchInput.tsx
│   │   │   └── websiteCardNew.tsx
│   │   └── index.tsx
│   └── setting
│       ├── components
│       │   ├── contentList.tsx
│       │   ├── contentTitle.tsx
│       │   ├── itemAccordion.tsx
│       │   └── itemCard.tsx
│       └── index.tsx
├── typings
│   ├── global.ts
│   └── index.ts
├── utils
│   ├── color.ts
│   ├── common.ts
│   ├── info
│   │   └── index.ts
│   ├── regexp
│   │   └── index.ts
│   ├── request
│   │   ├── index.ts
│   │   └── interface.d.ts
│   ├── storage
│   │   ├── README.md
│   │   └── index.ts
│   ├── theme.ts
│   └── updateData.ts
├── views
│   └── setting
│       ├── about
│       │   ├── beta
│       │   │   ├── docs.mdx
│       │   │   └── index.tsx
│       │   ├── commits
│       │   │   └── index.tsx
│       │   ├── index.tsx
│       │   └── releases
│       │       └── index.tsx
│       ├── auth
│       │   ├── components
│       │   │   ├── accountCard.tsx
│       │   │   └── handleAccountDialog.tsx
│       │   ├── index.tsx
│       │   ├── info.tsx
│       │   ├── others.tsx
│       │   └── utils
│       │       └── acount.ts
│       ├── data
│       │   ├── backup
│       │   │   └── index.tsx
│       │   └── index.tsx
│       ├── features
│       │   ├── engine
│       │   │   └── index.tsx
│       │   ├── index.tsx
│       │   └── message
│       │       └── index.tsx
│       ├── lab
│       │   └── index.tsx
│       ├── navigation
│       │   └── index.tsx
│       ├── otherApis
│       │   └── index.tsx
│       └── personalise
│           ├── background
│           │   ├── everyDay.tsx
│           │   ├── index.tsx
│           │   ├── link.tsx
│           │   └── random.tsx
│           ├── components
│           │   └── example.tsx
│           ├── index.tsx
│           ├── logo
│           │   └── index.tsx
│           └── theme
│               └── theme.tsx
└── vite-env.d.ts

```



## 引用资源

**原项目：**[Search-Next](https://github.com/virzs/Search-Next)

[Search Next—在线预览](http://dev.search.virs.xyz)
