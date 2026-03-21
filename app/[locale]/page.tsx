'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import SecondaryHome from '@/components/home/SecondaryHome';
import styles from '@/components/home/styles.module.css';
import Type from '@/components/home/Type';
import progressiveApp from '@/public/assets/home/undraw_progressive_app.svg';

export default function MainHome() {
  const t = useTranslations('home');

  return (
    <main className={styles.mainSection}>
      <Container fluid className={styles.homeSection} id="home">
        <Container className={styles.homeContent}>
          <Row>
            <Col md={7} className={styles.homeHeader}>
              <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
                {t('greeting')}..!!
              </h1>
              <h1 className={styles.headingName}>
                {t('iam')}
                <strong className={styles.mainName}> ALEX JOHN CHAMBA</strong>
              </h1>
              <Type />
            </Col>
            <Col className={styles.homeImg}>
              <Image src={progressiveApp} className={styles.imgFluid} alt="progressiveApp" priority/>
            </Col>
          </Row>
        </Container>
      </Container>
      <SecondaryHome />
    </main>
  );
}
