import { Box, Button, Text, useMantineTheme } from '@mantine/core';
import React, { useEffect, useState, useContext } from 'react';
import classes from './HeroSection.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Images } from '@/public';
import {
  useMantineColorScheme,
} from '@mantine/core';
import {I18n} from 'i18n-js';

import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

const i18n = new I18n();

i18n.translations = {
  en,
  ar,
};
import Image from 'next/image'


export default function HeroSection(props: { 
  languageTranslate: string 
  isDarkTheme:boolean; 
  languageLocale:any;
  setLanguageLocale:any;
}) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();



  return (
    <div className={props.languageLocale.locale === 'ar' ? classes.boxBackgroundRtl : classes.boxBackground}>
      <Box className={classes.boxContent}>
        <Text className={props.languageLocale.locale === 'ar' ? classes.headingTextArabic : classes.headingText} bg={props.isDarkTheme ? theme.colors.black[0] : theme.colors.lightGray[0]} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.unleashThe')}
        </Text>
        <Text className={classes.headingText} bg={props.isDarkTheme ? theme.colors.black[0] : theme.colors.lightGray[0]} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
          {props.languageLocale.t('landingPageSeven.artOf')}
          </Text>
        <Box>
          <Text className={classes.headingTextPhotography} display={'block'} bg={props.isDarkTheme ? theme.colors.black[0] : theme.colors.lightGray[0]}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
          >
          {props.languageLocale.t('landingPageSeven.photography')}
          </Text>
          <Text className={classes.contentText} bg={props.isDarkTheme ? theme.colors.black[0] : theme.colors.lightGray[0]} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
          {props.languageLocale.t('landingPageSeven.captureStudio')}
          </Text>
        </Box>
        <Button className={classes.bookBtn}>
          
          <Text className={classes.bookBtnText}>
          {props.languageLocale.t('landingPageSeven.bookSession')}
          &nbsp; &nbsp;
          </Text>
          <Box mt={'7px'}
          className={props.languageLocale.locale !== 'ar' ? classes.enArrow :  classes.arArrow}
          >
          <IconChevronRight size={16} />
          </Box>
        </Button>
      </Box>
      <div className={classes.boxContentTwo}>
      </div>
      </div>
  );
}
