import { getKbArticleDetail } from '@/sdk/queries/kb';
import { IPageProps } from '@/types';
import { notFound } from 'next/navigation';

const Page = async ({ params }: IPageProps) => {
  const { article, error_msg } = await getKbArticleDetail({
    variables: {
      id: params.slug
    }
  });

  if (!article || error_msg) return notFound();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: article.content }}
      className="container py-4 min-h-[40vw]"
    />
  );
};

export default Page;
