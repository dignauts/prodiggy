export const transformStringsToChildren = (items: string[]) => (
  items.map((item) => ({ children: item }))
);
