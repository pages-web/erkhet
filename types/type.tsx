import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";

export type DonateProps = React.PropsWithChildren & {
  loading: boolean;
  action: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => void;
  variables?: OperationVariables | undefined;
  detail?: any;
  refetch: () => void;
};
