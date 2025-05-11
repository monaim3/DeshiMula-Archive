import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const DeshimulSkeleton = () => {
  return (
    <Card className="h-full border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-6 w-full mt-2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-5/6 mt-2" />
        <Skeleton className="h-4 w-4/6 mt-2" />
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </CardFooter>
    </Card>
  );
};

export const DeshimulSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6).fill(0).map((_, index) => (
        <DeshimulSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
};

export default DeshimulSkeleton;