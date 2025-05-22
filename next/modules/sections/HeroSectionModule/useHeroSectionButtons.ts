'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { ButtonProps } from '#da/components/buttons/ButtonComponent/button.props';

export const useHeroSectionButtons = () => {
  const t = useTranslations();
  
  const buttons = useMemo<ButtonProps[]>(() => [
    {
      children: t('button.get_started_for_free'),
      color: 'primary'
    },
    {
      children: t('button.view_demo'),
      color: 'secondary'
    }
  ], [t]);
  
  return {
    buttons
  };
};
