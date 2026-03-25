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
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0) {
    return `/${targetLocale}`;
  }

  if (parts[0] === 'en' || parts[0] === 'es') {
    parts[0] = targetLocale;
    return `/${parts.join('/')}`;
  }

  return `/${targetLocale}/${parts.join('/')}`;
}

export function isRouteActive(pathname: string, locale: Locale, route: NavRoute): boolean {
  const target = getLocalizedPath(locale, route);
  return pathname === target || pathname === `${target}/`;
}
