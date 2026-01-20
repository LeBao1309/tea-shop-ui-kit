import { ArrowRight, Leaf, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import heroImage from "@/assets/hero-tea.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

/**
 * HOME PAGE - Trang chủ
 * PHP: resources/views/pages/home.php
 * 
 * 3 Sections chính:
 * 1. Hero - Giới thiệu thương hiệu
 * 2. Featured Products - Sản phẩm nổi bật
 * 3. Benefits - Lợi ích / USP
 */

const featuredProducts = [
  {
    id: 1,
    name: "Trà Thái Nguyên Đặc Biệt",
    price: 250000,
    originalPrice: 320000,
    image: product1,
    category: "Trà xanh",
  },
  {
    id: 2,
    name: "Trà Ô Long Cao Cấp",
    price: 380000,
    image: product2,
    category: "Trà Ô Long",
  },
  {
    id: 3,
    name: "Bột Matcha Nguyên Chất",
    price: 450000,
    originalPrice: 520000,
    image: product3,
    category: "Matcha",
  },
  {
    id: 4,
    name: "Trà Hoa Nhài Thảo Mộc",
    price: 180000,
    image: product4,
    category: "Trà thảo mộc",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "100% Tự Nhiên",
    description: "Trà được thu hoạch từ những vùng núi cao, không thuốc trừ sâu.",
  },
  {
    icon: Shield,
    title: "Chất Lượng Đảm Bảo",
    description: "Quy trình sản xuất nghiêm ngặt, đạt chuẩn an toàn thực phẩm.",
  },
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    description: "Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên.",
  },
  {
    icon: Award,
    title: "Thương Hiệu Uy Tín",
    description: "Hơn 10 năm kinh nghiệm phục vụ khách hàng yêu trà.",
  },
];

const Home = () => {
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
                <img
                  src={heroImage}
                  alt="Trà Việt Nam cao cấp"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-sm text-muted-foreground">Bestseller</p>
                  <p className="font-semibold text-foreground">Trà Thái Nguyên</p>
                  <p className="text-primary font-bold">250.000đ</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: FEATURED PRODUCTS
          ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">
              Bộ sưu tập
            </span>
            <h2 className="section-title mt-2 mb-4">Sản Phẩm Nổi Bật</h2>
            <p className="section-subtitle">
              Những loại trà được yêu thích nhất, chọn lọc kỹ càng từ những vùng trà danh tiếng
            </p>
          </div>

          {/* Products Grid */}
          {/* <?php foreach ($featuredProducts as $product): ?> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {/* <?php endforeach; ?> */}

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              Xem tất cả sản phẩm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: BENEFITS / USP
          ===================================================== */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide">
              Tại sao chọn chúng tôi
            </span>
            <h2 className="section-title mt-2 mb-4">Cam Kết Chất Lượng</h2>
            <p className="section-subtitle">
              Chúng tôi cam kết mang đến những sản phẩm trà tốt nhất cho sức khỏe của bạn
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
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
              <input
                type="email"
                placeholder="Email của bạn"
                className="form-input flex-1"
              />
              <button type="submit" className="btn-secondary">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
