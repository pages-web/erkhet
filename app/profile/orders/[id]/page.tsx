import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import ProfileLayout from '../../profile-layout';
import { Separator } from '@/components/ui/separator';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const OrderDetail = () => {
  return (
    <ProfileLayout title="Order Detail" description="order detail information">
      <div className="space-y-10">
        <Card>
          <CardHeader className="justify-between flex-row items-center md:py-5">
            <h3 className="text-xl font-semibold">Захиалгын мэдээлэл</h3>
            <div className="text-sm font-medium">
              <div className=" text-black/60 mb-1 text-right">
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
          <CardContent>
            <h4 className="text-xl font-medium text-center mb-5">
              Төлбөр хүлээгдэж байна
            </h4>
            <Alert variant="warning" className="font-medium text-black">
              Төлбөр төлөгдсөний дараа таны захиалга баталгаажихыг анхаарна уу!
              Дээрх хугацаанд төлбөрөө төлөөгүй тохиолдолд таны захиалга
              автоматаар цуцлагдана.
            </Alert>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between">
            <Button variant="outline" size="lg" className="md:h-12 md:px-8">
              Захиалга цуцлах
            </Button>
            <Button size="lg" className="md:h-12 md:px-8">
              Төлбөр төлөх
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="justify-between flex-row items-center md:py-5">
            <div>
              <div className="text-sm text-black/60 font-medium">
                Захиалгын дугаар
              </div>
              <div className="font-bold text-lg">R290747063</div>
            </div>
            <div>
              <div className="text-sm text-black/60 font-medium">
                Захиалга хийсэн огноо
              </div>
              <div className="font-bold text-lg">2024/02/13 21:36</div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent>
            <h4 className="text-xl font-medium text-center mb-5">
              Төлбөр хүлээгдэж байна
            </h4>
            <Alert variant="warning" className="font-medium text-black">
              Төлбөр төлөгдсөний дараа таны захиалга баталгаажихыг анхаарна уу!
              Дээрх хугацаанд төлбөрөө төлөөгүй тохиолдолд таны захиалга
              автоматаар цуцлагдана.
            </Alert>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between">
            <Button variant="outline" size="lg" className="md:h-12 md:px-8">
              Захиалга цуцлах
            </Button>
            <Button size="lg" className="md:h-12 md:px-8">
              Төлбөр төлөх
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ProfileLayout>
  );
};

export default OrderDetail;
