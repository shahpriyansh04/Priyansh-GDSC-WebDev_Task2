import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { cartState } from "@/lib/atoms/cart";
import { useRecoilState } from "recoil";
import { Separator } from "@/components/ui/separator";

export default function CartProduct({ id, title, img, price, quantity }) {
  const [cart, setCart] = useRecoilState(cartState);
  console.log(id);
  const removeItem = () => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex my-6 h-24 w-full">
      <div className="w-24">
        <img src={img} alt="Product Image" className="h-24" />
      </div>
      <div className="flex-1 p-2 bg-b lack">
        <div className="flex h-12 justify-between ">
          <p className=" h-12   flex-1 text-clip overflow-hidden">{title}</p>
          <Button className="" variant="destructive" onClick={removeItem}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex justify-between mt-">
          <p>Qty: {quantity}</p>
          <p className="text-xl font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
}
