import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { forwardRef } from 'react';

import ArrowLeftIconComponent from '#da/components/icons/arrowLeftIcon.component';
import { FAQ_CLASS_NAME, FAQ_COMPONENT_NAME } from '#da/components/main/FaqComponent/faq.constants';
import '#da/components/main/FaqComponent/faq.styles.scss';

const FaqComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <Accordion
    className={FAQ_CLASS_NAME.ROOT}
    disableGutters
    ref={ref}
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
        Accordion 1
      </Typography>
    </AccordionSummary>
    <AccordionDetails className={FAQ_CLASS_NAME.CONTENT}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
));

FaqComponent.displayName = FAQ_COMPONENT_NAME;

export default FaqComponent;
