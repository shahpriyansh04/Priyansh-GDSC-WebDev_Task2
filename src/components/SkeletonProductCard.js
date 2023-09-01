import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonProductCard() {
  return (
    <div className="flex flex-col items-center justify-center p-0 rounded-sm ">
      <Card className="w-full  bg-white dark:bg-black">
        <Skeleton className=" h-60 rounded-b-none" />
        <CardHeader>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent className="flex flex-col space-y-2 justify-center items-cener text-lg">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardContent>
      </Card>
    </div>
  );
}
