import { motion } from 'motion/react';
import { FC } from 'react';

import AssociateCardComponent from '#da/components/cards/AssociateCardComponent/associateCard.component';
import { AnimatedAssociateCardComponentProps } from '#da/components/cards/AssociateCardComponent/associateCard.props';

const AnimatedAssociateCardComponent: FC<AnimatedAssociateCardComponentProps> = ({
  isInView, ...props
}) => (
  <motion.div
    animate={isInView ? { opacity: 1, scale: 1 } : undefined} 
    initial={{ opacity: 0, scale: 0.1 }}
    transition={{
      duration: 0.45,
      scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
    }}
    whileHover={{ 
      scale: 0.9,
      transition: { type: 'spring', stiffness: 500 } 
    }}
  >
    <AssociateCardComponent {...props} />
  </motion.div>
);

export default AnimatedAssociateCardComponent;
