'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import Form from 'react-bootstrap/Form';
import React, { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';

import styles from './LocaleSwitcher.module.css';

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Form className={styles.pLeft}>
      <Form.Control 
        as="select" 
        onChange={handleLanguageChange as any} 
        className={styles.selectLang} 
        aria-label="Select language"
        value={locale}
        disabled={isPending}
      >
        <option value="en-US">English</option>
        <option value="es">Español</option>
      </Form.Control>
    </Form>
  );
};

export default LocaleSwitcher;
