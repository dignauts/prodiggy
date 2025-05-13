'use client';

import { Stack } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import CloseButtonComponent from '#da/components/buttons/CloseButtonComponent/closeButton.component';
import { BASE_MODAL_HEADER_CLASS_NAME } from '#da/components/headers/BaseModalHeaderComponent/baseModalHeader.constants';
import { BaseModalHeaderComponentProps } from '#da/components/headers/BaseModalHeaderComponent/baseModalHeader.props';
import '#da/components/headers/BaseModalHeaderComponent/baseModalHeader.styles.scss';

const BaseModalHeaderComponent: FC<BaseModalHeaderComponentProps> = ({
  children, className, onClose, sx
}) => (
  <Stack
    alignItems="center"
    className={clsx(BASE_MODAL_HEADER_CLASS_NAME.ROOT, className)}
    direction="row"
    justifyContent="space-between"
    sx={sx}
  >
    { children }
    <CloseButtonComponent enableTooltip onClick={onClose} />
  </Stack>
);

export default BaseModalHeaderComponent;
