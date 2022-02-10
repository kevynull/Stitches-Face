import { latestImg, SetBackgroundParams } from '@/apis/setting/background';
import { Box, Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, IconButton, Link, Skeleton, Stack, Tooltip, Typography } from '@mui/material';
import { Bookmarks, BugReport, DataObject, Home, LiveTv, MenuBook, Person, Settings } from '@mui/icons-material';
import classNames from 'classnames';
import React from 'react';
import Copyright from '@/components/global/copyright';
import { PageProps } from '@/typings';
import { Router } from '@/config/router';
import SearchInput from './components/search-mini-input';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

export interface SearchPageProps extends PageProps {
  children: any;
}

const SearchPage: React.FC<SearchPageProps> = ({
  children,
  route,
  ...props
}) => {
  const history = useNavigate();
  const location = useLocation();
  const [menuList, setMenuList] = React.useState<Router[] | undefined>([]);
  const [breads, setBreads] = React.useState<Router[]>([]);

  const [bg, setBg] = React.useState<SetBackgroundParams>();

  const getBreadCrumbs = (routes: Router[], newLocation?: any) => {
    let breadCrumbs: Router[] = [];

    const findRoute = (routes: Router[] | undefined) => {
      if (!routes) return routes;
      const loc = newLocation ? newLocation : location;
      routes.forEach((i) => {
        if (loc.pathname.indexOf(i.path) !== -1) {
          breadCrumbs.push(i);
        }
        if (i.routes) {
          findRoute(i.routes);
        }
      });
    };
    findRoute(routes);

    return breadCrumbs;
  };

  React.useEffect(() => {
    if (location.pathname === '/search') {
      history(route?.routes?.[0].path || '/search', { replace: true });
    }
    setMenuList(route?.routes);
  }, []);

  React.useEffect(() => {
    const breads = getBreadCrumbs(route.routes || []);
    setBreads(breads);
  }, [location]);

  return (
    <div className=' flex flex-col h-screen bg-cover bg-center bg-secondary'>
      <div className="flex-grow max-h-12 align-middle">
        <Grid container spacing={2}>
          <Grid item xs={8} >
            <Tooltip title="回到首页" arrow>
              <IconButton
                size="small"
                onClick={() => {
                  history('/');
                }}
              >
                <Home />
              </IconButton>
            </Tooltip>

          </Grid>

          <Grid item xs={4} className="text-right">
              <Tooltip title="用户">
                <IconButton>
                  <Person
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="测试">
                <IconButton>
                  <BugReport
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="视频页面调试">
                <IconButton>
                  <LiveTv
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="文章页面调试">
                <IconButton>
                  <MenuBook
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="查询页面调试">
                <IconButton onClick={() => history('/search')}>
                  <DataObject
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="设置">
                <IconButton onClick={() => history('/setting')}>
                  <Settings
                    className={classNames({
                      'text-var-main-10': !!bg,
                    })}
                  />
                </IconButton>
              </Tooltip>
          </Grid>
        </Grid>
        
        
      </div>
      <div className="flex flex-row justify-center bg-gray-70">
        <SearchInput />
      </div>
      <div className="flex-grow max-h-8 text-center leading-8">
        <Copyright />
      </div>
    </div>
  );
};

export default SearchPage;
