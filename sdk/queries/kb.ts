import { CommonParams } from '@/types';
import { cache } from 'react';
import { IArticle } from '@/types/kb.types';
import { getClient } from '../ssClient';
import { queries } from '../graphql/kb';
import { getConfig } from './auth';

export type GetKbArticleDetail = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  article: IArticle;
}>;

export type GetKbArticles = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  articles: IArticle[];
}>;

export const getKbArticleDetail: GetKbArticleDetail = cache(async (params) => {
  const { config } = await getConfig();
  const { data, error } = await getClient().query({
    query: queries.articleDetail,
    variables: params?.variables,
    context: {
      headers: {
        'erxes-app-token': config?.erxesAppToken,
      },
    },
  });

  const { knowledgeBaseArticleDetail: article } = data || {};

  return {
    article,
    error_msg: error?.message,
  };
});

export const getKbArticles: GetKbArticles = cache(async (params) => {
  const { config } = await getConfig();
  const { data, error } = await getClient().query({
    query: queries.articles,
    variables: params?.variables,
    context: {
      headers: {
        'erxes-app-token': config?.erxesAppToken,
      },
    },
  });

  const { knowledgeBaseArticles: articles } = data || {};

  return {
    articles,
    error_msg: error?.message,
  };
});
