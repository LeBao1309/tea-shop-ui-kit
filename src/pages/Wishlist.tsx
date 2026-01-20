import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Heart, ShoppingCart, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import combo1 from "@/assets/combo-1.jpg";

/**
 * WISHLIST PAGE
 * PHP Usage:
 * <?php
 *   require_once 'includes/auth.php';
 *   requireLogin();
 *   $wishlistItems = $wishlistModel->getByUser($_SESSION['user_id']);
 * ?>
 */

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

// Mock wishlist data - PHP sẽ thay thế bằng dữ liệu từ database
const mockWishlist: WishlistItem[] = [
  {
    id: 1,
    name: "Trà Ô Long Đặc Biệt",
    price: 350000,
    originalPrice: 420000,
    image: product1,
    category: "Trà Ô Long",
    inStock: true,
  },
  {
    id: 2,
    name: "Trà Xanh Thái Nguyên",
    price: 280000,
    image: product2,
    category: "Trà Xanh",
    inStock: true,
  },
  {
    id: 3,
    name: "Trà Sen Tây Hồ",
    price: 450000,
    originalPrice: 500000,
    image: product3,
    category: "Trà Sen",
    inStock: false,
  },
  {
    id: 4,
    name: "Combo Trà Thượng Hạng",
    price: 890000,
    originalPrice: 1050000,
    image: combo1,
    category: "Combo",
    inStock: true,
  },
];

const Wishlist = () => {
  const [items, setItems] = useState<WishlistItem[]>(mockWishlist);

  const removeItem = (id: number) => {
    // <?php $wishlistModel->remove($userId, $productId); ?>
    setItems(items.filter((item) => item.id !== id));
  };

  const addToCart = (id: number) => {
    // <?php $cartModel->add($userId, $productId, 1); ?>
    console.log("Added to cart:", id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  return (
    <MainLayout>
      <div className="bg-secondary/30 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                Sản phẩm yêu thích
              </h1>
              <p className="text-muted-foreground mt-1">
                {items.length} sản phẩm trong danh sách
              </p>
            </div>
          </div>

          {/* Wishlist Items */}
          {items.length === 0 ? (
            <div className="bg-card rounded-xl p-12 text-center">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Chưa có sản phẩm yêu thích
              </h2>
              <p className="text-muted-foreground mb-6">
                Hãy khám phá và thêm các sản phẩm bạn yêu thích vào danh sách!
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/products">Khám phá sản phẩm</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold px-4 py-2 bg-black/70 rounded-lg">
                          Hết hàng
                        </span>
                      </div>
                    )}
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-red-50 transition-colors group/btn"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground group-hover/btn:text-red-500" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs text-primary font-medium mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1"
                        asChild
                      >
                        <Link to={`/products/${item.id}`}>
                          <Eye className="w-4 h-4" />
                          Xem
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 gap-1 bg-primary hover:bg-primary/90"
                        disabled={!item.inStock}
                        onClick={() => addToCart(item.id)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Thêm
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          {items.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  const inStockItems = items.filter((item) => item.inStock);
                  inStockItems.forEach((item) => addToCart(item.id));
                }}
                className="gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Thêm tất cả vào giỏ hàng
              </Button>
              <Button
                variant="outline"
                onClick={() => setItems([])}
                className="gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Xóa tất cả
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Wishlist;
