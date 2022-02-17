/*
 * @Author: kevyn
 * @Date: 2022-02-16 14:11:48
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-17 17:03:37
 */
import { Box, Container, CssBaseline, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { GitHub, BugReport, DataObject, Twitter, Facebook, LiveTv, MenuBook, Person, Reddit, Settings, Bookmarks, Home } from '@mui/icons-material';
import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import NavDrawer from './components/nav-drawer';
import { Navigation } from '@/data/account/interface';
import { getAuthDataByKey } from '@/apis/auth';

export interface PageHeaderProps {
  background?: boolean; // 是否存在背景
}



const PageHeader: React.FC<PageHeaderProps> = ({
  background,
  ...props
}) => {
  const history = useNavigate();

  const bg = background;

  const [navOpen, setNavOpen] = React.useState(false);

  const [navigationData, setNavigationData] = React.useState<Navigation>(
    {} as Navigation,
  );

  // 获取并设置 导航
  const setNavigationSetting = () => {
    const id = localStorage.getItem('account');
    if (!id) return;
    const navigationData = getAuthDataByKey(id, 'navigation');
    setNavigationData(navigationData);
  };

  React.useEffect(() => {
    setNavigationSetting();
  }, []);

  return (
    <span>
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)} />
      <Tooltip title="网址导航-on">
        <IconButton
          onClick={() => {
              setNavOpen(true);
          }}
        >
          <Bookmarks className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="用户">
        <IconButton onClick={() => {
            history('/');
          }}>
          <Home className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="用户">
        <IconButton>
          <Person className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="测试">
        <IconButton onClick={() => history('/loading')}>
          <BugReport className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="视频页面调试">
        <IconButton>
          <LiveTv className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="文章页面调试">
        <IconButton>
          <MenuBook className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="查询页面调试">
        <IconButton onClick={() => history('/search')}>
          <DataObject className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="网址导航">
        <IconButton
          onClick={() => {
            const type = navigationData.type ?? 'page';
            switch (type) {
              case 'drawer':
                setNavOpen(true);
                break;
              case 'page':
              default:
                history('/navigation/*');
                break;
            }
          }}
        >
          <Bookmarks className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
      <Tooltip title="设置">
        <IconButton onClick={() => history('/setting')}>
          <Settings className={classNames({'text-var-main-10': !!bg,})} />
        </IconButton>
      </Tooltip>
    </span>
  );
};

export default PageHeader;