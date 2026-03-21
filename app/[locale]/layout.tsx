import { routing } from '@/i18n/routing';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import StyledComponentsRegistry from '@/lib/registry';
import ClientProviders from '@/components/ClientProviders';
import { notFound } from 'next/navigation';
import React from 'react';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
        </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <ClientProviders locale={locale}>
                    {children}
                </ClientProviders>
            </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
