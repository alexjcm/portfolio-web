'use client';

import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import logoDark from '../../public/assets/logo_dark_aj167.jpg';
import logoLight from '../../public/assets/logo_light_aj167.jpg';
import Toggle from '../dark-theme/Toggler';
import LocaleSwitcher from './LocaleSwitcher';
import styles from './Navbar.module.css';

interface NavBarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function NavBar({ theme, toggleTheme }: NavBarProps) {
  const [expand, setExpand] = useState<boolean | string>(false);
  const [navColour, updateNavbar] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand !== false}
      fixed="top"
      expand="md"
      className={navColour ? `${styles.sticky}` : `${styles.navbar}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          href="/"
          onClick={() => {
            setExpand(false);
          }}
          aria-label='Link to home'
          className={styles.navbarBrandLink}
        >
          <Image
            src={theme === 'light' ? logoLight : logoDark}
            className={`${styles.imgFluid} ${styles.logo}`}
            alt="brand"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.navbarToggleCustom}
          onClick={() => setExpand(expand ? false : 'expanded') }
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link
              className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}
              as={Link}
              href="/"
              onClick={() => setExpand(false)}
              aria-label='Link to home'
            >
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link
              className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}
              as={Link}
              href="/about"
              onClick={() => setExpand(false)}
              aria-label='Link to about'
            >
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link
              className={`${styles.navLink} ${pathname === '/projects' ? styles.activeLink : ''}`}
              as={Link}
              href="/projects"
              onClick={() => setExpand(false)}
              aria-label='Link to projects'
            >
              {t('navbar.projects')}
            </Nav.Link>
            <Nav.Link
              className={`${styles.navLink} ${pathname === '/contact' ? styles.activeLink : ''}`}
              as={Link}
              href="/contact"
              onClick={() => setExpand(false)}
              aria-label='Link to contact'
            >
              {t('navbar.contact')}
            </Nav.Link>
          </Nav>
          <div className={styles.navExtras}>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <LocaleSwitcher />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
