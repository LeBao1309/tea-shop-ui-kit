import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown, Leaf, Package, Coffee, Flower2, Gift, UtensilsCrossed } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
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
 * PRODUCTS PAGE - Trang danh sách sản phẩm
 * PHP: resources/views/pages/products.php
 * 
 * Includes: Trà, Combo, Trà cụ (Phụ kiện)
 */

const categories = [
  { id: "all", name: "Tất cả", icon: Package },
  { id: "green", name: "Trà xanh", icon: Leaf },
  { id: "oolong", name: "Trà Ô Long", icon: Coffee },
  { id: "matcha", name: "Matcha", icon: Flower2 },
  { id: "herbal", name: "Trà thảo mộc", icon: Leaf },
  { id: "combo", name: "Combo", icon: Gift },
  { id: "accessory", name: "Trà cụ", icon: UtensilsCrossed },
];

const allProducts = [
  // Trà xanh
  { id: 1, name: "Trà Thái Nguyên Đặc Biệt", price: 250000, originalPrice: 320000, image: product1, category: "green", categoryName: "Trà xanh", tags: ['bestseller', 'discount'] },
  { id: 5, name: "Trà Xanh Lâm Đồng", price: 220000, image: product1, category: "green", categoryName: "Trà xanh", tags: ['new'] },
  { id: 9, name: "Trà Sen Tây Hồ", price: 420000, originalPrice: 550000, image: product1, category: "green", categoryName: "Trà xanh", tags: ['bestseller', 'discount'] },
  
  // Trà Ô Long
  { id: 2, name: "Trà Ô Long Cao Cấp", price: 380000, image: product2, category: "oolong", categoryName: "Trà Ô Long", tags: ['bestseller'] },
  { id: 6, name: "Trà Ô Long Đài Loan", price: 420000, image: product2, category: "oolong", categoryName: "Trà Ô Long", tags: ['new'] },
  { id: 10, name: "Ô Long Sữa Premium", price: 350000, originalPrice: 400000, image: product2, category: "oolong", categoryName: "Trà Ô Long", tags: ['discount'] },
  
  // Matcha
  { id: 3, name: "Bột Matcha Nguyên Chất", price: 450000, originalPrice: 520000, image: product3, category: "matcha", categoryName: "Matcha", tags: ['discount', 'bestseller'] },
  { id: 7, name: "Matcha Latte Mix", price: 280000, image: product3, category: "matcha", categoryName: "Matcha", tags: ['new'] },
  { id: 11, name: "Matcha Culinary Grade", price: 320000, image: product3, category: "matcha", categoryName: "Matcha", tags: [] },
  
  // Trà thảo mộc
  { id: 4, name: "Trà Hoa Nhài Thảo Mộc", price: 180000, image: product4, category: "herbal", categoryName: "Trà thảo mộc", tags: ['new'] },
  { id: 8, name: "Trà Atiso Đà Lạt", price: 160000, image: product4, category: "herbal", categoryName: "Trà thảo mộc", tags: ['bestseller'] },
  { id: 12, name: "Trà Hoa Cúc Mật Ong", price: 195000, image: product4, category: "herbal", categoryName: "Trà thảo mộc", tags: [] },
  
  // Combo
  { id: 101, name: "Combo Quà Tặng Premium", price: 890000, originalPrice: 1200000, image: combo1, category: "combo", categoryName: "Combo", tags: ['bestseller', 'discount'] },
  { id: 102, name: "Combo Sức Khỏe Wellness", price: 650000, originalPrice: 850000, image: combo2, category: "combo", categoryName: "Combo", tags: ['new', 'discount'] },
  { id: 103, name: "Combo Văn Phòng", price: 520000, originalPrice: 700000, image: combo3, category: "combo", categoryName: "Combo", tags: ['discount'] },
  { id: 104, name: "Combo Gia Đình", price: 750000, originalPrice: 950000, image: combo1, category: "combo", categoryName: "Combo", tags: ['new'] },
  
  // Trà cụ (Phụ kiện)
  { id: 201, name: "Bộ Ấm Trà Sứ Cao Cấp", price: 850000, originalPrice: 1200000, image: accessory1, category: "accessory", categoryName: "Trà cụ", tags: ['bestseller', 'discount'] },
  { id: 202, name: "Set Chén Trà Tinh Xảo", price: 320000, image: accessory2, category: "accessory", categoryName: "Trà cụ", tags: ['new'] },
  { id: 203, name: "Khay Trà Tre Tự Nhiên", price: 450000, image: accessory3, category: "accessory", categoryName: "Trà cụ", tags: ['bestseller'] },
  { id: 204, name: "Bình Pha Trà Thủy Tinh", price: 280000, image: accessory1, category: "accessory", categoryName: "Trà cụ", tags: [] },
  { id: 205, name: "Muỗng Trà Gỗ Handmade", price: 95000, image: accessory2, category: "accessory", categoryName: "Trà cụ", tags: ['new'] },
  { id: 206, name: "Hộp Đựng Trà Gỗ Óc Chó", price: 380000, image: accessory3, category: "accessory", categoryName: "Trà cụ", tags: [] },
];

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'bestseller';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'bestseller', label: 'Bán chạy' },
  { value: 'price-asc', label: 'Giá tăng dần' },
  { value: 'price-desc', label: 'Giá giảm dần' },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Lọc theo danh mục
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Lọc theo tìm kiếm
    if (searchQuery.trim()) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sắp xếp
    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'bestseller':
        result = [...result].sort((a, b) => 
          (b.tags.includes('bestseller') ? 1 : 0) - (a.tags.includes('bestseller') ? 1 : 0)
        );
        break;
      default:
        result = [...result].sort((a, b) => 
          (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0)
        );
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  // Đếm số sản phẩm theo danh mục
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return allProducts.length;
    return allProducts.filter(p => p.category === categoryId).length;
  };

  return (
    <MainLayout>
      {/* PAGE HEADER */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <h1 className="section-title mb-4">Bộ Sưu Tập Trà</h1>
              <p className="section-subtitle">
                Khám phá hơn 500 loại trà, combo và trà cụ cao cấp
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Category Pills - Mobile Friendly */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                  <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                    activeCategory === cat.id 
                      ? "bg-primary-foreground/20" 
                      : "bg-muted"
                  }`}>
                    {getCategoryCount(cat.id)}
                  </span>
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FILTERS & PRODUCTS */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* SIDEBAR FILTERS */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <label className="form-label">Tìm kiếm</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Tên sản phẩm..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                {/* Categories - Desktop */}
                <div className="mb-6 hidden lg:block">
                  <label className="form-label">Danh mục</label>
                  <div className="space-y-2">
                    {/* <?php foreach ($categories as $category): ?> */}
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                          activeCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-card hover:bg-secondary"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <cat.icon className="w-4 h-4" />
                          <span className="font-medium">{cat.name}</span>
                        </span>
                        <span className={`text-sm ${
                          activeCategory === cat.id 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {getCategoryCount(cat.id)}
                        </span>
                      </button>
                    ))}
                    {/* <?php endforeach; ?> */}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="form-label">Khoảng giá</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Từ"
                      className="form-input text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Đến"
                      className="form-input text-sm"
                    />
                  </div>
                  <button className="btn-secondary w-full mt-3 text-sm py-2">
                    Áp dụng
                  </button>
                </div>

                {/* Tags Filter */}
                <div>
                  <label className="form-label">Bộ lọc nhanh</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                      🔥 Khuyến mãi
                    </button>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      ⭐ Bán chạy
                    </button>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors">
                      🆕 Mới nhất
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* PRODUCTS GRID */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <p className="text-muted-foreground">
                  Hiển thị <span className="font-semibold text-foreground">{filteredProducts.length}</span> sản phẩm
                  {activeCategory !== 'all' && (
                    <span className="ml-1">
                      trong <span className="font-semibold text-primary">
                        {categories.find(c => c.id === activeCategory)?.name}
                      </span>
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-3">
                  <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary transition-colors">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-sm">Bộ lọc</span>
                  </button>
                  
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowSortDropdown(!showSortDropdown)}
                      className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                    >
                      <span className="text-sm">{sortOptions.find(s => s.value === sortBy)?.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showSortDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-40 bg-card rounded-xl shadow-lg border border-border z-10 overflow-hidden">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value);
                              setShowSortDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                              sortBy === option.value ? 'bg-primary/10 text-primary font-medium' : ''
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ScrollAnimation key={product.id} animation="fade-up" delay={index * 30}>
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    category={product.categoryName}
                  />
                </ScrollAnimation>
              ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-secondary/30 rounded-2xl">
                  <Package className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-muted-foreground mb-4">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                  <button 
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                    className="btn-secondary"
                  >
                    Xem tất cả sản phẩm
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-card hover:bg-secondary transition-colors font-medium">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-card hover:bg-secondary transition-colors font-medium">
                    3
                  </button>
                  <span className="px-2 text-muted-foreground">...</span>
                  <button className="w-10 h-10 rounded-xl bg-card hover:bg-secondary transition-colors font-medium">
                    10
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
