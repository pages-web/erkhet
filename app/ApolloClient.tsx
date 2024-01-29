import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink: any = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const cookie = `pos-config-token=${process.env.NEXT_PUBLIC_POS_TOKEN}`;
  const token = sessionStorage.getItem('token') || '';
  return {
    headers: {
      ...headers,
      cookie,
      'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
      'erxes-app-token': process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const wsLink: any =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: process.env.NEXT_PUBLIC_MAIN_SUBS_DOMAIN || '',
        })
      )
    : null;

const httpLinkWithMiddleware = authLink.concat(httpLink);

type Definintion = {
  kind: string;
  operation?: string;
};

const link = split(
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLinkWithMiddleware
);

const client = new ApolloClient({
  ssrMode: typeof window !== 'undefined',
  cache: new InMemoryCache(),
  link,
});

const Apollo = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
