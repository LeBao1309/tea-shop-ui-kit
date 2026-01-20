import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  CreditCard, 
  Wallet, 
  Building, 
  Truck,
  MapPin,
  Phone,
  User,
  Mail,
  CheckCircle,
  ShieldCheck,
  Package
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import combo1 from "@/assets/combo-1.jpg";
import accessory1 from "@/assets/accessory-1.jpg";

// Mock cart data - PHP sẽ lấy từ session
const cartItems = [
  { id: 1, name: "Trà Ô Long Đài Loan", price: 280000, quantity: 2, image: product1 },
  { id: 2, name: "Trà Xanh Thái Nguyên", price: 150000, quantity: 1, image: product2 },
  { id: 3, name: "Combo Trà Đãi Khách", price: 450000, quantity: 1, image: combo1 },
  { id: 4, name: "Ấm Trà Tử Sa Nghi Hưng", price: 890000, quantity: 1, image: accessory1 }
];

const paymentMethods = [
  {
    id: "cod",
    name: "Thanh toán khi nhận hàng",
    description: "Thanh toán tiền mặt khi nhận hàng",
    icon: Wallet
  },
  {
    id: "bank",
    name: "Chuyển khoản ngân hàng",
    description: "Chuyển khoản trước khi giao hàng",
    icon: Building
  },
  {
    id: "card",
    name: "Thẻ tín dụng / Ghi nợ",
    description: "Visa, Mastercard, JCB",
    icon: CreditCard
  }
];

const shippingMethods = [
  {
    id: "standard",
    name: "Giao hàng tiêu chuẩn",
    description: "3-5 ngày làm việc",
    price: 30000
  },
  {
    id: "express",
    name: "Giao hàng nhanh",
    description: "1-2 ngày làm việc",
    price: 50000
  }
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    ward: "",
    district: "",
    city: "",
    note: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const selectedShipping = shippingMethods.find(s => s.id === shippingMethod);
  const shippingFee = subtotal >= 500000 ? 0 : (selectedShipping?.price || 30000);
  const total = subtotal + shippingFee;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock order processing - PHP sẽ xử lý thực tế
    // <?php
    // // Validate form data
    // // Create order in database
    // // Send confirmation email
    // // Clear cart session
    // ?>
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center animate-fade-up">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Đặt hàng thành công!
            </h1>
            <p className="text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.
            </p>
            <div className="bg-card rounded-2xl p-6 mb-8 text-left animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold mb-4">Thông tin đơn hàng</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mã đơn hàng:</span>
                  <span className="font-medium">#TRA{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng tiền:</span>
                  <span className="font-bold text-primary">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phương thức thanh toán:</span>
                  <span className="font-medium">
                    {paymentMethods.find(p => p.id === paymentMethod)?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/products">
                <Button variant="outline">Tiếp tục mua sắm</Button>
              </Link>
              <Link to="/">
                <Button className="btn-primary">Về trang chủ</Button>
              </Link>
            </div>
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
            <li><Link to="/cart" className="hover:text-primary transition-colors">Giỏ hàng</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Thanh toán</li>
          </ol>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Thanh toán</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Info */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Thông tin giao hàng</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Họ và tên *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      Số điện thoại *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0912 345 678"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="mb-2 block">Địa chỉ *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Số nhà, tên đường"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ward" className="mb-2 block">Phường/Xã *</Label>
                    <Input
                      id="ward"
                      name="ward"
                      value={formData.ward}
                      onChange={handleInputChange}
                      placeholder="Phường 1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="district" className="mb-2 block">Quận/Huyện *</Label>
                    <Input
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      placeholder="Quận 1"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="city" className="mb-2 block">Tỉnh/Thành phố *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="TP. Hồ Chí Minh"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="note" className="mb-2 block">Ghi chú đơn hàng</Label>
                    <Textarea
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Phương thức vận chuyển</h2>
                </div>

                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="space-y-3">
                    {shippingMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          shippingMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div>
                            <p className="font-medium text-foreground">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                        <span className={`font-semibold ${
                          subtotal >= 500000 ? "text-accent line-through" : "text-foreground"
                        }`}>
                          {formatPrice(method.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                </RadioGroup>

                {subtotal >= 500000 && (
                  <p className="mt-4 text-sm text-accent flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Bạn được miễn phí vận chuyển cho đơn hàng từ 500.000đ
                  </p>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Phương thức thanh toán</h2>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={method.id} id={method.id} className="mr-4" />
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </RadioGroup>

                {paymentMethod === "bank" && (
                  <div className="mt-4 p-4 rounded-xl bg-secondary/50 text-sm">
                    <p className="font-medium mb-2">Thông tin chuyển khoản:</p>
                    <p>Ngân hàng: <span className="font-medium">Vietcombank</span></p>
                    <p>Số tài khoản: <span className="font-medium">1234567890</span></p>
                    <p>Chủ tài khoản: <span className="font-medium">CÔNG TY TRÀ THƯỢNG HẠNG</span></p>
                    <p className="text-muted-foreground mt-2">
                      Nội dung chuyển khoản: [Mã đơn hàng] - [Số điện thoại]
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Đơn hàng của bạn</h2>

                {/* Cart Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Price Summary */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span className={`font-medium ${shippingFee === 0 ? "text-accent" : ""}`}>
                      {shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee)}
                    </span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Tổng cộng</span>
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full btn-primary py-6 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Đang xử lý...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      Đặt hàng
                    </span>
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>Thanh toán an toàn & bảo mật</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Package className="w-4 h-4 text-primary shrink-0" />
                    <span>Đóng gói cẩn thận, bảo quản chất lượng trà</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Truck className="w-4 h-4 text-primary shrink-0" />
                    <span>Giao hàng toàn quốc trong 3-5 ngày</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Checkout;
