import { NavbarTop } from './navbar-top';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { getKbArticleDetail } from '@/sdk/queries/kb';

const DefaultLayout = async ({ children }: React.PropsWithChildren) => {
  const { article } = await getKbArticleDetail({
    variables: {
      id: 'donate',
    },
  });
  return (
    <>
      <NavbarTop />
      <div className="min-h-screen">
        <div className="aspect-[14/6] max-h-[700px] relative w-full">
          <Image
            sizes="100vw"
            src={article?.image?.url}
            quality={99}
            priority
          />
        </div>
        <div className="container">
          <div className="flex gap-6 -mt-16">
            <Card className="flex-auto bg-white relative">
              <CardContent>
                <Tabs defaultValue="account">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Details</TabsTrigger>
                    <TabsTrigger value="password">Updates</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <div
                      dangerouslySetInnerHTML={{ __html: article.content }}
                      className="space-y-4 py-4"
                    />
                  </TabsContent>
                  <TabsContent value="password"></TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <div>
              <Card className="w-[500px] bg-white flex-none relative">
                {children}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
