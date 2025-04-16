import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import CacheProviderModule from "#da/modules/providers/CacheProviderModule";

export const metadata: Metadata = {
  description: "From now on, invoices won't be your problem",
  title: "Prodiggy"
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <CacheProviderModule>
        { children }
      </CacheProviderModule>
    </body>
  </html>
);

export default RootLayout;
