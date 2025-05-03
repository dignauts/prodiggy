'use client';

import BaseHeaderComponent from '#da/components/headers/BaseHeaderComponent';
import { PRIMARY_HEADER_CLASS_NAME } from '#da/modules/headers/PrimaryHeaderModule/primaryHeader.constants';
import PrimaryNavigationListModule from '#da/modules/lists/PrimaryNavigationListModule';
import HamburgerModule from '#da/modules/main/HamburgerModule';
import '#da/modules/headers/PrimaryHeaderModule/primaryHeader.styles.scss';

const PrimaryHeaderModule = () => (
  <BaseHeaderComponent className={PRIMARY_HEADER_CLASS_NAME.ROOT}>
    <PrimaryNavigationListModule className={PRIMARY_HEADER_CLASS_NAME.PRIMARY_NAVIGATION} />
    <HamburgerModule className={PRIMARY_HEADER_CLASS_NAME.HAMBURGER} />
  </BaseHeaderComponent>
);

export default PrimaryHeaderModule;
