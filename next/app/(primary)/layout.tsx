import { FC, PropsWithChildren } from 'react';

import PrimaryHeaderModule from '#da/modules/headers/PrimaryHeaderModule';

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <PrimaryHeaderModule />
    { children }
  </>
);

export default PrimaryLayout;
