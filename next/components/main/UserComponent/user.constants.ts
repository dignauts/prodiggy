import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const USER_COMPONENT_NAME = 'UserComponent';

export const USER_CLASS_NAME = {
  AVATAR: defineClassName(USER_COMPONENT_NAME, 'avatar'),
  INFORMATION: defineClassName(USER_COMPONENT_NAME, 'information'),
  ROLE: defineClassName(USER_COMPONENT_NAME, 'role'),
  ROOT: defineClassName(USER_COMPONENT_NAME),
  USERNAME: defineClassName(USER_COMPONENT_NAME, 'username')
};
