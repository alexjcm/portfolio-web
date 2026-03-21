'use client';

import React, { useRef } from 'react';
import Script from 'next/script';
import { useTranslations } from 'next-intl';

declare const Typewriter: any;

function Type() {
  const typewriterRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('home');

  return (
    <>
      <div ref={typewriterRef}></div>
      <Script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"
        id="typewriter-effect"
        onReady={() => {
          if (typewriterRef.current && typeof Typewriter !== 'undefined') {
            const typewriter = new Typewriter(typewriterRef.current, {
              loop: true,
              deleteSpeed: 60,
            });

            typewriter
              .typeString(t('javaDeveloper'))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t('engineer'))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t('reactDeveloper'))
              .start();
          }
        }}
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
      />
    </>
  );
}

export default Type;
