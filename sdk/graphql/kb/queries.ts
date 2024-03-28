import { gql } from '@apollo/client';

const articleDetail = gql`
  query kbArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      content
      image {
        url
      }
      attachments {
        url
        type
      }
    }
  }
`;

const queries = { articleDetail };

export default queries;
