import { defaultLocale } from './config';
import type { Locale } from './config';

export type NavRoute = 'home' | 'about' | 'projects' | 'contact';

const routeSegment: Record<NavRoute, string> = {
  home: '',
  about: 'about',
  projects: 'projects',
  contact: 'contact',
};

export function getLocalizedPath(locale: Locale, route: NavRoute): string {
  const segment = routeSegment[route];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return segment ? `${prefix}/${segment}` : prefix || '/';
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  const parts = cleanPath.split('/').filter(Boolean);

  const hasLocalePrefix = parts[0] === 'en' || parts[0] === 'es';
  const pathSegments = hasLocalePrefix ? parts.slice(1) : parts;

  if (targetLocale === defaultLocale) {
    return pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '/';
  }

  return pathSegments.length > 0
    ? `/${targetLocale}/${pathSegments.join('/')}`
    : `/${targetLocale}`;
}

export function isRouteActive(pathname: string, locale: Locale, route: NavRoute): boolean {
  const target = getLocalizedPath(locale, route);
  return pathname === target || pathname === `${target}/`;
}
