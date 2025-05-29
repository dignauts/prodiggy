import { motion } from 'motion/react';
import { FC } from 'react';

import FeatureCardComponent from '#da/components/cards/FeatureCardComponent/featureCard.component';
import { AnimatedFeatureCardComponentProps } from '#da/components/cards/FeatureCardComponent/featureCard.props';

const AnimatedFeatureCardComponent: FC<AnimatedFeatureCardComponentProps> = ({
  isInView, ...props
}) => (
  <motion.div
    animate={isInView ? { opacity: 1, scale: 1 } : undefined} 
    initial={{ opacity: 0, scale: 0.1 }}
    transition={{
      duration: 0.45,
      scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
    }}
  >
    <FeatureCardComponent {...props} />
  </motion.div>
);

export default AnimatedFeatureCardComponent;
