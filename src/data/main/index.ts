/*
 * @Author: kevyn
 * @Date: 2022-02-08 14:42:44
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-09 15:14:04
 */


export interface CopyrightType {
  startTime: string; // 开始时间
  endTime?: string; // 结束时间
  href: string; // 网址
  author: string; // 作者
  custom?: string; // 自定义信息
}

export interface mainDataTypes {
  id: string;
  author: string; // 作者
  version: string; // 信息版本，用于判断是否更新
  copyright: CopyrightType; // 版权信息
}

export default {
  id: 'e9ca43ccf6214f61a7b1bcb2f0dd4858',
  author: 'Vir',
  href: 'https://search.virs.xyz',
  version: '0.1',
  copyright: {
    startTime: '2022',
    href: 'https://github.com/kevynull/Stitches-Face',
    author: 'Kevyn',
  },
};
