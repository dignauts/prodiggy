import { FC, PropsWithChildren } from 'react';

import PrimaryFooterModule from '#da/modules/footers/PrimaryFooterModule';
import PrimaryHeaderModule from '#da/modules/headers/PrimaryHeaderModule';

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <PrimaryHeaderModule />
    { children }
    <PrimaryFooterModule />
  </>
);

export default PrimaryLayout;
