import { Card, CardContent } from "../card";
import { Skeleton } from "../skeleton";

export function DataTableLoading() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-8 w-72 mt-6" />
      <Card className="mt-6">
        <CardContent>
          <div className="h-[520px] w-full flex items-center justify-center">
            <div>Loading...</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
