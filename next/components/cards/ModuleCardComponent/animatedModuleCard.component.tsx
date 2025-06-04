import { motion } from 'motion/react';
import { FC } from 'react';

import ModuleCardComponent from '#da/components/cards/ModuleCardComponent/moduleCard.component';
import { AnimatedModuleCardComponentProps } from '#da/components/cards/ModuleCardComponent/moduleCard.props';

const AnimatedModuleCardComponent: FC<AnimatedModuleCardComponentProps> = ({
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
      rotate: -3.5,
      scale: 0.95, 
      transition: {
        damping: 20,
        stiffness: 500,
        type: 'spring'
      }
    }}
  >
    <ModuleCardComponent {...props} />
  </motion.div>
);

export default AnimatedModuleCardComponent;
