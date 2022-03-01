/*
 * @Author: kevyn
 * @Date: 2022-02-08 14:42:44
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-22 16:17:04
 */

export interface SearchEngineValueTypes {
  id: string; // id
  name: string; // 搜索引擎名称
  value: string; // 搜索引擎值
  href: string; // 搜索引擎链接
  sugurl?: string; // 搜索引擎热词链接
  icon: string; // 搜索引擎图标
  isShow: boolean; // 是否显示
  selected: boolean; // 是否选中
}

export default [
  {
    id: '3176606942b5445a913c099aeac9ddb0',
    name: '网络',
    value: 'bing',
    href: 'https://cn.bing.com/search?q=',
    sugurl:
      'https://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug',
    icon: './img/engineLogo/bing.ico',
    isShow: true,
    selected: true,
  },
  {
    id: '4de5457415f1429ea318f8b112a59a6c',
    name: '文本',
    value: 'google',
    href: 'https://www.google.com/search?q=',
    sugurl:
      'https://suggestqueries.google.com/complete/search?client=youtube&q=#content#&jsonp=window.google.ac.h',
    icon: './img/engineLogo/google.ico',
    isShow: true,
    selected: false,
  },
  {
    id: 'e9275210f149443b9d554a59861887c9',
    name: '工具',
    value: 'sougou',
    href: 'https://www.sogou.com/web?query=',
    sugurl: 'https://www.sogou.com/suggnew/ajajjson?type=web&key=#content#',
    icon: './img/engineLogo/sougou.ico',
    isShow: true,
    selected: false,
  },
  // {
  //   id: '755551cec9054314a50e74ac9130c34b',
  //   name: '漫画',
  //   value: 'baidu',
  //   href: 'https://www.baidu.com/s?wd=',
  //   sugurl: 'https://suggestion.baidu.com/su?wd=#content#&cb=window.baidu.sug',
  //   icon: './img/engineLogo/baidu.svg',
  //   isShow: true,
  //   selected: false,
  // },
  // {
  //   id: 'e9275210f149443b9d554a59861887c8',
  //   name: '视频',
  //   value: 'sougou',
  //   href: 'https://www.sogou.com/web?query=',
  //   sugurl: 'https://www.sogou.com/suggnew/ajajjson?type=web&key=#content#',
  //   icon: './img/engineLogo/sougou.ico',
  //   isShow: true,
  //   selected: false,
  // },
  // {
  //   id: 'e9275210f149443b9d554a59861887c9',
  //   name: '工具',
  //   value: 'sougou',
  //   href: 'https://www.sogou.com/web?query=',
  //   sugurl: 'https://www.sogou.com/suggnew/ajajjson?type=web&key=#content#',
  //   icon: './img/engineLogo/sougou.ico',
  //   isShow: true,
  //   selected: false,
  // },
] as SearchEngineValueTypes[];
