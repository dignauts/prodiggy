import { Box, Tooltip } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import { ASSOCIATE_CARD_CLASS_NAME } from '#da/components/cards/AssociateCardComponent/associateCard.constants';
import { AssociateCardComponentProps } from '#da/components/cards/AssociateCardComponent/associateCard.props';
import ImageComponent from '#da/components/main/ImageComponent';
import '#da/components/cards/AssociateCardComponent/associateCard.styles.scss';

const AssociateCardComponent: FC<AssociateCardComponentProps> = ({
  className, logo, name, sx, to
}) => (
  <Tooltip title={name}>
    <Box
      className={clsx(ASSOCIATE_CARD_CLASS_NAME.ROOT, className)}
      component={Link}
      href={to}
      sx={sx}
      target='_blank'
    >
      <ImageComponent
        alt=''
        className={ASSOCIATE_CARD_CLASS_NAME.LOGO}
        height={40}
        src={logo}
        width={130} 
      />
    </Box>
  </Tooltip>
);

export default AssociateCardComponent;
