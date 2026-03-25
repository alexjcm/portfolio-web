import enAbout from './messages/en/about.json';
import enCommon from './messages/en/common.json';
import enContact from './messages/en/contact.json';
import enHome from './messages/en/home.json';
import enProjects from './messages/en/projects.json';
import esAbout from './messages/es/about.json';
import esCommon from './messages/es/common.json';
import esContact from './messages/es/contact.json';
import esHome from './messages/es/home.json';
import esProjects from './messages/es/projects.json';
import type { Locale } from './config';

export const messages = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    projects: enProjects,
    contact: enContact,
  },
  es: {
    common: esCommon,
    home: esHome,
    about: esAbout,
    projects: esProjects,
    contact: esContact,
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
