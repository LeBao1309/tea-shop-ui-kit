import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Minus, Plus, Star, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

/**
 * PRODUCT DETAIL PAGE - Chi tiết sản phẩm
 * PHP: resources/views/pages/product-detail.php
 * 
 * Variables needed:
 * - $product (object)
 * - $relatedProducts (array)
 */

const productData = {
  id: 1,
  name: "Trà Thái Nguyên Đặc Biệt",
  price: 250000,
  originalPrice: 320000,
  image: product1,
  images: [product1, product2, product3],
  category: "Trà xanh",
  description: "Trà Thái Nguyên đặc biệt được thu hoạch từ những đồi chè cao nhất vùng Tân Cương, nổi tiếng với hương thơm đặc trưng và vị ngọt hậu. Mỗi búp trà được chọn lọc kỹ càng, chế biến theo phương pháp truyền thống.",
  features: [
    "Xuất xứ: Tân Cương, Thái Nguyên",
    "Độ cao: 300-500m so với mực nước biển",
    "Thu hoạch: Mùa xuân",
    "Hạn sử dụng: 24 tháng",
  ],
  rating: 4.8,
  reviews: 128,
  inStock: true,
};

const relatedProducts = [
  { id: 2, name: "Trà Ô Long Cao Cấp", price: 380000, image: product2, category: "Trà Ô Long" },
  { id: 3, name: "Bột Matcha Nguyên Chất", price: 450000, originalPrice: 520000, image: product3, category: "Matcha" },
  { id: 4, name: "Trà Hoa Nhài Thảo Mộc", price: 180000, image: product4, category: "Trà thảo mộc" },
  { id: 5, name: "Trà Xanh Lâm Đồng", price: 220000, image: product1, category: "Trà xanh" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const discount = productData.originalPrice 
    ? Math.round((1 - productData.price / productData.originalPrice) * 100) 
    : 0;

  return (
    <MainLayout>
      {/* BREADCRUMB */}
      <div className="bg-secondary/30 py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{productData.name}</span>
          </nav>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* PRODUCT IMAGES */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-secondary mb-4">
                <img
                  src={productData.images[activeImage]}
                  alt={productData.name}
                  className="w-full aspect-square object-cover"
                />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground font-bold px-3 py-1 rounded-lg">
                    -{discount}%
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3">
                {productData.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div>
              {/* Category */}
              <span className="text-primary text-sm font-medium uppercase tracking-wide">
                {productData.category}
              </span>

              {/* Name */}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(productData.rating)
                          ? "fill-tea-gold text-tea-gold"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{productData.rating}</span>
                <span className="text-muted-foreground">({productData.reviews} đánh giá)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(productData.price)}
                </span>
                {productData.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(productData.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {productData.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-card flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-card flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Thêm vào giỏ hàng
                </button>

                {/* Wishlist */}
                <button className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Policies */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <Truck className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Miễn phí ship</p>
                    <p className="text-xs text-muted-foreground">Đơn từ 500K</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Bảo hành</p>
                    <p className="text-xs text-muted-foreground">Chính hãng 100%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Đổi trả</p>
                    <p className="text-xs text-muted-foreground">Trong 7 ngày</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <h2 className="section-title mb-8">Sản Phẩm Liên Quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetail;
