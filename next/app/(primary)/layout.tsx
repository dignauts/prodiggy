import { FC, PropsWithChildren } from 'react';

import BaseHeaderComponent from '#da/components/headers/BaseHeaderComponent';

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <BaseHeaderComponent />
    { children }
  </>
);

export default PrimaryLayout;
