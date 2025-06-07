import { motion } from 'motion/react';
import { FC } from 'react';

import TestimonialCardComponent from '#da/components/cards/TestimonialCardComponent/testimonialCard.component';
import { AnimatedTestimonialCardComponentProps } from '#da/components/cards/TestimonialCardComponent/testimonialCard.props';

const AnimatedTestimonialCardComponent: FC<AnimatedTestimonialCardComponentProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInView, ...props
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.1 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.45,
          scale: { type: 'spring', bounce: 0.35 }
        }
      }
    }}
    whileHover={{ 
      scale: 0.96,
      transition: { type: 'spring', stiffness: 500 } 
    }}
  >
    <TestimonialCardComponent {...props} />
  </motion.div>
);

export default AnimatedTestimonialCardComponent;
