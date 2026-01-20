import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Minus, Plus, Star, Truck, Shield, RotateCcw, ChevronRight, ThumbsUp, MessageCircle, User } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
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
 * - $reviews (array)
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

// Mock reviews data - PHP sẽ thay thế bằng dữ liệu từ database
const reviewsData = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    avatar: null,
    rating: 5,
    date: "2024-01-15",
    content: "Trà rất thơm và ngon, đúng chuẩn Thái Nguyên. Đóng gói cẩn thận, giao hàng nhanh. Sẽ mua lại lần sau!",
    helpful: 24,
    images: [product1],
  },
  {
    id: 2,
    user: "Trần Thị B",
    avatar: null,
    rating: 5,
    date: "2024-01-12",
    content: "Mình đã thử nhiều loại trà nhưng đây là loại ngon nhất. Hương thơm tự nhiên, vị đậm đà mà không chát. Rất hài lòng!",
    helpful: 18,
    images: [],
  },
  {
    id: 3,
    user: "Lê Văn C",
    avatar: null,
    rating: 4,
    date: "2024-01-10",
    content: "Chất lượng tốt, giá cả hợp lý. Trừ 1 sao vì ship hơi lâu, nhưng sản phẩm thì không chê vào đâu được.",
    helpful: 12,
    images: [product2, product3],
  },
  {
    id: 4,
    user: "Phạm Thị D",
    avatar: null,
    rating: 5,
    date: "2024-01-08",
    content: "Mua tặng bố mẹ, cả nhà đều khen ngon. Đóng gói đẹp, sang trọng, phù hợp làm quà biếu.",
    helpful: 8,
    images: [],
  },
];

const ratingDistribution = [
  { stars: 5, count: 98, percentage: 76 },
  { stars: 4, count: 22, percentage: 17 },
  { stars: 3, count: 6, percentage: 5 },
  { stars: 2, count: 2, percentage: 2 },
  { stars: 1, count: 0, percentage: 0 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewContent, setReviewContent] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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

      {/* CUSTOMER REVIEWS */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="section-title">Đánh Giá Từ Khách Hàng</h2>
            <Button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Viết đánh giá
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {productData.rating}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(productData.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    {productData.reviews} đánh giá
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-3">
                  {ratingDistribution.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <span className="text-sm w-8">{item.stars} ★</span>
                      <Progress value={item.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground w-10">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Review Form */}
              {showReviewForm && (
                <div className="bg-card rounded-2xl p-6 border border-border animate-fade-in">
                  <h3 className="font-semibold text-foreground mb-4">
                    Viết đánh giá của bạn
                  </h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Đánh giá sao
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= reviewRating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nội dung đánh giá
                    </label>
                    <Textarea
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..."
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-primary hover:bg-primary/90">
                      Gửi đánh giá
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowReviewForm(false)}
                    >
                      Hủy
                    </Button>
                  </div>
                </div>
              )}

              {/* Reviews */}
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {review.user}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-primary text-primary"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {formatDate(review.date)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {review.content}
                      </p>

                      {/* Review Images */}
                      {review.images.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt=""
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                          ))}
                        </div>
                      )}

                      {/* Helpful */}
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        Hữu ích ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" className="gap-2">
                  Xem thêm đánh giá
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Sản Phẩm Liên Quan</h2>
            <Link 
              to="/products" 
              className="text-primary hover:underline flex items-center gap-1"
            >
              Xem tất cả
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
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
