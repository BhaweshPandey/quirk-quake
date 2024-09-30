import {
  Flex,
  Text,
  Button,
  useMantineTheme,
  Box,
  Image
} from '@mantine/core';
import React from 'react';
import classes from './OurExpertise.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Images } from '@/public';
// import Image from 'next/image';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

const OurExpertise = (props: { 
  languageLocale:any;
  isDarkTheme: boolean 
}) => {
  const theme = useMantineTheme();

  return (
    <Flex direction={'column'} className={classes.ourExpertiseOuterContainer}>
      <Flex className={classes.ourExpertiseContainer}>
        <Flex className={classes.ourExpertiseLeftSection}>
          <Text
            className={classes.ourExpertiseHeadingSize}
            c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
          >
            {props.languageLocale.t('landingPageSeven.yourVision')}
          </Text>
          <Text
            className={classes.ourExpertiseParagraphSize}
            c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
            mt={'15px'}
          >
            {props.languageLocale.t('landingPageSeven.atCaptureStudio')}
          </Text>
          <Button className={classes.bookBtn}>
            {props.languageLocale.t('landingPageSeven.requestaConsultation')}
            <Box className={props.languageLocale.locale !== 'ar' ? classes.enArrow : classes.arArrow}>
              <IconChevronRight size={20} className={classes.rightArrowIcon} />
            </Box>
          </Button>
        </Flex>
        <Flex className={classes.ourExpertiseRightSection}></Flex>
      </Flex>
      <Flex className={classes.ourExpertiseImageSection}>
        <Flex direction={'column'}>
          <Image
            src={Images.map}
            alt={'map'}
            className={classes.mapImage}
            width={303}
            height={400}
          />
          <Text
            className={classes.ourExpertiseHeadingSize}
            c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
          >
            {props.languageLocale.t('landingPageSeven.map')}
          </Text>
        </Flex>
        <Flex direction={'column'} className={classes.cultureSection}>
          <Image
            src={Images.culture}
            alt={'map'}
            className={classes.culture}
            width={303}
            height={400}
          />
          <Text
            className={classes.ourExpertiseHeadingSize}
            c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
          >
            {props.languageLocale.t('landingPageSeven.culture')}
          </Text>
        </Flex>
        <Flex direction={'column'} className={classes.personalitySection}>
          <Image
            src={Images.personality}
            alt={'map'}
            className={classes.personalityImage}
            width={303}
            height={400}
          />
          <Text
            className={classes.ourExpertiseHeadingSize}
            c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
          >
            {props.languageLocale.t('landingPageSeven.personality')}
          </Text>
        </Flex>
      </Flex>
      {/* <Flex className={classes.nextSection}>
        <Box variant="default" bg={'transparent'} className={classes.nextButton}>
          <Flex className={classes.nextOuterSection}>
            <Image
              src={Images.next}
              alt={'horizontal_line'}
              width={10}
              height={2}
              className={classes.nextImage}
            />
            <Flex className={classes.nextWithIcon}>
              <Text
                pl={'15px'}
                c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
              >
                {props.languageLocale.t('landingPageSeven.next')}{' '}
              </Text>
              <Box className={props.languageLocale.locale !== 'ar' ? classes.enArrow : classes.arArrow}>
                <IconChevronRight size={20}/>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex> */}
    </Flex>
  );
};

export default OurExpertise;
