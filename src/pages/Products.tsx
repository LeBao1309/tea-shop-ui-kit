import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

/**
 * PRODUCTS PAGE - Trang danh sách sản phẩm
 * PHP: resources/views/pages/products.php
 * 
 * Variables needed:
 * - $products (array)
 * - $categories (array)
 * - $currentCategory (string)
 * - $searchQuery (string)
 */

const categories = [
  { id: "all", name: "Tất cả", count: 24 },
  { id: "green", name: "Trà xanh", count: 8 },
  { id: "oolong", name: "Trà Ô Long", count: 6 },
  { id: "matcha", name: "Matcha", count: 4 },
  { id: "herbal", name: "Trà thảo mộc", count: 6 },
];

const allProducts = [
  { id: 1, name: "Trà Thái Nguyên Đặc Biệt", price: 250000, originalPrice: 320000, image: product1, category: "Trà xanh" },
  { id: 2, name: "Trà Ô Long Cao Cấp", price: 380000, image: product2, category: "Trà Ô Long" },
  { id: 3, name: "Bột Matcha Nguyên Chất", price: 450000, originalPrice: 520000, image: product3, category: "Matcha" },
  { id: 4, name: "Trà Hoa Nhài Thảo Mộc", price: 180000, image: product4, category: "Trà thảo mộc" },
  { id: 5, name: "Trà Xanh Lâm Đồng", price: 220000, image: product1, category: "Trà xanh" },
  { id: 6, name: "Trà Ô Long Đài Loan", price: 420000, image: product2, category: "Trà Ô Long" },
  { id: 7, name: "Matcha Latte Mix", price: 280000, image: product3, category: "Matcha" },
  { id: 8, name: "Trà Atiso Đà Lạt", price: 160000, image: product4, category: "Trà thảo mộc" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout>
      {/* PAGE HEADER */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="section-title mb-4">Bộ Sưu Tập Trà</h1>
            <p className="section-subtitle">
              Khám phá hơn 500 loại trà cao cấp từ khắp Việt Nam
            </p>
          </div>
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

                {/* Categories */}
                <div className="mb-6">
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
                        <span className="font-medium">{cat.name}</span>
                        <span className={`text-sm ${
                          activeCategory === cat.id 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                    {/* <?php endforeach; ?> */}
                  </div>
                </div>

                {/* Price Range */}
                <div>
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
              </div>
            </aside>

            {/* PRODUCTS GRID */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <p className="text-muted-foreground">
                  Hiển thị <span className="font-semibold text-foreground">{allProducts.length}</span> sản phẩm
                </p>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary transition-colors">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-sm">Bộ lọc</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary transition-colors">
                    <span className="text-sm">Mới nhất</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              {/* <?php foreach ($products as $product): ?> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              {/* <?php endforeach; ?> */}

              {/* Pagination */}
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
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
