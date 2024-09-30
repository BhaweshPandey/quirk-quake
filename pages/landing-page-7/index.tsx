import { Header } from '@/components/modules/LandingPage7/Header/Header';
import { Container } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import dynamic from 'next/dynamic'
import { I18n } from 'i18n-js';
import en from '../../i18n/en.json';
import ar from '../../i18n/ar.json';

const HeroSectionModule = await (dynamic(() => import('@/components/modules/LandingPage7/HeroSection/HeroSection'), { ssr: true }))

const ExperienceSectionModule = await (dynamic(() => import('@/components/modules/LandingPage7/ExperienceSection/ExperienceSection'), { ssr: true }))

const ExploreSectionModule = await (dynamic(() => import('@/components/modules/LandingPage7/ExploreSection/ExploreSection'), { ssr: true }))

const UnmatchedCreativityModule = await (dynamic(() => import('@/components/modules/LandingPage7/UnmatchedCreativity/UnmatchedCreativity'), { ssr: true }))

const OurExpertiseModule = await (dynamic(() => import('@/components/modules/LandingPage7/OurExpertise/OurExpertise'), { ssr: true }))

const OurGalleryModule = await (dynamic(() => import('@/components/modules/LandingPage7/OurGallery/OurGallery'), { ssr: true }))

const OurWorldModule = await (dynamic(() => import('@/components/modules/LandingPage7/OurWorld/OurWorld'), { ssr: true }))

const FooterModule = await (dynamic(() => import('@/components/modules/LandingPage7/Footer/Footer'), { ssr: true }))

export default function LandingPage() {
  const [languageTranslate, setlanguageTranslate] = useState('');
  let language: string = '';
  const theme = useMantineTheme();

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      language = localStorage.getItem('lang') || '';
      console.log("language",language)
      setlanguageTranslate(language);
    }
  }, []);

  

  let i18n = new I18n({
    en,
    ar,
  });


  const [languageLocale, setLanguageLocale] = useState(i18n);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("languageTranslate",languageTranslate)

  return (
    <Box
      bg={isDarkTheme ? 'black' : theme.colors.lightGray[0]}
      mt={'-15px'}
      pt={'15px'}
      dir={languageLocale.locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <Container size={'xl'}>
        <Header
        
          languageLocale={languageLocale}
          setLanguageLocale={setLanguageLocale}
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
        />
        <HeroSectionModule 
        languageTranslate={languageTranslate} 
        languageLocale={languageLocale}
        setLanguageLocale={setLanguageLocale}
        isDarkTheme={isDarkTheme} />
        <ExperienceSectionModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
        <ExploreSectionModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
      </Container>
       <Container size={'xl'} style={{ padding: '0px' }}>
        <UnmatchedCreativityModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
      </Container>
      <Container size={'xl'}>
        <OurExpertiseModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
        <OurGalleryModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
        <OurWorldModule languageLocale={languageLocale} />
        <FooterModule isDarkTheme={isDarkTheme} languageLocale={languageLocale}/>
      </Container> 
    </Box>
  );
}
