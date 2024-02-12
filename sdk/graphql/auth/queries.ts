import { gql } from '@apollo/client';

const currentUser = gql`
  query clientPortalCurrentUser {
    clientPortalCurrentUser {
      _id
      firstName
      lastName
      avatar
      erxesCustomerId
    }
  }
`;

const userDetail = gql`
  query UserDetail {
    clientPortalCurrentUser {
      phone
      email
      password
      isEmailVerified
      isPhoneVerified
    }
  }
`;

const currentConfig = gql`
  query CurrentConfig {
    currentConfig {
      token
      erxesAppToken
      paymentIds
    }
  }
`;

const queries = { currentUser, currentConfig, userDetail };

export default queries;
