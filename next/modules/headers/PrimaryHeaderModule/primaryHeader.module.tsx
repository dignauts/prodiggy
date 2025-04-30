import BaseHeaderComponent from '#da/components/headers/BaseHeaderComponent';
import { PRIMARY_HEADER_CLASS_NAME } from '#da/modules/headers/PrimaryHeaderModule/primaryHeader.constants';
import PrimaryNavigationListModule from '#da/modules/lists/PrimaryNavigationListModule';
import '#da/modules/headers/PrimaryHeaderModule/primaryHeader.styles.css';

const PrimaryHeaderModule = () => (
  <BaseHeaderComponent className={PRIMARY_HEADER_CLASS_NAME.ROOT}>
    <PrimaryNavigationListModule />
  </BaseHeaderComponent>
);

export default PrimaryHeaderModule;
