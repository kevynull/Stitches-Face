/*
 * @Author: kevyn
 * @Date: 2022-02-10 14:17:38
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-28 13:50:18
 */

import { latestImg, SetBackgroundParams } from '@/apis/setting/background';
import Copyright from '@/components/global/copyright';
import { SearchEngineValueTypes } from '@/data/engine';
import { PageProps } from '@/typings';
import { getAccount } from '@/views/setting/auth/utils/acount';
import { Box, Container, CssBaseline, IconButton, Tooltip } from '@mui/material';
import { Bookmarks, BugReport, DataObject, LiveTv, MenuBook, Person, Settings } from '@mui/icons-material';
import classNames from 'classnames';
import React from 'react';
import SearchInput from '@/components/search/search-input';
import Sites from './components/sites';
import { useTranslation } from 'react-i18next';
import { AuthLogo, Navigation } from '@/data/account/interface';
import { getAuthDataByKey } from '@/apis/auth';
import { ClockData } from '@/data/logo';
import { useNavigate } from 'react-router-dom';
import { valueToPercent } from '@mui/base';
import PageHeader from '@/components/global/page-header';


const IndexPage: React.FC<PageProps> = (props) => {
  const history = useNavigate();
  const { t, i18n } = useTranslation();
  const logoRef = React.useRef<HTMLDivElement>(null);

  const [bg, setBg] = React.useState<SetBackgroundParams>();

  const [zoom, setZoom] = React.useState<boolean>(false);
  const [logoData, setLogoData] = React.useState<AuthLogo>({
    type: 'clock',
    show: true,
  } as AuthLogo);
  const [navigationData, setNavigationData] = React.useState<Navigation>(
    {} as Navigation,
  );
  const [navOpen, setNavOpen] = React.useState(false);

  const handleSearch = (value: string, engine: SearchEngineValueTypes) => {
    //window.open(`${engine.href}${value}`);
    console.log(`${engine.href}${value}`);
    
  };
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let str = e.currentTarget.value;
    if (str.length == 0){
      setZoom(false);
    }
  }

  // 获取并设置logo
  const setLogoSetting = () => {
    const id = localStorage.getItem('account');
    if (!id) return;
    const logoData = getAuthDataByKey(id, 'logo');
    setLogoData(logoData);
  };

  // 渲染时钟样式logo
  const renderClockLogo = () => {
    const clockType = logoData?.config?.clock?.type || 'clock1';
    const logo = ClockData.find((i) => i.value === clockType);
    return (
      <div
        className={classNames(
          'delay-75 transform duration-300',
          zoom ? 'scale-50' : 'scale-100',
        )}
      >
        {React.createElement(logo ? logo.component : ClockData[0].component)}
      </div>
    );
  };



  const setBackground = () => {
    const user = getAccount();
    const background = user.background;
    if (user && background) {
      switch (background.type) {
        case 'random':
          setBg(user.background.data);
          break;
        case 'everyday':
          latestImg().then((res) => {
            setBg(res.data.data[0]);
          });
          break;
        case 'link':
          setBg(user.background.data);
          break;
        case 'color':
          break;
      }
    } else {
    }
  };

  React.useEffect(() => {
    setBackground();
    setLogoSetting();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      className={classNames(
        'index-page flex flex-col h-screen bg-cover bg-center bg-secondary',
        bg ? 'inverse': '',
      )}
      style={{
        backgroundImage: bg
          ? `radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%), url('${bg?.url}')`
          : undefined,
      }}
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="flex-grow max-h-12 text-right align-middle">
            <PageHeader 
              background={bg ? true : false}
            />
            
            
        </Box>
        <div
          ref={logoRef}
          className={classNames(
            'index-logo-box items-center flex justify-center transition-all duration-300',
            zoom && logoData.show ? 'grow-0' : 'flex-grow',
            logoData.show ? 'max-h-48 sm:max-h-72' : 'max-h-32',
          )}
          style={{
            height:
              zoom && logoRef && logoRef.current
                ? '35%'
                : '100%',
          }}
        >
          {logoData.show && logoData.type === 'clock' && renderClockLogo()}
        </div>
        <div className="index-input-box flex-grow max-h-20 flex justify-center items-center">
          <SearchInput
            placeholder={t('placeholder.qing-shu-ru-sou-suo-nei-rong')}
            onPressEnter={handleSearch}
            onBtnClick={handleSearch}
            onFocus={() => {
              logoData.zoom && setZoom(true);
            }}
            onBlur={handleBlur}
          />
        </div>
        <div className="index-content-box flex-grow">
          <Sites />
        </div>
      </Container>
      <Copyright />
    </Box>
  );
};

export default IndexPage;
