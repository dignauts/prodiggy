import { Avatar, Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';

import { USER_CLASS_NAME, USER_COMPONENT_NAME } from '#da/components/main/UserComponent/user.constants';
import { UserComponentProps } from '#da/components/main/UserComponent/user.props';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import '#da/components/main/UserComponent/user.styles.scss';

const UserComponent = forwardRef<HTMLDivElement, UserComponentProps>(({
  avatar, className, role, sx, username
}, ref) => (
  <Box 
    className={clsx(USER_CLASS_NAME.ROOT, className)} 
    ref={ref}
    sx={sx}
  >
    <Avatar 
      alt={username}
      className={USER_CLASS_NAME.AVATAR} 
      src={avatar}
    />
    <div className={USER_CLASS_NAME.INFORMATION}>
      <Typography
        className={USER_CLASS_NAME.USERNAME}
        color='textSecondary'
        fontWeight={FONT_WEIGHT.BOLD}
        variant='p4'
      >
        { username }
      </Typography>
      <Typography 
        className={USER_CLASS_NAME.ROLE}
        color='textSecondary'
        variant='p4'
      >
        { role }
      </Typography>
    </div>
  </Box>
));

UserComponent.displayName = USER_COMPONENT_NAME;

export default UserComponent;
