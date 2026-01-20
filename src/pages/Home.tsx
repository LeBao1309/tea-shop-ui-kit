import { useState } from "react";
import { ArrowRight, Leaf, Shield, Truck, Award, Star, Quote, Search, ShoppingBag, CreditCard, Package, Flame, Percent, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import heroImage from "@/assets/hero-tea.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import accessory1 from "@/assets/accessory-1.jpg";
import accessory2 from "@/assets/accessory-2.jpg";
import accessory3 from "@/assets/accessory-3.jpg";
import combo1 from "@/assets/combo-1.jpg";
import combo2 from "@/assets/combo-2.jpg";
import combo3 from "@/assets/combo-3.jpg";

/**
 * HOME PAGE - Trang chủ
 * PHP: resources/views/pages/home.php
 * 
 * Sections (Đã sắp xếp hợp lý):
 * 1. Hero - Giới thiệu thương hiệu
 * 2. Benefits - Lợi ích / USP (Tạo niềm tin trước)
 * 3. Featured Products - Sản phẩm nổi bật (Với filter)
 * 4. Combo Products - Combo theo chủ đề
 * 5. Accessories - Phụ kiện trà
 * 6. Customer Reviews - Đánh giá khách hàng (Social proof)
 * 7. Order Guide - Hướng dẫn đặt hàng
 * 8. CTA Newsletter
 */

type ProductFilter = 'all' | 'bestseller' | 'discount' | 'new';

const productFilters = [
  { key: 'all' as ProductFilter, label: 'Tất cả', icon: Sparkles },
  { key: 'bestseller' as ProductFilter, label: 'Bán chạy', icon: Flame },
  { key: 'discount' as ProductFilter, label: 'Khuyến mãi', icon: Percent },
  { key: 'new' as ProductFilter, label: 'Mới nhất', icon: TrendingUp },
];

const allProducts = [
  { id: 1, name: "Trà Thái Nguyên Đặc Biệt", price: 250000, originalPrice: 320000, image: product1, category: "Trà xanh", tags: ['bestseller', 'discount'] },
  { id: 2, name: "Trà Ô Long Cao Cấp", price: 380000, image: product2, category: "Trà Ô Long", tags: ['bestseller'] },
  { id: 3, name: "Bột Matcha Nguyên Chất", price: 450000, originalPrice: 520000, image: product3, category: "Matcha", tags: ['discount', 'new'] },
  { id: 4, name: "Trà Hoa Nhài Thảo Mộc", price: 180000, image: product4, category: "Trà thảo mộc", tags: ['new'] },
  { id: 5, name: "Trà Sen Tây Hồ", price: 420000, originalPrice: 550000, image: product1, category: "Trà sen", tags: ['bestseller', 'discount'] },
  { id: 6, name: "Trà Lài Mộc Châu", price: 195000, image: product2, category: "Trà hoa", tags: ['new'] },
  { id: 7, name: "Trà Đen Premium", price: 280000, originalPrice: 350000, image: product3, category: "Trà đen", tags: ['discount'] },
  { id: 8, name: "Trà Shan Tuyết Cổ Thụ", price: 520000, image: product4, category: "Trà xanh", tags: ['bestseller', 'new'] },
];

const benefits = [
  { icon: Leaf, title: "100% Tự Nhiên", description: "Trà được thu hoạch từ những vùng núi cao, không thuốc trừ sâu." },
  { icon: Shield, title: "Chất Lượng Đảm Bảo", description: "Quy trình sản xuất nghiêm ngặt, đạt chuẩn an toàn thực phẩm." },
  { icon: Truck, title: "Giao Hàng Nhanh", description: "Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên." },
  { icon: Award, title: "Thương Hiệu Uy Tín", description: "Hơn 10 năm kinh nghiệm phục vụ khách hàng yêu trà." },
];

const customerReviews = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    avatar: "M",
    location: "Hà Nội",
    rating: 5,
    comment: "Trà Thái Nguyên ở đây rất thơm và đậm đà. Mình đã mua nhiều lần và luôn hài lòng với chất lượng. Giao hàng nhanh, đóng gói cẩn thận.",
    product: "Trà Thái Nguyên Đặc Biệt",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    avatar: "H",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    comment: "Matcha nguyên chất, màu xanh đẹp, vị đắng nhẹ thanh mát. Pha latte rất ngon. Sẽ tiếp tục ủng hộ shop!",
    product: "Bột Matcha Nguyên Chất",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    avatar: "H",
    location: "Đà Nẵng",
    rating: 5,
    comment: "Combo quà tặng rất đẹp, sang trọng. Mình mua tặng đối tác và họ rất thích. Giá cả hợp lý so với chất lượng.",
    product: "Combo Quà Tặng Premium",
  },
];

