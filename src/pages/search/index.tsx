
import { Box, Container, CssBaseline, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { GitHub, BugReport, DataObject, Twitter, Facebook, LiveTv, MenuBook, Person, Reddit, Settings } from '@mui/icons-material';
import React from 'react';
import Copyright from '@/components/global/copyright';
import { PageProps } from '@/typings';
import { Router } from '@/config/router';
import SearchInput from '@/components/search/search-input';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import MainBody from './components/main-body';
import Sidebar from './components/sidebar';
import { useTranslation } from 'react-i18next';
import { SearchEngineValueTypes } from '@/data/engine';
import PageHeader from '@/components/global/page-header';


export interface SearchPageProps extends PageProps {
  children: any;
}

const SearchPage: React.FC<SearchPageProps> = ({
  children,
  route,
  ...props
}) => {
  const history = useNavigate();

  const { t, i18n } = useTranslation();

  const handleSearch = (value: string, engine: SearchEngineValueTypes) => {
    // window.open(`${engine.href}${value}`);
    console.log(`${engine.href}${value}`);
  };

  const data = [
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0",
        "name": "react该如何学习？ - 知乎 - Zhihu",
        "url": "https://www.zhihu.com/question/362611561",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.zhihu.com/question/362611561",
        "snippet": "分享一些我脑海中认为比较正确的学习路径：. 先把 js 基础打好，基础不好的话或者觉得差不多就行的话，好歹把 es6 的东西看看，高频的就是箭头函数、class、解构运算符等语法. 看一下 react 官方文档中关于如何使用组件化思想分割页面的那篇教程，虽然内容 ...",
        "dateLastCrawled": "2022-02-11T16:34:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": true
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.1",
        "name": "React学习资源汇总 - 知乎",
        "url": "https://zhuanlan.zhihu.com/p/23527988",
        "isFamilyFriendly": true,
        "displayUrl": "https://zhuanlan.zhihu.com/p/23527988",
        "snippet": "React 入门，5个常用DEMO展示 如何学习React 给新手的 React&Webpack 上手教程 ReactJS 傻瓜教程 React 最简单的入门应用项目 入门 demo 官方入门 demo：可结合官方的入门文档 入门 demo-阮一峰：结合入门文章 模仿知乎界面的一个简单React demo",
        "dateLastCrawled": "2022-02-11T11:55:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.2",
        "name": "从零学习 React 技术栈系列教程 - 知乎",
        "url": "https://zhuanlan.zhihu.com/p/28769080",
        "isFamilyFriendly": true,
        "displayUrl": "https://zhuanlan.zhihu.com/p/28769080",
        "snippet": "Hello大家好，我是余博伦，在接下来的一段时间里，由我和大家从零开始共同学习React技术栈的相关知识。教程将会以连载的形式发布在我的个人博客和微信公众号上，以文字教程为主，辅以一些代码示例供同学们参考，在…",
        "dateLastCrawled": "2022-02-11T12:39:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.3",
        "name": "求大神推荐一些react.js的优秀书籍或社区？ - 知乎 - Zhihu",
        "url": "https://www.zhihu.com/question/51804158",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.zhihu.com/question/51804158",
        "snippet": "一来是 React 还在不断地变动，一些过去大家习以为常的操作可能在未来会被官方认为是反模式（比如推出 React Hooks 的同时，也指出滥用高阶组件不可取）。二来如果时常关注知乎 React 话题的话其实也尽在掌握。",
        "dateLastCrawled": "2022-02-08T17:23:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.4",
        "name": "【小鹿线】React 知乎 实战项目_哔哩哔哩_bilibili",
        "url": "https://www.bilibili.com/video/BV1bg411c7K8/",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.bilibili.com/video/BV1bg411c7K8",
        "snippet": "4095播放 · 总弹幕数5 2021-09-19 18:33:40. 18 9 177 4. 稿件投诉. React 知乎 实战项目. 知识. 野生技能协会. 视频教程. 项目.",
        "dateLastCrawled": "2022-02-07T17:13:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.5",
        "name": "React 前端工程师学习路径 | 图雀社区 - 汇集精彩的实战技术教程",
        "url": "https://tuture.co/roadmaps/react/",
        "isFamilyFriendly": true,
        "displayUrl": "https://tuture.co/roadmaps/react",
        "snippet": "知乎上的 React Router 入门 教程 🇨🇳 关于 React Router v4 的一切 🇨🇳 简明 React Router v4 教程 🇨🇳 ⬆️返回顶部 进阶 Redux Redux 是 JavaScript 状态容器，提供可预测化的状态管理。可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用 ...",
        "dateLastCrawled": "2022-01-05T02:51:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.6",
        "name": "React 教程 | 菜鸟教程 - runoob.com",
        "url": "https://www.runoob.com/react/react-tutorial.html",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.runoob.com/react",
        "snippet": "React 教程 React 是一个用于构建用户界面的 JAVASCRIPT 库。 React 主要用于构建 UI，很多人认为 React 是 MVC 中的 V（视图）。 React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。 React 拥有较高的性能，代码逻辑 ...",
        "dateLastCrawled": "2022-02-11T16:12:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.7",
        "name": "React 官方中文文档 – 用于构建用户界面的 JavaScript 库",
        "url": "https://react.docschina.org/",
        "isFamilyFriendly": true,
        "displayUrl": "https://react.docschina.org",
        "snippet": "React 文档 教程 博客 社区 v 17.0.2 多语言 GitHub React 用于构建用户界面的 JavaScript 库 快速开始 入门教程 声明式 React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件 ...",
        "dateLastCrawled": "2022-02-12T14:17:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.8",
        "name": "React Api请求最佳实践react-query3使用教程（比swr更好用 ...",
        "url": "https://blog.csdn.net/qq_21567385/article/details/114171438",
        "isFamilyFriendly": true,
        "displayUrl": "https://blog.csdn.net/qq_21567385/article/details/114171438",
        "snippet": "前言 在 react-query 入门文章： 《 React Api 请求最佳实践 react-query 3 使用教程（ 比 swr 更好用更强大 ）》 中，我们学会了 react-query 的基本使用。我们注意到两个点： react-query 有全局的实例，可以管理全局的请求和数据，缓存就是在全局管理的，不论在哪个组件，存在 任意性 缓存是可以自由设定过期 ...",
        "dateLastCrawled": "2022-02-04T07:20:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    },
    {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.9",
        "name": "从Android到React Native开发（一、入门） - 简书",
        "url": "https://www.jianshu.com/p/97692b1c451d",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.jianshu.com/p/97692b1c451d",
        "snippet": "从Android到React Native开发（一、入门） 大家好┏ (ω)=，许久不见，一不小心断更就成为了一种习惯，因为最近掉React Native的坑里，无法自拔啊～(╯‵ ′)╯︵┻━┻。关于React Native是什么，各位可谷歌之，这里主要给大家安利下React Native，总结下一些从 <script>alert('t')</script> ...",
        "dateLastCrawled": "2022-02-11T16:59:00.0000000Z",
        "language": "zh_chs",
        "isNavigational": false
    }
];
const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHub },
    { name: 'Twitter', icon: Twitter },
    { name: 'Facebook', icon: Facebook },
  ],
};
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      className='flex flex-col h-full bg-cover bg-center bg-secondary'
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="flex-grow max-h-12 text-right align-middle">
          <PageHeader 
            background={false}
          />
        </Box>
        <div className="flex flex-row justify-center bg-gray-70">
          <SearchInput 
            placeholder={t('placeholder.qing-shu-ru-sou-suo-nei-rong')}
            onPressEnter={handleSearch}
            onBtnClick={handleSearch}
          />
        </div>
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <MainBody title="2,380,000 条结果" posts={data} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> 
          </Grid>
        </main>
      </Container>
      <Copyright />
    </Box>
  );
};

export default SearchPage;
