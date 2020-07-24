import { Card } from 'components/Card/Card';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { StyledNotFound } from './StyledNotFound';

export function NotFound() {
  const { t } = useTranslation();
  return (
    <StyledNotFound>
      <Card>
        <h1>{t('notFound.title')}</h1>
      </Card>
    </StyledNotFound>
  );
}
