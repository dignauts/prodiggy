'use client';

import { Button } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FC } from 'react';

import { BUTTON_CLASS_NAME } from '#da/components/buttons/ButtonComponent/button.constants';
import { ButtonComponentProps } from '#da/components/buttons/ButtonComponent/button.props';

const ButtonComponent: FC<ButtonComponentProps> = ({
  className, isExternal, isLink, to, ...props 
}) => (
  <motion.div
    className={clsx(BUTTON_CLASS_NAME.ROOT, className)}
    whileHover={{ 
      scale: 0.95, 
      transition: {
        stiffness: 500,
        type: 'spring'
      } 
    }}
  >
    <Button 
      className={BUTTON_CLASS_NAME.BUTTON} 
      {...isLink && { 
        component: Link, 
        href: to,
        target: isExternal ? '_blank' : undefined
      }}
      {...props}
    />
  </motion.div>

);

export default ButtonComponent;
