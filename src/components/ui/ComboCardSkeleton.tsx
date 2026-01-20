import { Skeleton } from "@/components/ui/skeleton";

/**
 * COMBO CARD SKELETON - Loading placeholder for combo cards
 * Matches the structure of combo cards in Home page
 */

const ComboCardSkeleton = () => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-card">
      {/* Image */}
      <Skeleton className="aspect-square w-full" />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Skeleton className="h-6 w-3/4 mb-2" />
        
        {/* Description */}
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-5 w-20" />
        </div>

        {/* CTA Button */}
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default ComboCardSkeleton;
