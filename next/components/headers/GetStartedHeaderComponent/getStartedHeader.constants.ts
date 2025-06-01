import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const GET_STARTED_HEADER_COMPONENT_NAME = 'GetStartedHeaderComponent';

export const GET_STARTED_HEADER_CLASS_NAME = {
  DESCRIPTION: defineClassName(GET_STARTED_HEADER_COMPONENT_NAME, 'description'),
  INFORMATION: defineClassName(GET_STARTED_HEADER_COMPONENT_NAME, 'information'),
  ROOT: defineClassName(GET_STARTED_HEADER_COMPONENT_NAME),
  TITLE: defineClassName(GET_STARTED_HEADER_COMPONENT_NAME, 'title')
};
