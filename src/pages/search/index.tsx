import { latestImg, SetBackgroundParams } from '@/apis/setting/background';
import { Box, Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, CssBaseline, Divider, Grid, IconButton, Link, Skeleton, Stack, Tooltip, Typography } from '@mui/material';
import { Bookmarks, BugReport, DataObject, Home, LiveTv, MenuBook, Person, Reddit, Settings } from '@mui/icons-material';
import classNames from 'classnames';
import React from 'react';
import Copyright from '@/components/global/copyright';
import { PageProps } from '@/typings';
import { Router } from '@/config/router';
import SearchInput from './components/search-input';
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
        <div className="flex-grow max-h-12 align-middle">
          <Grid container spacing={2}>
            <Grid item xs={12} className="text-right">
                <Tooltip title="用户">
                  <IconButton>
                    <Person />
                  </IconButton>
                </Tooltip>
                <Tooltip title="手办页面调试">
                  <IconButton>
                    <Reddit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="测试">
                  <IconButton onClick={() => {
                    history('/');
                  }}>
                    <BugReport />
                  </IconButton>
                </Tooltip>
                <Tooltip title="视频页面调试">
                  <IconButton>
                    <LiveTv />
                  </IconButton>
                </Tooltip>
                <Tooltip title="文章页面调试">
                  <IconButton>
                    <MenuBook />
                  </IconButton>
                </Tooltip>
                <Tooltip title="查询页面调试">
                  <IconButton onClick={() => history('/search')}>
                    <DataObject />
                  </IconButton>
                </Tooltip>
                <Tooltip title="设置">
                  <IconButton onClick={() => history('/setting')}>
                    <Settings />
                  </IconButton>
                </Tooltip>
            </Grid>
          </Grid>
          
          
        </div>
        <div className="flex flex-row justify-center bg-gray-70">
          <SearchInput />
        </div>
        <main>

        </main>
      </Container>
      <Copyright />
    </Box>
  );
};

export default SearchPage;
