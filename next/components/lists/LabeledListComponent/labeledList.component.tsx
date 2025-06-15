'use client';

import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { LABELED_LIST_CLASS_NAME } from '#da/components/lists/LabeledListComponent/labeledList.constants';
import { LabeledListComponentProps } from '#da/components/lists/LabeledListComponent/labeledList.props';
import NavigationListComponent from '#da/components/lists/NavigationListComponent';
import LinkComponent from '#da/components/main/LinkComponent';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import { LinkAPI } from '#da/types/api/common.api';

import '#da/components/lists/LabeledListComponent/labeledList.styles.scss';

const LabeledListComponent: FC<LabeledListComponentProps> = ({
  className, items, sx, title
}) => (
  <Box className={clsx(LABELED_LIST_CLASS_NAME.ROOT, className)} sx={sx}>
    <Typography
      className={LABELED_LIST_CLASS_NAME.TITLE} 
      fontWeight={FONT_WEIGHT.BOLD}
      variant='h5'
    >
      { title }
    </Typography>
    <NavigationListComponent<LinkAPI>
      className={LABELED_LIST_CLASS_NAME.LIST} 
      items={items}
      render={({ isExternal, name, to }) => (
        <LinkComponent
          color='textSecondary'
          fontWeight={FONT_WEIGHT.MEDIUM}
          isExternal={isExternal}
          to={to}
          variant='p4'
        >
          { name }
        </LinkComponent>
      )}  
    /> 
  </Box>
);

export default LabeledListComponent;
