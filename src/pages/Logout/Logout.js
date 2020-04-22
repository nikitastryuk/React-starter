import React from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { useAuth } from 'app/Auth/useAuth';
import { useTranslation } from 'react-i18next';

import styles from './Logout.css';

export function Logout() {
  const [, { logout }] = useAuth();
  const { t } = useTranslation();

  function handleLogout() {
    logout();
  }

  return (
    <div className={styles.logout}>
      <Card>
        <h1>{t('logout.title')}</h1>
        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={handleLogout}>
          {t('logout.buttonText')}
        </Button>
      </Card>
    </div>
  );
}