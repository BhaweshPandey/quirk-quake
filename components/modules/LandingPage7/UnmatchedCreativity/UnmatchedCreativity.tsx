// import { Image } from '@mantine/core';
// import Image from 'next/image'
import { Flex, Text,useMantineTheme, Image } from '@mantine/core';
import classes from './UnmatchedCreativity.module.css';
import React from 'react';
import { Images } from '@/public';
import { useMediaQuery } from '@mantine/hooks';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

const UnmatchedCreativity = (
  props:{
    isDarkTheme:boolean;
    languageLocale:any;
  }
) => {
  const isMobileView  = useMediaQuery('(max-width: 767px)');
  const theme = useMantineTheme();


  return (
    <Flex className={classes.unmatchedCreativityOuterContainer}>
      <Flex className={classes.unmatchedCreativityImageSection}>
      <img
      src={Images.unmatchedCreativity}
      alt="Icon"
      style={{
        width: isMobileView ? '100%' : '700px',
        height: 'auto',
      }}
      width={700}
      height={508}
    />
      </Flex>
      <Flex direction={'column'} className={classes.unmatchedCreativityOuterSection}>
        <Flex direction={'column'} gap={'20px'} className={classes.unmatchedCreativityRightContainer}>
          <Text className={classes.unmatchedCreativityText} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
          {props.languageLocale.t('landingPageSeven.unmatchedCreativity')}
          </Text>
          <Text className={classes.unmatchedCreativityDescription} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
          {props.languageLocale.t('landingPageSeven.withOver')}
          </Text>
        </Flex>
        <Flex className={classes.unmatchedCreativityBottomTextSection}>
          <Flex direction={'column'}>
            <Text className={classes.unmatchedCreativityTextTypography} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>550+</Text>
            <Text className={classes.unmatchedCreativityParagraphSize} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
            {props.languageLocale.t('landingPageSeven.happyClients')}
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text className={classes.unmatchedCreativityTextTypography} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>38+</Text>
            <Text className={classes.unmatchedCreativityParagraphSize} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
            {props.languageLocale.t('landingPageSeven.awardsWon')}
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text className={classes.unmatchedCreativityTextTypography} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>9000+</Text>
            <Text className={classes.unmatchedCreativityParagraphSize} c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}>
            {props.languageLocale.t('landingPageSeven.capturedEvents')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UnmatchedCreativity;
