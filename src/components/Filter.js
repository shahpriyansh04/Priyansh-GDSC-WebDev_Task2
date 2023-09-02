import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "./ui/select";

export default function Filter({ setFilter }) {
  return (
    <Select defaultValue="all" onValueChange={(e) => setFilter(e)}>
      <SelectTrigger className="w-[100px] font-semibold text-lg">
        Filter{" "}
      </SelectTrigger>
      <SelectContent align="end" className="font-semibold text-md">
        <SelectGroup onChange={(e) => console.log(e.target.value)}>
          <SelectLabel className="text-md font-semibold">Category</SelectLabel>
          <SelectItem value="all" className="font-semibold text-md">
            All{" "}
          </SelectItem>

          <SelectItem value="men's clothing" className="font-semibold text-md">
            Men's clothing
          </SelectItem>

          <SelectItem
            value="women's clothing"
            className="font-semibold text-md"
          >
            Women's clothing
          </SelectItem>
          <SelectItem value="jewelery" className="font-semibold text-md">
            Jewellery
          </SelectItem>
          <SelectItem value="electronics" className="font-semibold text-md">
            Electronics
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
