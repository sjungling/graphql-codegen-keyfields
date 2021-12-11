import { ApolloClient, InMemoryCache, TypePolicies } from "@apollo/client";

const typePolicies: TypePolicies = {
  User: {
    keyFields: (entity) => Object.values(entity).join(),
  },
};
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache({ typePolicies }),
});
