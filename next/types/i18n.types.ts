import { Messages } from 'next-intl';

import { BaseLinkAPI } from '#da/types/api/common.api';

export type TranslatedLink = BaseLinkAPI & {
  i18n: Translation;
}

type NestedI18nKeysOf<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? NestedI18nKeysOf<T[K], `${Prefix}${K & string}.`>
    : `${Prefix}${K & string}`;
}[keyof T];

export type Translation = NestedI18nKeysOf<Messages>;
