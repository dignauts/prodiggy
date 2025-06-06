'use client';

import { Paper, Rating, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { TESTIMONIAL_CARD_CLASS_NAME } from '#da/components/cards/TestimonialCardComponent/testimonialCard.constants';
import { TestimonialCardComponentProps } from '#da/components/cards/TestimonialCardComponent/testimonialCard.props';
import UserComponent from '#da/components/main/UserComponent';

import '#da/components/cards/TestimonialCardComponent/testimonialCard.styles.scss';

const TestimonialCardComponent: FC<TestimonialCardComponentProps> = ({
  avatar, children, className, rating, role, sx, username
}) => (
  <Paper className={clsx(TESTIMONIAL_CARD_CLASS_NAME.ROOT, className)} sx={sx}>
    <Rating
      className={TESTIMONIAL_CARD_CLASS_NAME.RATING}
      defaultValue={rating}
      readOnly 
    />
    {
      children && (
        <Typography 
          className={TESTIMONIAL_CARD_CLASS_NAME.MESSAGE}
          color='textSecondary'
          variant='p3'
        >
          { children }
        </Typography>
      )
    }
    <UserComponent 
      avatar={avatar}
      className={TESTIMONIAL_CARD_CLASS_NAME.USER}
      role={role}
      username={username}
    />
  </Paper>
);

export default TestimonialCardComponent;
