import Donate from "@/containers/donate/donate"; // Ensure this is imported
import { IProduct } from "@/types/product.types"; // Ensure products are passed
import { Card } from "../ui/card";
import Hello from "../titles/Hello";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  const products: IProduct[] = []; // Provide products as required

  return (
    <div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 pb-12 mt-20">
          <div>
            <Card className="lg:w-[600px] bg-white flex-none relative">
              {children}
            </Card>
          </div>

          <Hello />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
