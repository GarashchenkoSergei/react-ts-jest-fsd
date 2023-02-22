import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about_page_name')}
    </div>
  );
}

export default AboutPage;
