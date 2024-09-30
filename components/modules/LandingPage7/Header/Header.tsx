import { useState, useEffect } from 'react';
import {
  Container,
  Group,
  Burger,
  Text,
  Box,
  Button,
  Drawer,
  rem,
  ScrollArea,
  Flex,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';
// import { translate } from '@/i18n';
import { IconBrightnessDown } from '@tabler/icons-react';
import { TxKeyPath, translate } from '@/i18n';
import { I18n } from 'i18n-js';
import en from '../../../../i18n/en.json';
import ar from '../../../../i18n/ar.json';
const i18n = new I18n();
const links = [
  { link: '/home', label: 'home' },
  { link: '/services', label: 'services' },
  { link: '/about', label: 'about' },
  { link: '/portfolio', label: 'portfolio' },
];

export function Header(props: {
  languageLocale:any;
  setLanguageLocale:any;
  setIsDarkTheme: any;
  isDarkTheme: boolean;
}) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { setColorScheme, clearColorScheme, toggleColorScheme } = useMantineColorScheme();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [themes, setTheme] = useState('light');
  let i18n = new I18n({
    en,
    ar,
  });

  let language: string = '';
  if (typeof localStorage !== 'undefined') {
   localStorage.getItem('lang') || '';
  }
  
  if (typeof localStorage !== 'undefined') {
  console.log("language",localStorage.getItem('lang'))
  }

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedLocale = localStorage.getItem('lang');
    if (savedLocale) {
      i18n.locale = savedLocale;
      props.setLanguageLocale(i18n);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themes === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    console.log('savedTheme2', savedTheme);
    if (savedTheme === 'dark') {
      props.setIsDarkTheme(true);
    } else {
      props.setIsDarkTheme(false);
    }
  }

  if (!isMounted) {
    return null;
  }

  let languageValue: string = '';
  if (typeof localStorage !== 'undefined') {
    languageValue = localStorage.getItem('lang') || '';
  }

  

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      data-active={active === link.link || undefined}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
    <Text className={classes.menuLink} c={props.isDarkTheme ? 'white' : theme.colors.darkBlue[0]}>
        {props.languageLocale.t(`landingPageSeven.${link.label}`)}
      </Text>
    </a>
  ));

  

  const changeLanguage = () => {
    const newLocale = props.languageLocale.locale === 'en' ? 'ar' : 'en';
    i18n.locale = newLocale;
    props.setLanguageLocale(i18n);
    localStorage.setItem('lang', newLocale);
  };


  return (
    <>
      <header className={classes.header} style={{direction: props.languageLocale.locale === 'en' ? 'ltr' : 'rtl'}}>
        <Flex
          className={classes.inner}
        >
          <Box>
            <Text
              className={classes.heading}
              c={props.isDarkTheme ? 'white' : theme.colors.darkBlue[0]}
            >
              {props.languageLocale.t('landingPageSeven.headingCapture') as TxKeyPath}
            </Text>
            <Text
              className={classes.heading}
              pl={'27px'}
              c={props.isDarkTheme ? 'white' : theme.colors.darkBlue[0]}
            >
              {props.languageLocale.t('landingPageSeven.headingStudio')}
            </Text>
          </Box>

          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Flex gap={'10px'} style={{alignItems:'center'}}>
            <Group visibleFrom="sm">
              <Button variant="outline" className={classes.headerBtnStyle}>
                {props.languageLocale.t('landingPageSeven.hireUs')}
              </Button>
            </Group>
            <Button
              variant="default"
              onClick={() => {
                toggleTheme();
              }}
              className={classes.toggleThemeButton}
            >
              <IconBrightnessDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              {props.isDarkTheme ? (
                <Text>{props.languageLocale.t('landingPageSeven.light')}</Text>
              ) : (
                <Text>{props.languageLocale.t('landingPageSeven.dark')}</Text>
              )}
            </Button>
            <Flex
              className={classes.languageSection}
              gap={'4px'}
              onClick={() => {
                changeLanguage();
              }}
            >
              {props.languageLocale.locale === 'ar' ? (
                <Text c={props.isDarkTheme ? 'white' : theme.colors.black[0]}>عربي</Text>
              ) : (
                <Text c={props.isDarkTheme ? 'white' : theme.colors.black[0]}>en</Text>
              )}
            </Flex>
          </Flex>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" aria-label="menu"
          className={props.isDarkTheme ? classes.burgerColor : ''}          
          />
        </Flex>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md"        
        >
          <Flex direction={'column'} gap={'10px'}>
            {links.map((linksItem) => {
              return (
                <a href={linksItem.link} className={classes.link}>
                  {linksItem.label}
                </a>
              );
            })}
          </Flex>
        </ScrollArea>
      </Drawer>
    </>
  );
}
