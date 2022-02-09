# Stitches-Face

Stitches-Face 为「玩具箱」系列的 Web UI 工程。由于与原始项目的定位存在差异，本项目针对个性化需求做了对应的代码改装，以及三方接口调用。

**原项目：**[Search-Next](https://github.com/virzs/Search-Next)

## 启动项目

基础环境需要 nodejs（版本不限，建议最新）、npm（yarn 也可以），涉及梯子问题需要自行`Google（bing）`解决:)

**npm 环境**：

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

**yarn 环境**

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

## 项目结构

```

src
├──apis 接口相关文件夹
├── components 组件文件夹
│   ├── global 通用组件
│   ├── layout 布局组件
│   └── md-custom 二次封装 `material-ui` 组件
├── config 项目配置文件
├── data 项目静态数据文件
├── hooks 自定义 `hooks` 文件
├── locales 多语言文件
├── pages 页面文件夹
├── typings 通用类型文件
├── utils 通用工具函数
└── views 布局下视图文件


```

## 引用资源

--none--
