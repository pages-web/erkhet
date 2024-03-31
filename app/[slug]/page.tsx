import { getKbArticleDetail } from '@/sdk/queries/kb';
import { IPageProps } from '@/types';
import { notFound } from 'next/navigation';

const getIdBySlug = {
  about: process.env.KB_ABOUT,
  'terms-of-service': process.env.KB_TERMS,
  'privacy-policy': process.env.KB_PRIVACY,
};

const Page = async ({ params }: IPageProps) => {
  const { article, error_msg } = await getKbArticleDetail({
    variables: {
      id: getIdBySlug[params.slug as keyof typeof getIdBySlug] || params.slug,
    },
  });

  if (!article || error_msg) return notFound();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: article.content }}
      className="container py-4"
    />
  );
};

export default Page;
