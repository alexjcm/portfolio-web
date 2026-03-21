'use client';

import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useTranslations } from 'next-intl';

import CardProject from '@/components/projects/CardProject';
import styles from '@/components/projects/styles.module.css';
import logger from '@/logger/logger';

interface Project {
  id: string | number;
  name: string;
  description: string;
  imageProjectLink: string;
  projectLink: string;
}

export default function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const t = useTranslations('projects');

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => logger.error(error));
  }, []);

  return (
    <main className={styles.projectSection}>
      <h1 className={styles.projectHeading}>
        {t('myRecent')} <strong className={styles.purple}>{t('works')} </strong>
      </h1>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        {projects.map((project) => (
          <Col md={4} className={styles.projectCard} key={project.id}>
            <CardProject
              imgPath={'/assets/projects/' + project.imageProjectLink}
              title={project.name}
              description={project.description}
              link={project.projectLink}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
}
