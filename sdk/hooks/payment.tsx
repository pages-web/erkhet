import { type OperationVariables, useMutation } from "@apollo/client";
import { mutations } from "../graphql/payment";
import { useAtomValue } from "jotai";
import { selectedMethodAtom } from "@/store/payment.store";
import { onError } from "@/lib/utils";
import { useDonate } from "@/containers/donate/donate";

import { configAtom } from "@/store/auth.store";

const useCreateInvoice = ({ appToken }: { appToken: string }) => {
  const context = {
    headers: {
      "erxes-app-token": appToken,
    },
  };

  const { paymentIds } = useAtomValue(configAtom) || {};
  const selectedPaymentId = useAtomValue(selectedMethodAtom);
  const { detail } = useDonate();
  const [
    addTransaction,
    { loading: addingTransaction, reset: resetTransaction, data },
  ] = useMutation(mutations.addTransaction);

  const [createInvoice, { reset, loading }] = useMutation(
    mutations.createInvoice,
    {
      context,
      onError,
      onCompleted({ invoiceCreate }) {
        addTransaction({
          variables: {
            invoiceId: invoiceCreate._id,
            paymentId: "6llbnMWZ3HPz8nom9w3Xa",
            amount: detail?.totalAmount,
          },
        });
      },
    }
  );

  const handleCreateInvoice = (variables?: OperationVariables) =>
    createInvoice({
      variables: {
        amount: detail?.totalAmount,
        contentType: "pos:orders",
        contentTypeId: detail?._id,
        customerType: "customer",

        data: { posToken: process.env.NEXT_PUBLIC_POS_TOKEN },
        paymentIds,
        ...variables,
      },
    });

  const { paymentTransactionsAdd } = data || {};

  return {
    loading: addingTransaction || loading,
    reset: () => {
      reset();
      resetTransaction();
    },
    data: paymentTransactionsAdd,
    handleCreateInvoice,
  };
};

export const invoiceCheck = () => {
  const [checkInvoice, { data, loading }] = useMutation(mutations.checkInvoice);

  const { invoiceCheck } = data || {};

  return { loading, checkInvoice, status: invoiceCheck };
};

export default useCreateInvoice;
