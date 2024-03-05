import { gql } from '@apollo/client';

const paymentConfig = gql`
  query GetPaymentConfig {
    currentConfig {
      erxesAppToken
      paymentIds
      name
    }
  }
`;

const payment = gql`
  query Payments {
    payments {
      _id
      name
      kind
      status
      config
      createdAt
    }
  }
`;

const queries = { paymentConfig, payment };

export default queries;
