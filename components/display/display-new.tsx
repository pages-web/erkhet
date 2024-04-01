import { Heading } from '../heading/heading';
import DisplayItem from './display-item';
import { kbCategoryDetail } from '@/sdk/queries/kb';

const DisplayNew = async () => {
  const { category } = await kbCategoryDetail({
    variables: {
      _id: process.env.KB_DISPLAY,
    },
  });
  return (
    <>
      <Heading
        title={category.title || ''}
        className={category.description ? 'mb-0 md:mb-1' : 'md:mb-8'}
      />
      {!!category.description && (
        <div className="md:text-lg mb-4 md:mb-6 text-neutral-500 container text-center">
          {category.description}
        </div>
      )}
      <div className="space-y-4 md:space-y-0 md:gap-4 md:grid grid-cols-3 container mb-8 md:mb-12">
        {category.articles.map((article) => (
          <DisplayItem key={article._id} {...(article || {})} />
        ))}
      </div>
    </>
  );
};

export default DisplayNew;
