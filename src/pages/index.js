import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import Products from "@/components/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-4/5 mx-auto py-6">
      <Header />
      <Products />
    </div>
  );
}
