import { Breadcrumb, Breadcrumbs } from '@/components/breadcrumb';

const Product = () => {
  const breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'All Products', link: '/category' },
    { name: 'Men', link: '/category?cat=men' },
    { name: 'Shoes', link: '/category' },
    { name: 'Sneakers', link: '/category' },
    { name: 'Athletic mens walking sneakers', link: '/product' },
  ];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="container">
        <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
          <section className="md:h-full xl:max-h-[700px]">
            {/* <Gallery images={gallery} /> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
