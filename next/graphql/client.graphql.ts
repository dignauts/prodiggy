'use client';

import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';

import { ENV } from '#da/constants/env.constants';

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: ENV.CMS_GRAPHQL_URI
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${ENV.CMS_BEARER_TOKEN}`
    },
    link: httpLink
  });
};
