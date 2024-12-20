import { useEffect } from "react";
import { gql, useSubscription } from "@apollo/client";
import { useDonate } from "../donate/donate";
import { usePaymentConfig } from "@/sdk/queries/payment";
import useCreateInvoice from "@/sdk/hooks/payment";
import { Loading } from "@/components/ui/loading";
import QrDetail from "./qr-detail";
import PhoneDetail from "./phone-detail";

const QR_PAYMENTS = ["qpay", "monpay", "pocket", "qpayQuickqr"];
const PHONE_PAYMENTS = ["socialpay", "storepay"];

const PaymentDetail = () => {
  const { detail, refetch } = useDonate();
  const {
    payments,
    erxesAppToken,
    loading: loadingConfig,
  } = usePaymentConfig();

  const {
    handleCreateInvoice,
    loading: loadingAction,
    reset,
    data,
  } = useCreateInvoice({
    appToken: erxesAppToken || "",
  });

  const { errorDescription, status, response, _id } = data || {};

  useSubscription(
    gql`
      subscription invoiceUpdated($invoiceId: String!) {
        invoiceUpdated(_id: $invoiceId) {
          status
        }
      }
    `,
    {
      variables: { invoiceId: _id },
      skip: !_id,
      onData(options) {
        const { invoiceUpdated } = options.data.data || {};
        if (invoiceUpdated?.status === "paid") {
          refetch();
        }
      },
    }
  );

  const kind = payments?.[0]?.kind;
  const isQr = QR_PAYMENTS.includes(kind || "");
  const isPhone = PHONE_PAYMENTS.includes(kind || "");

  const selectedProduct = detail?.items?.[0];
  const selectedPrice = selectedProduct?.unitPrice;

  useEffect(() => {
    const createInvoice = async () => {
      if (!kind || !selectedProduct || !selectedPrice) return;

      try {
        reset();
        if (isQr) {
          await handleCreateInvoice({
            items: [
              {
                _id: Math.random().toString(),
                productId: selectedProduct.productId,
                count: 1,
                unitPrice: selectedPrice,
              },
            ],
            totalAmount: selectedPrice,
          });
        }
      } catch (error) {
        console.error("Error creating invoice:", error);
      }
    };

    createInvoice();
  }, [selectedProduct, selectedPrice]);

  if (loadingConfig || !kind) return null;

  return (
    <>
      {isQr &&
        (loadingAction ? (
          <Loading className="pt-32 pb-24" />
        ) : (
          (!!response?.qrData ||
            (isQr && (errorDescription || response?.error))) && (
            <QrDetail
              errorDescription={errorDescription || response?.error}
              status={status}
              qrCode={response?.qrData}
              urls={response?.urls}
              id={_id}
            />
          )
        ))}

      {isPhone && (
        <PhoneDetail
          kind={kind}
          loading={loadingConfig}
          handleCreate={handleCreateInvoice}
          data={data}
          errorDescription={errorDescription}
        />
      )}
    </>
  );
};

export default PaymentDetail;
