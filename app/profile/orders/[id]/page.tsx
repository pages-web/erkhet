import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import ProfileLayout from '../../profile-layout';
import { Separator } from '@/components/ui/separator';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import OrderProduct from '@/components/profile/order/order-product';

const OrderDetail = () => {
  return (
    <ProfileLayout title="Order Detail" description="order detail information">
      <div className="space-y-8">
        <Card>
          <CardHeader className="justify-between flex-row items-center md:py-3 gap-1 md:gap-0">
            <h3 className="text-base text-nowrap md:text-xl font-semibold">
              Захиалгын мэдээлэл
            </h3>
            <div className="text-sm font-medium w-full md:w-auto text-right">
              <div className="text-black/60 md:mb-1 md:text-right">
                Төлбөр төлөх хугацаа
              </div>
              <div>
                <span className="font-bold text-sm">01</span> өдөр:
                <span className="font-bold text-sm ml-1">23</span> цаг:
                <span className="font-bold text-sm ml-1">54</span> минут
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="px-2">
            <h4 className="text-lg md:text-xl font-medium text-center my-5 md:mt-0">
              Төлбөр хүлээгдэж байна
            </h4>
            <Alert variant="warning" className="md:font-medium text-black">
              Төлбөр төлөгдсөний дараа таны захиалга баталгаажихыг анхаарна уу!
              Дээрх хугацаанд төлбөрөө төлөөгүй тохиолдолд таны захиалга
              автоматаар цуцлагдана.
            </Alert>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between pt-4 md:py-4">
            <Button variant="outline" size="lg" className="md:h-12 md:px-8">
              Захиалга цуцлах
            </Button>
            <Button size="lg" className="md:h-12 md:px-8">
              Төлбөр төлөх
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="justify-between flex-row items-center md:py-3 space-y-0 md:space-y-2">
            <div>
              <div className="text-sm text-black/60 font-medium text-nowrap">
                Захиалгын дугаар
              </div>
              <div className="font-semibold md:font-bold text-base md:text-lg">
                R290747063
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-black/60 font-medium text-nowrap">
                Захиалга хийсэн огноо
              </div>
              <div className="font-semibold md:font-bold text-base md:text-lg">
                2024/02/13 21:36
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="py-3 md:py-4 text-sm md:text-base">
            <div className="flex justify-between items-center">
              <span>Барааны дүн</span>
              <span>160,000 ₮</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Хүргэлтийн төлбөр</span>
              <span>5,000 ₮</span>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between py-3 md:py-4">
            <div className="font-bold text-base md:text-lg">Нийт төлөх дүн</div>
            <div>165,880 ₮</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="md:py-4">
            <CardTitle className="text-lg font-semibold">
              Бүтээгдэхүүнүүд
            </CardTitle>
          </CardHeader>
          <Separator />
          <OrderProduct />
          <OrderProduct />
          <OrderProduct />
          <OrderProduct />
        </Card>
        <Card>
          <CardHeader className="md:py-4">
            <CardTitle className="text-lg font-semibold">
              Захиалагчийн мэдээлэл
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex items-center justify-between text-sm flex-wrap md:flex-nowrap gap-4 md:gap-0 py-4 md:py-6">
            <div>
              <div className="text-black/60">Овог</div>
              <div className="font-medium">Khashbat</div>
            </div>
            <div>
              <div className="text-black/60">Нэр</div>
              <div className="font-medium">Baterdene</div>
            </div>
            <div>
              <div className="text-black/60">Утас</div>
              <div className="font-medium">86856568</div>
            </div>
            <div>
              <div className="text-black/60">Цахим хаяг</div>
              <div className="font-medium">hashbaterdene@gmail.com</div>
            </div>
            <div>
              <div className="text-black/60">Хувь хүн</div>
              <div className="font-medium">-</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="md:py-4">
            <CardTitle className="text-lg font-semibold">
              Хүргэлтийн мэдээлэл
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex items-center md:justify-between text-sm flex-wrap md:flex-nowrap gap-4 md:gap-0 py-4">
            <div>
              <div className="text-black/60">Хүргэлтийн мэдээлэл</div>
              <div className="font-medium">
                Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо, Улсын драмын эрдмийн
                теарт, Бизнес тауэр, 16 dawhar
              </div>
            </div>

            <div>
              <div className="text-black/60">Утас</div>
              <div className="font-medium">86856568</div>
            </div>
            <div>
              <div className="text-black/60">Цахим хаяг</div>
              <div className="font-medium">hashbaterdene@gmail.com</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProfileLayout>
  );
};

export default OrderDetail;
