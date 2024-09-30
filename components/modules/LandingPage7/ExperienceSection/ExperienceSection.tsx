import { Images } from '@/public';
import { Box, Button, Flex, Text, useMantineTheme, Image } from '@mantine/core';
import React from 'react';
import classes from './ExperienceSection.module.css';
import { IconChevronRight } from '@tabler/icons-react';
// import Image from 'next/image';
import { useMantineColorScheme } from '@mantine/core';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

export default function ExperienceSection(props: {
  languageLocale:any;
  isDarkTheme: boolean;
}) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  let i18n = new I18n({
    en,
    ar,
  });

  if (typeof localStorage !== 'undefined') {
    const savedLocale = localStorage.getItem('lang');
    if (savedLocale) {
      i18n.locale = savedLocale;
    }
  }
  return (
    <Flex mt="150px" justify={'space-between'} className={classes.experienceSection}>
      <img src={Images.union} alt="union" className={classes.union} width={500} height={500} />
      <Box className={classes.experienceSectionDescription}>
        <Text className={classes.heading}>
          {props.languageLocale.t('landingPageSeven.immortalize')}
        </Text>
        <Text
          className={classes.subHeading}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.experiencePhotography')}
        </Text>
        <Text
          className={classes.content}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.withOurState')}
        </Text>

        <Button className={props.languageLocale.locale == 'ar' ? classes.bookBtnArabic : classes.bookBtn}>
          <Text className={classes.bookBtnText}>
            {props.languageLocale.t('landingPageSeven.bookSession')}
            &nbsp; &nbsp;
          </Text>
          <Box
            mt={'7px'}
            className={props.languageLocale.locale !== 'ar' ? classes.enArrow : classes.arArrow}
          >
            <IconChevronRight size={16} />
          </Box>
        </Button>
      </Box>
    </Flex>
  );
}
