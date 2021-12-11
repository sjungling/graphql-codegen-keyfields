import { ApolloClient, InMemoryCache } from "@apollo/client";
import { TypedTypePolicies } from "../output";

const typePolicies: TypedTypePolicies = {
  User: {
    keyFields: (entity) => Object.values(entity).join(),
  },
};
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache({ typePolicies }),
});
