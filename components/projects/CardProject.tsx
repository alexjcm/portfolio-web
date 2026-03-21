'use client';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

interface CardProjectProps {
  imgPath: string;
  title: string;
  description: string;
  link: string;
}

export default function CardProject({ imgPath, title, description, link }: CardProjectProps) {
  const t = useTranslations('projects');
  return (
    <Card className={styles.projectCardView}>
      <Card.Img className={styles.projectCardImage} variant="top" src={imgPath} />
      <Card.Body className={styles.cardBodyText}>
        <Card.Title className={styles.projectCardTitle}>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
      </Card.Body>
      <Button variant="light" href={link} target="_blank" aria-label="View project">
        <BiLinkExternal /> &nbsp;{t('viewProject')}
      </Button>
    </Card>
  );
}
