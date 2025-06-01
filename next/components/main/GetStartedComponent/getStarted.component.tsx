'use client';

import { forwardRef } from 'react';

import GetStartedHeaderComponent from '#da/components/headers/GetStartedHeaderComponent/getStartedHeader.component';
import { GET_STARTED_CLASS_NAME, GET_STARTED_COMPONENT_NAME } from '#da/components/main/GetStartedComponent/getStarted.constants';
import ImageComponent from '#da/components/main/ImageComponent';
import '#da/components/main/GetStartedComponent/getStarted.styles.scss';
import { ASSET } from '#da/constants/assets.constants';

const GetStartedComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <div className={GET_STARTED_CLASS_NAME.ROOT} ref={ref}>
    <GetStartedHeaderComponent />
    <ImageComponent
      className={GET_STARTED_CLASS_NAME.IMAGE}
      fill
      maxWidth={493}
      src={ASSET.NOTEBOOK} 
    />
  </div>
));

GetStartedComponent.displayName = GET_STARTED_COMPONENT_NAME;

export default GetStartedComponent;
