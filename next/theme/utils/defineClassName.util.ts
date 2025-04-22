import { generateUtilityClass } from '@mui/material';

const CLASS_NAME_PREFIX = 'Da';

export const defineClassName = (parent: string, child?: string) => (
  generateUtilityClass(`${CLASS_NAME_PREFIX}${parent}`, child || 'root')
);
