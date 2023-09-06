import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

import { login, signInWithGoogle, useAuth } from "@/lib/auth";
import app from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email);
  const auth = getAuth(app);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button
            variant="outline"
            className="text-lg"
            onClick={() => signInWithGoogle(setLoading)}
            disabled={loading}
          >
            {loading && <Loader2 className="mr-4 h-4 w-4 animate-spin" />}
            <FcGoogle className="mr-2 h-5 w-5" />
            Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="a@example.com"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 mt-4">
          <p className="text-left text-sm text-gray-500 w-full">
            Don't have an account, create one{" "}
            <Link href="/signup" className="text-blue-500">
              here
            </Link>
          </p>
          <Button
            className="w-full text-lg"
            onClick={() => {
              login(auth, email, password, setLoading);
            }}
            disabled={loading}
          >
            {loading && <Loader2 className="mr-4 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
