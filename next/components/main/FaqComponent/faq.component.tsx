import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { forwardRef } from 'react';

import ArrowLeftIconComponent from '#da/components/icons/arrowLeftIcon.component';
import { FAQ_CLASS_NAME, FAQ_COMPONENT_NAME } from '#da/components/main/FaqComponent/faq.constants';
import { FaqComponentProps } from '#da/components/main/FaqComponent/faq.props';
import { FONT_WEIGHT } from '#da/theme/constants.theme';

import '#da/components/main/FaqComponent/faq.styles.scss';

const FaqComponent = forwardRef<HTMLDivElement, FaqComponentProps>(({
  children, className, sx, title
}, ref) => (
  <motion.div
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.1 }}
    transition={{
      duration: 0.45,
      scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
    }}
  >

    <Accordion
      className={clsx(FAQ_CLASS_NAME.ROOT, className)}
      disableGutters
      ref={ref}
      sx={sx}
      variant='elevation'
    >
      <AccordionSummary
        className={FAQ_CLASS_NAME.HEADER}
        expandIcon={<ArrowLeftIconComponent fontSize='small' />}
      >
        <Typography
          className={FAQ_CLASS_NAME.TITLE} 
          component="span"
          variant='h5'
        >
          { title }
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={FAQ_CLASS_NAME.CONTENT}>
        <Typography
          color='textSecondary' 
          component="span"
          fontWeight={FONT_WEIGHT.REGULAR}
          variant='p2'
        >
          { children }
        </Typography>
      </AccordionDetails>
    </Accordion>
  </motion.div>
));

FaqComponent.displayName = FAQ_COMPONENT_NAME;

export default FaqComponent;
