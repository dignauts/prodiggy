'use client';

import { Tooltip } from '@mui/material';

import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';

const LinkedProdiggyLogoComponent = () => (
  <Tooltip placement='right' title="Return to home">
    <ProdiggyLogoComponent />
  </Tooltip>
);

export default LinkedProdiggyLogoComponent;
