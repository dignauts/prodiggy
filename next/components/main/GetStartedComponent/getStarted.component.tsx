'use client';

import { motion } from 'motion/react';
import { forwardRef } from 'react';

import GetStartedHeaderComponent from '#da/components/headers/GetStartedHeaderComponent/getStartedHeader.component';
import { GET_STARTED_CLASS_NAME, GET_STARTED_COMPONENT_NAME } from '#da/components/main/GetStartedComponent/getStarted.constants';
import ImageComponent from '#da/components/main/ImageComponent';
import { ASSET } from '#da/constants/assets.constants';
import { AnimatedComponentProps } from '#da/types/props/common.props';
import '#da/components/main/GetStartedComponent/getStarted.styles.scss';

const GetStartedComponent = forwardRef<HTMLDivElement, AnimatedComponentProps>(({
  isInView
}, ref) => (
  <motion.div
    animate={isInView ? { opacity: 1, scale: 1 } : undefined}
    initial={{ opacity: 0, scale: 0 }}
    transition={{
      duration: 0.4,
      scale: { type: 'spring', visualDuration: 0.4, bounce: 0.45 }
    }}
  >
    <div className={GET_STARTED_CLASS_NAME.ROOT} ref={ref}>
      <GetStartedHeaderComponent />
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.55, bounce: 0.7 }
        }}
      >
        <ImageComponent
          className={GET_STARTED_CLASS_NAME.IMAGE}
          fill
          maxWidth={493}
          src={ASSET.NOTEBOOK} 
        />
      </motion.div>
    </div>
  </motion.div>
));

GetStartedComponent.displayName = GET_STARTED_COMPONENT_NAME;

export default GetStartedComponent;
