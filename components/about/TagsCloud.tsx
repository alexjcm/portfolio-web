'use client';

import React, { useEffect } from 'react';

const tagcloud = require('TagCloud');

interface TagCloudOptions {
  radius?: number;
  maxSpeed?: 'slow' | 'normal' | 'fast';
  initSpeed?: 'slow' | 'normal' | 'fast' | string;
  keep?: boolean;
}

export default function TagsCloud() {
  useEffect(() => {
    const container = '.tags-cloud';
    const texts = [
      'Java',
      'Spring Boot',
      'Flask',
      'Javascript',
      'NodeJS',
      'ExpressJS',
      'NextJS',
      'Angular',
      'Git',
      'Webpack',
      'PostgresSQL',
      'MongoDB',
      'Jest',
      'Docker',
      'Digital Ocean',
      'Redis'
    ];
    const options: TagCloudOptions = {
      radius: 270,
      maxSpeed: 'slow',
      initSpeed: 'slow', // Fixed typo 'sl7w' -> 'slow'
      keep: false,
    };
    const tagCloud = tagcloud(container, texts, options);

    return () => tagCloud.destroy();
  }, []);

  return <div className="tags-cloud" />;
}
