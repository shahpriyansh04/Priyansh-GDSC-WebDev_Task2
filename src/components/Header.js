import { useAuth } from "@/lib/auth";
import { Search } from "lucide-react";
import Link from "next/link";
import Cart from "./Cart";
import Profile from "./Profile";
import { Button } from "./ui/button";

function Header() {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center">
      <p className="text-4xl font-bold">Products</p>
      <div className="bg-gray-100 shadow-sm flex space-x-4 items-center px-4 py-3 rounded-sm ">
        <Search className="h-5 w-6" />
        <input
          type="text"
          placeholder="Search"
          className="border-none placeholder:text-lg bg-transparent outline-none w-96"
        />
      </div>
      <div className="flex space-x-4 items-center ">
        <Cart />
        {user != null ? (
          <Profile />
        ) : (
          <div className="flex space-x-4 p-2 text-xl">
            <Link href="/signup">
              <Button variant="outline" className="text-lg">
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button className="text-lg">Log In</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { Header };
