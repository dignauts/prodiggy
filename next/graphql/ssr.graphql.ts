import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from '@apollo/client-integration-nextjs';

import { ENV } from '#da/constants/env.constants';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: ENV.CMS_GRAPHQL_URI
  })
}));
