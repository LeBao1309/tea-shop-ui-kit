import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * PRODUCT CARD COMPONENT
 * PHP Usage:
 * <?php foreach ($products as $product): ?>
 *   <?php include 'components/product-card.php'; ?>
 * <?php endforeach; ?>
 * 
 * Variables needed:
 * - $product['id']
 * - $product['name']
 * - $product['price']
 * - $product['original_price'] (optional)
 * - $product['image']
 * - $product['category']
 */

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, originalPrice, image, category }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="product-card group">
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="product-image group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* DISCOUNT BADGE */}
        {/* <?php if ($product['original_price']): ?> */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-lg">
            -{discount}%
          </div>
        )}
        {/* <?php endif; ?> */}

        {/* QUICK ACTIONS */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-9 h-9 bg-card rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* ADD TO CART OVERLAY */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5">
            <ShoppingCart className="w-4 h-4" />
            Thêm vào giỏ
          </button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </span>

        {/* Name */}
        <Link to={`/products/${id}`}>
          <h3 className="product-title mt-1 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="product-price">
            {formatPrice(price)}
          </span>
          {/* <?php if ($product['original_price']): ?> */}
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
          {/* <?php endif; ?> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
