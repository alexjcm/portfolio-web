'use client';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  SiDigitalocean,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiLinux,
  SiMacos,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

import styles from './styles.module.css';

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiDocker />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiGit />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <VscVscode />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiIntellijidea />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiLinux />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiMacos />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiDigitalocean />
        </div>
      </Col>
    </Row>
  );
}
