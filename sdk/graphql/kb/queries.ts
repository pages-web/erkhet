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

const kbCategory = gql`
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      articles {
        _id
        title
        summary
        content
        image {
          url
        }
      }
    }
  }
`;

const queries = { articleDetail, articles, kbCategory };

export default queries;
