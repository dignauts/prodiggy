'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import GetStartedComponent from '#da/components/main/GetStartedComponent/getStarted.component';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';

const GetStartedSectionModule = () => {
  const getStartedRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(getStartedRef);

  return (
    <BaseSectionComponent color='tertiary'>
      <GetStartedComponent ref={getStartedRef} />
    </BaseSectionComponent>
  );
};

export default GetStartedSectionModule;
