import {
  FieldPolicy,
  FieldReadFunction,
  IdGetter,
  StoreObject,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
import { KeyFieldsContext } from "@apollo/client/cache/inmemory/policies";
type KeyFieldsFunction<T> = (
  object: Readonly<StoreObject>,
  context: KeyFieldsContext
) => (string | T)[] | false | ReturnType<IdGetter>;

export type QueryKeySpecifier = ("user" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = ("id" | "name" | UserKeySpecifier)[];
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | KeyFieldsFunction<QueryKeySpecifier>;
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | KeyFieldsFunction<UserKeySpecifier>;
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
