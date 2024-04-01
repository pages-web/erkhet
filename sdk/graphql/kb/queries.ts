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

const articles = gql`
  query Articles($page: Int, $perPage: Int, $categoryIds: [String]) {
    knowledgeBaseArticles(
      page: $page
      perPage: $perPage
      categoryIds: $categoryIds
    ) {
      _id
      summary
      image {
        url
      }
      attachments {
        url
      }
      modifiedDate
    }
  }
`;

const queries = { articleDetail, articles };

export default queries;
