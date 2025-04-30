export type BaseLinkAPI = {
  isExternal?: boolean;
  to: string;
}

export type LinkAPI = BaseLinkAPI & {
  name: string;
}
