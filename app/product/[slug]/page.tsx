import { BreadcrumbsLayout } from '@/app/breadcrumbs-layout';
import { type Breadcrumb } from '@/components/breadcrumb';
import { Separator } from '@/components/ui/separator';

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
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <div
        className="md:grid gap-x-6"
        style={{
          gridTemplateAreas: `"left-top right"
          "left-bottom right"`,
          gridTemplateColumns: `minmax(56%, 500px) auto`,
        }}
      >
        <section
          className="md:h-[300px] xl:max-h-[700px] bg-sky-300"
          style={{ gridArea: `left-top` }}
        >
          {/* <Gallery images={gallery} /> */}
        </section>
        <section className="mb-10 md:mb-0 py-5 bg-slate-500" style={{ gridArea: `right` }}>
          {/* <PurchaseCard product={product} lng={lng} /> */}
        </section>
        <section className="md:mt-8 py-12 bg-rose-400" style={{ gridArea: `left-bottom` }}>
          <Separator className="mb-6" />
          {/* <ProductProperties product={product} /> */}
          <Separator className="mt-4 mb-2 md:mt-8" />
          {/* <ProductAccordion product={product} /> */}
        </section>
        <Separator className="mt-4 mb-2" />
      </div>
    </BreadcrumbsLayout>
  );
};

export default Product;
