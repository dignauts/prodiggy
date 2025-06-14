import { motion } from 'motion/react';
import { FC } from 'react';

import SubscriptionCardComponent from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.component';
import { AnimatedSubscriptionCardComponentProps } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.props';

import { SUBSCRIPTION_CARD_CLASS_NAME } from './subscriptionCard.constants';

const AnimatedSubscriptionCardComponent: FC<AnimatedSubscriptionCardComponentProps> = ({
  isInView, ...props
}) => (
  <motion.div
    animate={isInView ? { opacity: 1, scale: 1 } : undefined}
    className={SUBSCRIPTION_CARD_CLASS_NAME.ANIMATED} 
    initial={{ opacity: 0, scale: 0.1 }}
    transition={{
      duration: 0.45,
      scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
    }}
  >
    <SubscriptionCardComponent {...props} />
  </motion.div>
);

export default AnimatedSubscriptionCardComponent;
