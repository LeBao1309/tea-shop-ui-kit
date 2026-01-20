import { Skeleton } from "@/components/ui/skeleton";

/**
 * PRODUCT CARD SKELETON - Loading placeholder for product cards
 * Matches the structure of ProductCard component
 */

const ProductCardSkeleton = () => {
  return (
    <div className="product-card">
      {/* IMAGE PLACEHOLDER */}
      <div className="relative overflow-hidden">
        <Skeleton className="w-full aspect-square" />
      </div>

      {/* PRODUCT INFO PLACEHOLDER */}
      <div className="p-4">
        {/* Category */}
        <Skeleton className="h-3 w-16 mb-2" />

        {/* Name */}
        <Skeleton className="h-5 w-full mb-1" />
        <Skeleton className="h-5 w-3/4 mb-3" />

        {/* Price */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
