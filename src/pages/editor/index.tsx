/*
 * @Author: kevyn
 * @Date: 2022-02-23 10:37:04
 * @LastEditors: kevyn
 * @LastEditTime: 2022-03-01 12:37:34
 */
import { PageProps } from '@/typings';
import { Add, AddCircle, AddCircleOutline, Article, BugReport, Home, MoreVert, Search, Settings } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActionArea, CardContent, CardHeader, Checkbox, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { height } from '@mui/system';
import React from 'react';
import Vditor from "vditor"
import 'vditor/dist/index.css'


export interface EditorPageProps extends PageProps {
  children: any;
}

function generate(element: React.ReactElement) {
  return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}



const EditorPage: React.FC<EditorPageProps> = ({
  children,
  route,
  ...props
}) => {
  const [text, setText] = React.useState("**Hello world!!!** <IFRAME SRC='javascript:javascript:alert(window.origin);'></IFRAME>");

  const heightTitle = '80px';

  const heightEditor = {
    height: 'calc(100% - ' + heightTitle + ')',
  };

  const [dense, setDense] = React.useState(false);


  const changeText = (value: string) => {
    //setText(value);
  };

  React.useEffect(() => {
    const vditor = new Vditor('vditor', {
      after: () => {
      },
      height: '100%' ,
      icon: 'material',
      cache: {
        enable: false,
      },
      preview: { 
        markdown: { 
          autoSpace: true 
        },
        hljs: {
          "style": "rrt",
          "lineNumber": true
        },
      },
      value: text,
      input: (value) => {
        changeText(value);
      },
    });
    
  }, [changeText]);

  return (
    <Grid container 
      className='h-screen'
    >
      <Grid item xs={2} className='h-full border'>
        <Box className='h-full overflow-x-hidden overflow-y-auto'>
          <nav aria-label="main mailbox folders ">
            <Stack
              direction="row"
              spacing={0}
            >
              <Box>
                <Tooltip title="回到首页">
                  <IconButton>
                    <Home fontSize="large"  />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <FormControl sx={{ m: 1 }} variant="outlined" >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    onChange={() => {}}
                    size="small"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {}}
                          onMouseDown={() => {}}
                          edge="end"
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Stack>
            <Box>
                <LoadingButton
                  sx={{
                    'width':'100%'
                  }}
                  size="small"
                  color="inherit"
                  onClick={()=>{

                  }}
                  loading={false}
                  loadingPosition="start"
                  startIcon={
                    <AddCircleOutline />
                  }
                  variant="text"
                >
                  新增文集
                </LoadingButton>
            </Box>
          </nav>
          <nav aria-label="secondary mailbox folders" >
            <List dense={dense}>
              {generate(
                <ListItem disablePadding secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <Settings fontSize="small"/>
                      </IconButton>
                    }>
                  <ListItemButton>
                    <ListItemText primary="日记本记录" />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </nav>
        </Box>
      </Grid>
      
      <Grid item xs={3} className='h-full border'>
        <Box className='h-full overflow-x-hidden overflow-y-auto'>
          <Box>
              <LoadingButton
                sx={{
                  'width':'100%'
                }}
                size="large"
                color="inherit"
                onClick={()=>{

                }}
                loading={false}
                loadingPosition="start"
                startIcon={
                  <AddCircle />
                }
                variant="text"
              >
                新增文章
              </LoadingButton>
          </Box>
          <Divider />
          <Box >
            <List dense={dense} className='py-0'>
              {generate(
                <Box>
                <ListItem disablePadding secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <MoreVert />
                      </IconButton>
                    }>
                  <ListItemButton>
                    <ListItemIcon>
                      <Article sx={{ fontSize: 40 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="文本标题" 
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            2022-01-02 19:37:56
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                <Divider component="li" />
                </Box>
              )}
            </List>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={7} className='h-full '>
        <Box id='title' sx={{
          height: heightTitle,
        }}>
          <Box sx={{
            textAlign: 'right',
            height:'24px',
          }}>
            <Typography variant="overline" display="block" gutterBottom className='text-gray-500 font-mono px-3'>
              已保存
            </Typography>
          </Box>
          <Box>
            <TextField fullWidth 
            type="search"
            size="medium"
            placeholder='2022-01-30'
            inputProps={{style: {fontSize: 33}}} // font size of input text
            InputLabelProps={{style: {fontSize: 33}}} // font size of input label

            variant="standard"/>
          </Box>
        </Box>
        <Box style={heightEditor}
          id="vditor" />
      </Grid>
    </Grid>
  );
};

export default EditorPage;