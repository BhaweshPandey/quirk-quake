import React from 'react';
import classes from './Footer.module.css';
import { Flex, Text, useMantineTheme } from '@mantine/core';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';


const Footer = (props:{
  isDarkTheme:boolean;
  languageLocale:any;
}) => {
  const theme = useMantineTheme();


  return (
    <Flex className={classes.footerOuterContainer}>
      <Flex className={classes.footerCompanyLogo}>
        <Text c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>© 
        {props.languageLocale.t('landingPageSeven.captureStudioDesigned')}
         <span className={classes.logoColor}>{' '}
         {props.languageLocale.t('landingPageSeven.highpolarSoftwares')}
          </span></Text>
      </Flex>
      <Flex className={classes.footerNavMenu}>
        <Text c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
        {props.languageLocale.t('landingPageSeven.portfolio')}
        </Text>
        <Text c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
        {props.languageLocale.t('landingPageSeven.services')}
          </Text>
        <Text c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
        {props.languageLocale.t('landingPageSeven.blog')}
          </Text>
        <Text c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
        {props.languageLocale.t('landingPageSeven.about')}
          </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
