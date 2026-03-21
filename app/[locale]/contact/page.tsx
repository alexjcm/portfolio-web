'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useTranslations } from 'next-intl';

import styles from '@/components/contact/Contact.module.css';
import { validateEmail } from '@/components/utils/util';
import AlertMessage from '@/components/contact/AlertMessage';
import logger from '@/logger/logger';

interface ParamsAlert {
  variant: string;
  dismissible: boolean | string;
  message: string;
}

export default function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('contact');

  const [buttonText, setButtonText] = useState(t('submit'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameIsActive, setNameIsActive] = useState(false);
  const [emailIsActive, setEmailIsActive] = useState(false);
  const [messageIsActive, setMessageIsActive] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [paramsAlert, setParamsAlert] = useState<ParamsAlert>({
    variant: '',
    dismissible: '',
    message: ''
  });

  const handleNameChange = (name: string) => {
    setName(name);
    setNameIsActive(!!name);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setEmailIsActive(!!email);
  };

  const handleMessageChange = (message: string) => {
    setMessage(message);
    setMessageIsActive(!!message);
  };

  const configParamsAlert = (variant: string, message: string) => {
    setParamsAlert({
      variant: variant,
      dismissible: true,
      message: message
    });

    setShowAlert(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    const bodyMsg = {
      name: name,
      to: email,
      message: message,
    };

    event.preventDefault();

    setButtonText(t('submitting'));

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer/sendMail`, {
      method: 'POST',
      body: JSON.stringify(bodyMsg),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        logger.info(response, 'response');
        if (response.status === 'success') {
          configParamsAlert('success', 'Message sent :)');
          (event.target as HTMLFormElement).reset();
          setValidated(false);
        } else if (response.status === 'fail') {
          configParamsAlert('danger', 'Message failed to send :(');
        }
      })
      .catch((error) => {
        logger.error(error);
      }).finally(() => {
        setButtonText(t('submit'));
      });
  };

  return (
    <main className={styles.contactSection}>
      <Container>
        <h4 className={styles.contactInfo}>{t('sendEmail')}</h4>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="inputName">
            <div className={styles.floatLabel}>
              <Form.Control 
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value)}
                required
                aria-label="Your name" 
              />
              <label htmlFor="inputName" className={nameIsActive ? 'Active' : ''}>
                {t('yourName')}
              </label>
              <Form.Control.Feedback type="invalid">{t('enterName')}</Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group controlId="inputEmail">
            <div className={styles.floatLabel}>
              <Form.Control
                required
                type="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value)}
                aria-label="Your email"
              />
              <label htmlFor="inputEmail" className={emailIsActive ? 'Active' : ''}>
                {t('email')}
              </label>
              <Form.Control.Feedback type="invalid">{t('enterEmail')}</Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group controlId="inputMessage">
            <div className={styles.floatLabel}>
              <Form.Control
                className={styles.inputTextarea}
                required
                as="textarea"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleMessageChange(e.target.value)}
                rows={4}
                aria-label="Your message"
              />
              <label htmlFor="inputMessage" className={messageIsActive ? 'Active' : ''}>
                {t('message')}
              </label>
              <Form.Control.Feedback type="invalid">{t('enterMessage')}</Form.Control.Feedback>
            </div>
          </Form.Group>
          <Button
            disabled={!(name && email && validateEmail(email) && message)}
            variant="info"
            type="submit"
            aria-label="Submit"
          >
            {buttonText}
          </Button>
          {showAlert && (
            <AlertMessage 
              variant={paramsAlert.variant} 
              message={paramsAlert.message} 
              dismissible={paramsAlert.dismissible} 
              onClose={() => setShowAlert(false)} 
            />
          )}
        </Form>
      </Container>
    </main>
  );
}
