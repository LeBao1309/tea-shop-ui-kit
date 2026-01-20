import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag, Truck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import combo1 from "@/assets/combo-1.jpg";
import accessory1 from "@/assets/accessory-1.jpg";

// Mock data - PHP sẽ thay thế bằng dữ liệu từ session/database
const initialCartItems = [
  {
    id: 1,
    name: "Trà Ô Long Đài Loan",
    price: 280000,
    originalPrice: 350000,
    quantity: 2,
    image: product1,
    category: "Trà Ô Long"
  },
  {
    id: 2,
    name: "Trà Xanh Thái Nguyên",
    price: 150000,
    quantity: 1,
    image: product2,
    category: "Trà Xanh"
  },
  {
    id: 3,
    name: "Combo Trà Đãi Khách",
    price: 450000,
    originalPrice: 550000,
    quantity: 1,
    image: combo1,
    category: "Combo"
  },
  {
    id: 4,
    name: "Ấm Trà Tử Sa Nghi Hưng",
    price: 890000,
    quantity: 1,
    image: accessory1,
    category: "Trà Cụ"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState<{ code: string; discount: number } | null>(null);
  const [voucherError, setVoucherError] = useState("");

  // Mock vouchers - PHP sẽ validate từ database
  const validVouchers: Record<string, number> = {
    "TRATHUONG10": 10,
    "GIAMGIA20": 20,
    "FREESHIP": 0, // Free shipping
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyVoucher = () => {
    setVoucherError("");
    const upperCode = voucherCode.toUpperCase().trim();
    
    if (!upperCode) {
      setVoucherError("Vui lòng nhập mã giảm giá");
      return;
    }

    if (validVouchers[upperCode] !== undefined) {
      setAppliedVoucher({ code: upperCode, discount: validVouchers[upperCode] });
      setVoucherCode("");
    } else {
      setVoucherError("Mã giảm giá không hợp lệ");
    }
  };

  const removeVoucher = () => {
    setAppliedVoucher(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalSaved = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const shippingFee = subtotal >= 500000 ? 0 : 30000;
  const voucherDiscount = appliedVoucher ? (subtotal * appliedVoucher.discount) / 100 : 0;
  const isFreeShipping = appliedVoucher?.code === "FREESHIP";
  const finalShipping = isFreeShipping ? 0 : shippingFee;
  const total = subtotal - voucherDiscount + finalShipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Giỏ hàng trống
            </h1>
            <p className="text-muted-foreground mb-8">
              Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá các sản phẩm trà tuyệt vời của chúng tôi!
            </p>
            <Link to="/products">
              <Button className="btn-primary">
                Khám phá sản phẩm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Giỏ hàng</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-foreground mb-8">
          Giỏ hàng của bạn
          <span className="text-lg font-normal text-muted-foreground ml-2">
            ({cartItems.length} sản phẩm)
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-border"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link to={`/products/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.category}
                        </span>
                        <Link to={`/products/${item.id}`}>
                          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                        </Link>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        aria-label="Xóa sản phẩm"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        {item.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.originalPrice * item.quantity)}
                          </p>
                        )}
                        <p className="text-lg font-bold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Tóm tắt đơn hàng
              </h2>

              {/* Voucher Code */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mã giảm giá
                </label>
                {appliedVoucher ? (
                  <div className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">
                        {appliedVoucher.code}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {appliedVoucher.discount > 0 
                          ? `(-${appliedVoucher.discount}%)`
                          : "(Miễn phí vận chuyển)"}
                      </span>
                    </div>
                    <button
                      onClick={removeVoucher}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Nhập mã giảm giá"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={applyVoucher}
                      variant="outline"
                      className="shrink-0"
                    >
                      Áp dụng
                    </Button>
                  </div>
                )}
                {voucherError && (
                  <p className="text-sm text-destructive mt-2">{voucherError}</p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Thử: TRATHUONG10, GIAMGIA20, FREESHIP
                </p>
              </div>

              <Separator className="my-4" />

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>

                {totalSaved > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Tiết kiệm</span>
                    <span className="font-medium">-{formatPrice(totalSaved)}</span>
                  </div>
                )}

                {voucherDiscount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Giảm giá voucher</span>
                    <span className="font-medium">-{formatPrice(voucherDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Phí vận chuyển
                  </span>
                  <span className={`font-medium ${finalShipping === 0 ? "text-accent" : ""}`}>
                    {finalShipping === 0 ? "Miễn phí" : formatPrice(finalShipping)}
                  </span>
                </div>

                {shippingFee > 0 && !isFreeShipping && subtotal < 500000 && (
                  <p className="text-xs text-muted-foreground bg-secondary/50 rounded-lg p-2">
                    🎁 Mua thêm {formatPrice(500000 - subtotal)} để được miễn phí vận chuyển
                  </p>
                )}
              </div>

              <Separator className="my-4" />

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Tổng cộng</span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button className="w-full btn-primary py-6 text-lg">
                  Tiến hành thanh toán
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Truck className="w-4 h-4 text-primary" />
                    </div>
                    <span>Giao hàng toàn quốc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-primary" />
                    </div>
                    <span>Đổi trả 30 ngày</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
