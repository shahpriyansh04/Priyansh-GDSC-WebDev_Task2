import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

import { cartState } from "@/lib/atoms/cart";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CartProduct from "./CartProduct";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
export default function Cart() {
  const cart = useRecoilState(cartState);
  const data = cart[0];
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(
      data?.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <Sheet className="outline-none ">
      <SheetTrigger className="">
        <ShoppingCart className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className=" sm:w-[500px] sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="text-2xl mb-8">Cart</SheetTitle>
        </SheetHeader>
        {data?.length === 0 ? (
          <div className="flex h-screen justify-center items-center">
            <p>You don't have anything in your cart</p>
          </div>
        ) : (
          <ScrollArea className="h-[500px]  rounded-md border p-4">
            <div className="w-full">
              {data?.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </ScrollArea>
        )}

        <Separator className="mb-4 bg-gray-300" />
        <SheetFooter className="text-lg flex">
          <p>Total Price : </p>
          <p className="font-semibold flex-1 text-right">${totalPrice}</p>
        </SheetFooter>
        <Button className=" mt-6 w-full text-lg">Proceed to Checkout</Button>
      </SheetContent>
    </Sheet>
  );
}
