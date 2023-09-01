import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
export default function ProductCard({
  title,
  description,
  img,
  price,
  category,
  rating,
}) {
  return (
    <Dialog className="w-full">
      <DialogTrigger className="w-full">
        <Card className=" rounded-sm border-2   cursor-pointer">
          <CardHeader className="">
            <div className="flex justify-center items-center ">
              <img
                src={img}
                alt="Product Image"
                className="aspes ct-square h-60 scale-90"
              />
            </div>
            <CardTitle className="pt-6 text-left font-bold text-xl h-20 text-clip overflow-hidden">
              {title}
            </CardTitle>
            <CardContent className="text-left w-full p-0">
              <div className="flex items-center">
                <Rating style={{ maxWidth: 90 }} value={rating.rate} readOnly />{" "}
                <p>{rating.count}</p>
              </div>
              <p className="text-lg font-semibold mt-4">${price}</p>
            </CardContent>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
