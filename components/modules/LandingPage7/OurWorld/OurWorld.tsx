import React from 'react';
import classes from './OurWorld.module.css';
import {
  Flex,
  Text,
  Button,
  useMantineTheme,
  Image,
  Box,
} from '@mantine/core';
import { Images } from '@/public';
// import Image from 'next/image';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

const OurWorld = (props: { 
  languageLocale:any;
}) => {
  const theme = useMantineTheme();
  const isRtl = props.languageLocale.locale === 'ar';
 

  return (
    <Flex
      className={props.languageLocale.locale === 'ar' ? classes.ourWorldRtl : classes.ourWorld}
      bg={theme.colors.red[0]}
    >
      <Flex
        direction={'column'}
        className={
          props.languageLocale.locale === 'ar' ? classes.stepIntoOurWorldRtl : classes.stepIntoOurWorld
        }
      >
        <Text className={classes.headingSize} c={theme.colors.white[4]}>
          {props.languageLocale.t('landingPageSeven.stepInto')}
        </Text>
        <Text className={classes.paragraphSize} c={theme.colors.white[4]}>
          {props.languageLocale.t('landingPageSeven.exploreOurStudioLike')}
        </Text>
        <Button className={classes.bookBtn}>
          <Flex gap={'20px'}>
            <Text c={theme.colors.black[3]}>{props.languageLocale.t('landingPageSeven.exploreOurStudio')}</Text>
            <Box className={props.languageLocale.locale !== 'ar' ? classes.enArrow :  classes.arArrow}> 
              <Image src={Images.ourWorldRightArrowIcon} alt={'map'} width={30} height={30} />
            </Box>
          </Flex>
        </Button>
      </Flex>
      <Flex w="100%" className={classes.ourWorldImageSection}>
      <Image
      src={Images.stepIntoOurWorld}
      alt="map"
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '450px', // To set a specific max width
        ...(isRtl && {
          transform: 'scaleX(-1)' // Example of an RTL adjustment, flip horizontally
        })
      }}
      width={450}
      height={547}
    />
      </Flex>
    </Flex>
  );
};

export default OurWorld;
