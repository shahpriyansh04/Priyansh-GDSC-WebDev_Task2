import { MoveDown, MoveUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "./ui/select";

export default function Sort({ setSort }) {
  <Select defaultValue="relevance" onValueChange={(e) => setSort(e)}>
    <SelectTrigger className="w-[100px] font-semibold text-lg">
      Sort
    </SelectTrigger>
    <SelectContent className="font-semibold text-md">
      <SelectGroup>
        <SelectItem value="relevance" className="font-semibold text-md">
          Relevance{" "}
        </SelectItem>

        <SelectItem value="price-asc" className="font-semibold text-md ">
          <div className="flex justify-around items-center w-full space-x-3">
            Price
            <MoveUp className="w-4 h-4" />
          </div>
        </SelectItem>

        <SelectItem value="price-desc" className="font-semibold text-md">
          <div className="flex items-center justify-around">
            Price
            <MoveDown className="w-4 h-4" />
          </div>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>;
}
