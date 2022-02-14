/*
 * @Author: kevyn
 * @Date: 2022-02-14 14:00:07
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-14 16:13:12
 */   
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

export interface ItemProps {
  id: string,
  name: string,
  url: string,
  isFamilyFriendly: boolean,
  displayUrl: string,
  snippet: string,
  dateLastCrawled: string,
  language: string,
  isNavigational: boolean
}

export interface MainProps {
  posts: ReadonlyArray<ItemProps>;
  title: string;
}

const MainBody: React.FC<MainProps> = ({
  posts,
  title
}) => {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .search': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Box className='search'>
          <Typography gutterBottom variant="h5" component="h2">
            {post.name}
          </Typography>
          <Typography>
            {post.url}
          </Typography>
          <Typography>
            {post.snippet}
          </Typography>
          <Typography>
            {post.dateLastCrawled}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default MainBody;