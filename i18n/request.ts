import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      common: (await import(`../public/locales/${locale}/common.json`)).default,
      home: (await import(`../public/locales/${locale}/home.json`)).default,
      about: (await import(`../public/locales/${locale}/about.json`)).default,
      projects: (await import(`../public/locales/${locale}/projects.json`)).default,
      contact: (await import(`../public/locales/${locale}/contact.json`)).default,
    }
  };
});
