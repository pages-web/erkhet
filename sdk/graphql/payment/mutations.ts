import { gql } from '@apollo/client';

const createInvoice = gql`
  mutation InvoiceCreate(
    $amount: Float!
    $selectedPaymentId: String
    $phone: String
    $email: String
    $description: String
    $customerId: String
    $customerType: String
    $contentType: String
    $contentTypeId: String
    $couponCode: String
    $data: JSON
    $couponAmount: Int
  ) {
    invoiceCreate(
      amount: $amount
      selectedPaymentId: $selectedPaymentId
      phone: $phone
      email: $email
      description: $description
      customerId: $customerId
      customerType: $customerType
      contentType: $contentType
      contentTypeId: $contentTypeId
      couponCode: $couponCode
      data: $data
      couponAmount: $couponAmount
    ) {
      _id
      amount
      apiResponse
      data
      description
      email
      errorDescription
      idOfProvider
      paymentKind
      phone
      status
    }
  }
`;

const checkInvoice = gql`
  mutation InvoicesCheck($id: String!) {
    invoicesCheck(_id: $id)
  }
`;

const mutations = { createInvoice, checkInvoice };

export default mutations;
