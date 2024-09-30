// i18n.js
import { I18n } from 'i18n-js';

import en from './en.json';
import ar from './ar.json';

const i18n = new I18n();
// Set translations
i18n.translations = {
  en,
  ar,
};



export default i18n;
