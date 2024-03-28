import { CommonParams } from '@/types';
import { cache } from 'react';
import { IArticle } from '@/types/kb.types';
import { getClient } from '../ssClient';
import { queries } from '../graphql/kb';

export type GetKbArticleDetail = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  article: IArticle;
}>;

export const getKbArticleDetail: GetKbArticleDetail = cache(async params => {
  const { data, error } = await getClient().query({
    query: queries.articleDetail,
    variables: params?.variables
  });

  const { knowledgeBaseArticleDetail: article } = data || {};

  return {
    article,
    error_msg: error?.message
  };
});
