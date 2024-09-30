// import { translate } from '@/i18n';
import { Box, Center, Text, useMantineColorScheme, useMantineTheme, Flex, Image } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './ExploreSection.module.css';
import { Images } from '@/public';

// import Image from 'next/image';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';

export default function ExploreSection(props: {
  isDarkTheme: boolean;
  languageLocale: any;
}) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();



  const exploreData = [
    {
      img: Images.computer,
      heading: 'professionalEditing',
      content: 'yourCreativity',
    },
    {
      img: Images.book,
      heading: 'longHour',
      content: 'yourCreativity',
    },
    {
      img: Images.cameraEquipment,
      heading: 'extensiveEquipment',
      content: 'yourCreativity',
    },
  ];

  return (
    <Box mt="100px">
      <Center>
        <Text
          className={classes.heading}
          c={props.isDarkTheme ? theme.colors.white[0] : theme.colors.darkBlue[0]}
        >
          {props.languageLocale.t('landingPageSeven.exploreOur')}
        </Text>
      </Center>

      <Flex w={'90%'} className={classes.exploreDataOuterContainer}>
     { exploreData.map((item) => {
        return (
          <Flex 
          className={classes.exploreDataTitleContainer}
          >
          <img src={item.img} alt={'computer'} width={100} height={100}/>
          <Text
          className={classes.exploreDataTitle}
          >{props.languageLocale.t(`landingPageSeven.${item.heading}`)}</Text>
          <Text mt={'7px'} ta={'center'}>{props.languageLocale.t(`landingPageSeven.${item.content}`)}</Text>
    </Flex>
        )
      } )
    }
      </Flex>
    </Box>
  );
}
