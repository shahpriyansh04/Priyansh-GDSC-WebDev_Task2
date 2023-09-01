import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="mt-24 ">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-3xl ">Today's deals</p>
        <div className="flex space-x-4 text-xl">
          <p>Sort</p>
          <p>Filter</p>
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
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              img={product.image}
              category={product.category}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
