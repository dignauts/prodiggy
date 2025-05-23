'use client';

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';
import { FC, PropsWithChildren } from 'react';

import { makeClient } from '#da/graphql/client.graphql';

const ApolloClientProviderModule: FC<PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    { children }
  </ApolloNextAppProvider>
);

export default ApolloClientProviderModule;
