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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cartState } from "@/lib/atoms/cart";
import { useRecoilState } from "recoil";
export default function ProductCard({
  title,
  description,
  id,
  img,
  price,
  category,
  rating,
}) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    setCart((prev) => [...prev, { id, title, img, price, category, quantity }]);
  };

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
                <Rating style={{ maxWidth: 90 }} value={rating.rate} readOnly />
                {"  "}
                <p> ({rating.count})</p>
              </div>
              <p className="text-lg font-semibold mt-4">${price}</p>
            </CardContent>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-5">
        <div className="grid grid-cols-2 w-full gap-x-12 p-4">
          <div className="flex  justify-center items-center">
            <img src={img} alt="Product Image" className="h-96" />
          </div>
          <div className="p-2 mt-6 r-12">
            <div className="h-52 text-clip overflow-hidden">
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription className="text-sm mt-4">
                {description}
              </DialogDescription>
            </div>
            <div className="flex items-center mt-8 justify-between">
              <div className="flex space-x-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating.rate}
                  readOnly
                />
                {"  "}
                <p> ({rating.count})</p>
              </div>
              <p className="text-2xl font-bold">${price}</p>
            </div>
            <div className="grid grid-cols-2 space-x-6 mt-8 items-center">
              <div className="flex-1 flex bor der-2 p-2 border-black h-full justify-center items-center   rounded-sm">
                <Button
                  // variant="outline"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  className="disabled:cursor-not-allowed"
                >
                  <Minus />
                </Button>
                <p className="flex-1 text-center font-bold text-lg">
                  {quantity}
                </p>
                <Button
                  // variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity === 10}
                >
                  <Plus />
                </Button>
              </div>

              <Button className="flex-1 p-4 h-fu ll" onClick={addToCart}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
