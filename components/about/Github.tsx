'use client';

import React from 'react';
import Row from 'react-bootstrap/Row';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

export default function Github() {
  const t = useTranslations('about');

  return (
    <Row className={styles.githubContainer}>
      <h1 className={styles.projectHeading} style={{ paddingBottom: '20px' }}>
        {t('daysI')} <strong className="purple">{t('coded')}</strong>
      </h1>
      <GitHubCalendar
        username="alexjcm"
        blockSize={14}
        blockMargin={5}
        fontSize={16}
        renderBlock={(block, activity) =>
          React.cloneElement(block as React.ReactElement, {
            'data-tooltip-id': 'my-tooltip',
            'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
          } as any)
        }
      />
      <Tooltip id="my-tooltip" />
    </Row>
  );
}
