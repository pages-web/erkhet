import { NavbarTop } from "./navbar-top";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { getKbArticleDetail } from "@/sdk/queries/kb";

export const revalidate = 300;

const DefaultLayout = async ({ children }: React.PropsWithChildren) => {
  const { article } = await getKbArticleDetail({
    variables: {
      id: "donate",
    },
  });
  return (
    <>
      <NavbarTop />
      <div className="min-h-screen">
        <div className="aspect-square md:aspect-[14/6] max-h-[700px] relative w-full">
          <Image
            sizes="100vw"
            src={article?.image?.url}
            quality={99}
            priority
            className="object-left md:object-center"
          />
        </div>
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row gap-6 -mt-16 pb-12">
            <Card className="flex-auto bg-white relative">
              <CardContent className="pt-2">
                <Tabs defaultValue="account">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Мэндчилгээ</TabsTrigger>
                    <TabsTrigger value="password">Товч танилцуулга</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    {article?.content && (
                      <div
                        dangerouslySetInnerHTML={{ __html: article.content }}
                        className="space-y-4 py-4"
                      />
                    )}
                  </TabsContent>
                  <TabsContent value="password"></TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <div>
              <Card className="lg:w-[500px] bg-white flex-none relative">
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
