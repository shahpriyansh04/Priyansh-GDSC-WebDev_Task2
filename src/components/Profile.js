import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth";
import app from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Profile() {
  const { user } = useAuth();
  if (user.photoURL == null) {
    user.photoURL =
      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";
  }
  const auth = getAuth(app);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <DropdownMenu className="p-4">
      <DropdownMenuTrigger>
        <div className="flex space-x-2 hover: bg-g ay-50 hover:shadow-sm p-2 hover:cursor-pointer transition-all  ease-in duration-200">
          <Avatar>
            <AvatarImage src={user.photoURL} className="h-10 w-10" />
            <AvatarFallback>CN</AvatarFallback>{" "}
          </Avatar>
          <div className="flex flex-col -space-y-1 text-left">
            <p className="text-md font-semibold">{user.email}</p>
            <p className="text-sm text-gray-400">Click here to view more</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-lg w-40">
        <DropdownMenuLabel className="text-lg font-bold">
          Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-lg text-center">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-lg text-red-500 text-center"
          onClick={logout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
