const CLASS_NAME_PREFIX = 'Da';

export const defineClassName = (block: string, element?: string, modifier?: string) => (
  `${CLASS_NAME_PREFIX}${block}${element ? `__${element}` : ''}${modifier ? `--${modifier}` : ''}`
);
