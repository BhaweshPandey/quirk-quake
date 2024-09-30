import React from 'react';
import classes from './OurGallery.module.css';
import {
  Flex,
  Text,
  Button,
  useMantineTheme,
  Image
} from '@mantine/core';
import { Images } from '@/public';
// import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import { useViewportSize } from '@mantine/hooks';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

const OurGallery = (props: { 
  isDarkTheme: boolean;
  languageLocale:any;
}) => {
  const isMobileView = useMediaQuery('(max-width: 1366px)');
  const { width } = useViewportSize();
  const theme = useMantineTheme();


  return (
    <Flex direction={'column'}>
      <Flex direction={'column'} w={'92%'} mx={'auto'}>
        <Text
          className={classes.ourGalleryHeading}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.journeyThrough')}
        </Text>
        <Text
          className={classes.ourGalleryDescription}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.immerseYourself')}
        </Text>
      </Flex>
      <Flex className={classes.galleryFirstSection} w={'92%'} mx={'auto'}>
        <Flex>
          <Image
            src={Images.galleryImageOne}
            alt={'map'}
            className={classes.galleryImageOne}
            width={isMobileView ? 0.5710102489 * width : 780}
            height={isMobileView ? 0.29428989751 * width : 402}
          />
        </Flex>
        <Flex>
          <Image
            src={Images.galleryImageTwo}
            alt={'map'}
            className={classes.galleryImageTwo}
            width={isMobileView ? 0.305 * width : 410}
            height={isMobileView ? 0.29428989751 * width : 402}
          />
        </Flex>
      </Flex>
      <Flex className={classes.gallerySecondSection} w={'92%'} mx={'auto'}>
        <Flex>
          <Image
            src={Images.galleryImageThree}
            alt={'map'}
            className={classes.galleryImageThree}
            width={isMobileView ? 0.30600292825 * width : 418}
            height={isMobileView ? 0.60322108345 * width : 824}
          />
        </Flex>
        <Flex direction={'column'} className={classes.thirdSectionOuterContainer}>
          <Image
            src={Images.galleryImageFour}
            alt={'map'}
            className={classes.galleryImageFour}
            width={isMobileView ? 0.5710102489 * width : 780}
            height={isMobileView ? 0.29428989751 * width : 402}
          />
          <Flex className={classes.galleryThirdSection}>
            <Flex>
              <Image
                src={Images.galleryImageFive}
                alt={'map'}
                className={classes.galleryImageFive}
                width={isMobileView ? 0.27818448023 * width : 380}
                height={isMobileView ? 0.29428989751 * width : 402}
              />
            </Flex>
            <Flex>
              <Image
                src={Images.galleryImageSix}
                alt={'map'}
                className={classes.galleryImageFive}
                width={isMobileView ? 0.27818448023 * width : 380}
                height={isMobileView ? 0.29428989751 * width : 402}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurGallery;
