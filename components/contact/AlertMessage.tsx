'use client';

import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslations } from 'next-intl';

interface AlertMessageProps {
  variant: string;
  message: string;
  dismissible?: boolean | string;
  onClose: () => void;
}

export default function AlertMessage({ variant, dismissible, message, onClose }: AlertMessageProps) {
  const t = useTranslations('contact');
  return (
    <Alert variant={variant} dismissible={!!dismissible} onClose={onClose}>
      {message}
    </Alert>
  );
}
