import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "./ui/select";
import Filter from "./Filter";
import { MoveDown, MoveUp } from "lucide-react";
import Sort from "./Sort";

export default function Products() {
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("relevance");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (sort === "relevance") {
      setProducts(products?.sort((a, b) => a.id - b.id));
    } else if (sort === "price-asc") {
      setProducts(products?.sort((a, b) => a.price - b.price));
    } else if (sort === "price-desc") {
      setProducts(products?.sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  console.log(products);
  console.log(filter);
  console.log(sort);
  return (
    <div className="mt-24 ">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-3xl ">Today's deals</p>
        <div className="flex space-x-4 text-xl items-center">
          <Sort setSort={setSort} />
          <Filter setFilter={setFilter} />
        </div>
      </div>
      {products === undefined ? (
        <div className="grid grid-cols-3 gap-3 mt-12 ">
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
        </div>
      ) : (
        <div className="grid grid-cols-3  gap-1  justify-items-center mt-12">
          {products?.map((product) => {
            if (filter === "all") {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  img={product.image}
                  category={product.category}
                  price={product.price}
                  rating={product.rating}
                />
              );
            } else {
              if (filter === product.category) {
                return (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    img={product.image}
                    category={product.category}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              }
            }
          })}
        </div>
      )}
    </div>
  );
}
