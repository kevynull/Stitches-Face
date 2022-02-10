/*
 * @Author: Vir
 * @Date: 2021-03-25 14:01:37
 * @Last Modified by: Vir
 * @Last Modified time: 2021-03-27 14:42:52
 */

import { CopyrightType } from '@/data/main';
import { copyright as copyrightApi } from '@/apis/common';
import React from 'react';
import dayjs from 'dayjs';
import { Box, Container, Link } from '@mui/material';

interface CopyrightTypeWithVersion extends CopyrightType {
  version?: string;
}

const Copyright: React.FC = () => {
  const [copyright, setCopyright] = React.useState(
    {} as CopyrightTypeWithVersion,
  );

  const endTime = dayjs(new Date()).format('YYYY');

  const getCopyright = () => {
    copyrightApi().then((res) => {
      setCopyright(res.data);
    });
  };

  React.useEffect(() => {
    getCopyright();
  }, []);

  return (
    <Box component="footer" sx={{ py: 3,px: 2, mt: 'auto', }}>
      <Container maxWidth="sm" className='text-center'>
        <Link href={copyright.href} underline="none" rel="noopener" target="_blank" className='text-gray-300 font-mono'> 
        ©{copyright.startTime}-{endTime} by {copyright.author}. All rights reserved.
        </Link>
       </Container>
    </Box>
  );
};

export default Copyright;