const accessories = [
  { id: 101, name: "Bộ Ấm Trà Sứ Cao Cấp", price: 850000, originalPrice: 1200000, image: accessory1, category: "Ấm trà" },
  { id: 102, name: "Set Chén Trà Tinh Xảo", price: 320000, image: accessory2, category: "Chén trà" },
  { id: 103, name: "Khay Trà Tre Tự Nhiên", price: 450000, image: accessory3, category: "Khay trà" },
];

const combos = [
  {
    id: 201,
    name: "Combo Quà Tặng Premium",
    description: "4 loại trà cao cấp + Hộp quà sang trọng",
    price: 890000,
    originalPrice: 1200000,
    image: combo1,
    tag: "Bestseller",
  },
  {
    id: 202,
    name: "Combo Sức Khỏe Wellness",
    description: "6 loại trà thảo mộc + Túi vải organic",
    price: 650000,
    originalPrice: 850000,
    image: combo2,
    tag: "Mới",
  },
  {
    id: 203,
    name: "Combo Văn Phòng",
    description: "Bình pha trà + 3 loại trà + Lọ đựng",
    price: 520000,
    originalPrice: 700000,
    image: combo3,
    tag: "Hot",
  },
];

const orderSteps = [
  {
    step: 1,
    icon: Search,
    title: "Chọn Sản Phẩm",
    description: "Duyệt qua bộ sưu tập trà đa dạng và chọn sản phẩm yêu thích của bạn.",
  },
  {
    step: 2,
    icon: ShoppingBag,
    title: "Thêm Vào Giỏ",
    description: "Thêm sản phẩm vào giỏ hàng, điều chỉnh số lượng theo nhu cầu.",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Thanh Toán",
    description: "Nhập thông tin giao hàng và chọn phương thức thanh toán phù hợp.",
  },
  {
    step: 4,
    icon: Package,
    title: "Nhận Hàng",
    description: "Đơn hàng được giao đến tận nơi trong 2-5 ngày làm việc.",
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('all');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const filteredProducts = activeFilter === 'all' 
    ? allProducts.slice(0, 8)
    : allProducts.filter(p => p.tags.includes(activeFilter));

  return (
    <MainLayout>
      {/* =====================================================
          SECTION 1: HERO
          ===================================================== */}
      <section className="hero-section min-h-[80vh] flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-6">
                🍃 Trà Việt Nam Chính Hiệu
              </span>
              <h1 className="hero-title mb-6">
                Hương Vị Trà <br />
                <span className="text-primary">Tinh Túy</span> Việt Nam
              </h1>
              <p className="hero-subtitle mb-8 max-w-lg">
                Khám phá bộ sưu tập trà cao cấp từ những vùng trà nổi tiếng như 
                Thái Nguyên, Lâm Đồng. Mỗi tách trà là một hành trình về với thiên nhiên.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary flex items-center gap-2">
                  Khám phá ngay
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="btn-outline">
                  Về chúng tôi
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Sản phẩm</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Khách hàng</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Vùng trà</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img src={heroImage} alt="Trà Việt Nam cao cấp" className="w-full h-[400px] lg:h-[500px] object-cover" />
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-sm text-muted-foreground">Bestseller</p>
                  <p className="font-semibold text-foreground">Trà Thái Nguyên</p>
                  <p className="text-primary font-bold">250.000đ</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: BENEFITS / USP (Đưa lên trước để tạo niềm tin)
          ===================================================== */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">Tại sao chọn chúng tôi</span>
            <h2 className="section-title mt-2 mb-4">Cam Kết Chất Lượng</h2>
            <p className="section-subtitle">Chúng tôi cam kết mang đến những sản phẩm trà tốt nhất cho sức khỏe của bạn</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: FEATURED PRODUCTS (Với Filter Tabs)
          ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">Bộ sưu tập</span>
            <h2 className="section-title mt-2 mb-4">Sản Phẩm Nổi Bật</h2>
            <p className="section-subtitle">Những loại trà được yêu thích nhất, chọn lọc kỹ càng từ những vùng trà danh tiếng</p>
          </div>

          {/* Filter Tabs */}
          {/* <?php 
            $filters = ['all' => 'Tất cả', 'bestseller' => 'Bán chạy', 'discount' => 'Khuyến mãi', 'new' => 'Mới nhất'];
            $activeFilter = $_GET['filter'] ?? 'all';
          ?> */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {productFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
                {filter.key !== 'all' && (
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeFilter === filter.key ? 'bg-primary-foreground/20' : 'bg-muted'
                  }`}>
                    {allProducts.filter(p => p.tags.includes(filter.key)).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <?php foreach ($products as $product): ?> */}
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
            {/* <?php endforeach; ?> */}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Không có sản phẩm nào trong danh mục này</p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              Xem tất cả sản phẩm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4: COMBO PRODUCTS - Combo theo chủ đề (Đưa lên trước phụ kiện)
          ===================================================== */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">Combo tiết kiệm</span>
            <h2 className="section-title mt-2 mb-4">Combo Theo Chủ Đề</h2>
            <p className="section-subtitle">Tiết kiệm hơn khi mua combo, quà tặng ý nghĩa cho người thân yêu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <?php foreach ($combos as $combo): ?> */}
            {combos.map((combo, index) => (
              <div
                key={combo.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                    combo.tag === 'Bestseller' ? 'bg-primary text-primary-foreground' :
                    combo.tag === 'Mới' ? 'bg-accent text-accent-foreground' :
                    'bg-destructive text-destructive-foreground'
                  }`}>
                    {combo.tag}
                  </div>
                  {/* Discount */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-destructive">
                    -{Math.round((1 - combo.price / combo.originalPrice) * 100)}%
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {combo.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(combo.price)}
                    </span>
                    <span className="text-muted-foreground line-through">
                      {formatPrice(combo.originalPrice)}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/products/${combo.id}`}
                    className="btn-primary w-full text-center block"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
            {/* <?php endforeach; ?> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5: ACCESSORIES - Phụ kiện trà
          ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide">Phụ kiện</span>
              <h2 className="section-title mt-2 text-left">Phụ Kiện Trà Cao Cấp</h2>
              <p className="text-muted-foreground mt-2 max-w-lg">
                Nâng tầm trải nghiệm thưởng trà với những phụ kiện tinh tế
              </p>
            </div>
            <Link to="/products?category=accessories" className="btn-outline text-sm">
              Xem tất cả phụ kiện
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <?php foreach ($accessories as $accessory): ?> */}
            {accessories.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
            {/* <?php endforeach; ?> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6: CUSTOMER REVIEWS - Đánh giá khách hàng (Social proof)
          ===================================================== */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">Khách hàng nói gì</span>
            <h2 className="section-title mt-2 mb-4">Đánh Giá Từ Khách Hàng</h2>
            <p className="section-subtitle">Hơn 10.000 khách hàng đã tin tưởng và yêu thích sản phẩm của chúng tôi</p>
          </div>

          {/* Stats - Đưa lên trên để tạo ấn tượng */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-3xl md:text-4xl font-bold text-primary">4.9</p>
              <p className="text-sm text-muted-foreground mt-1">Đánh giá trung bình</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-3xl md:text-4xl font-bold text-primary">2.5K+</p>
              <p className="text-sm text-muted-foreground mt-1">Đánh giá 5 sao</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Khách hài lòng</p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-3xl md:text-4xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground mt-1">Khách quay lại</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <?php foreach ($reviews as $review): ?> */}
            {customerReviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-tea-gold text-tea-gold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground leading-relaxed mb-6">"{review.comment}"</p>

                {/* Product Tag */}
                <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground mb-4">
                  {review.product}
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* <?php endforeach; ?> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 7: ORDER GUIDE - Hướng dẫn đặt hàng
          ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">Dễ dàng & Nhanh chóng</span>
            <h2 className="section-title mt-2 mb-4">Hướng Dẫn Đặt Hàng</h2>
            <p className="section-subtitle">Chỉ 4 bước đơn giản để sở hữu những sản phẩm trà yêu thích</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <?php foreach ($orderSteps as $step): ?> */}
            {orderSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line */}
                {index < orderSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}

                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-6 shadow-soft">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                    <item.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            {/* <?php endforeach; ?> */}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Bắt đầu mua sắm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 8: CTA NEWSLETTER
          ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Đăng ký nhận ưu đãi
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nhận ngay voucher giảm 10% cho đơn hàng đầu tiên và cập nhật những sản phẩm mới nhất
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Email của bạn" className="form-input flex-1" />
              <button type="submit" className="btn-secondary">Đăng ký</button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
