import MainLayout from "@/components/layout/MainLayout";
import { Truck, Clock, MapPin, Package, CreditCard, CheckCircle } from "lucide-react";

/**
 * SHIPPING POLICY PAGE
 * PHP: resources/views/pages/shipping.php
 */

const ShippingPolicy = () => {
  const shippingMethods = [
    {
      name: "Giao hàng tiêu chuẩn",
      time: "3-5 ngày làm việc",
      price: "30.000đ",
      freeFrom: "Miễn phí cho đơn từ 500.000đ",
    },
    {
      name: "Giao hàng nhanh",
      time: "1-2 ngày làm việc",
      price: "50.000đ",
      freeFrom: "Miễn phí cho đơn từ 1.000.000đ",
    },
    {
      name: "Giao hàng hỏa tốc",
      time: "Trong ngày (nội thành)",
      price: "80.000đ",
      freeFrom: "Áp dụng tại TP.HCM, Hà Nội",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-secondary/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-foreground">Chính Sách Vận Chuyển</h1>
          <p className="text-muted-foreground mt-2">Cập nhật lần cuối: 01/01/2024</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Shipping Methods */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary" />
              Phương Thức Vận Chuyển
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">{method.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{method.time}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{method.price}</span>
                    </p>
                    <p className="text-primary text-xs font-medium mt-2">{method.freeFrom}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery Areas */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              Phạm Vi Giao Hàng
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Trà Việt giao hàng trên toàn quốc với các đối tác vận chuyển uy tín:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Giao Hàng Nhanh (GHN)",
                  "Giao Hàng Tiết Kiệm (GHTK)",
                  "Viettel Post",
                  "J&T Express",
                  "Ninja Van",
                  "Shopee Express (nội thành)",
                ].map((partner, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Order Processing */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              Quy Trình Xử Lý Đơn Hàng
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <ol className="space-y-4">
                {[
                  { step: 1, title: "Xác nhận đơn hàng", desc: "Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút (giờ hành chính)" },
                  { step: 2, title: "Đóng gói", desc: "Sản phẩm được đóng gói cẩn thận, chống ẩm và va đập" },
                  { step: 3, title: "Bàn giao vận chuyển", desc: "Đơn hàng được giao cho đơn vị vận chuyển trong ngày" },
                  { step: 4, title: "Theo dõi đơn hàng", desc: "Bạn nhận được mã vận đơn qua SMS/Email để theo dõi" },
                  { step: 5, title: "Nhận hàng", desc: "Kiểm tra hàng trước khi thanh toán (với COD)" },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Notes */}
          <section className="bg-primary/10 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3">Lưu ý quan trọng:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Thời gian giao hàng không bao gồm Chủ nhật và các ngày lễ</li>
              <li>• Đơn hàng đặt sau 15:00 sẽ được xử lý vào ngày làm việc tiếp theo</li>
              <li>• Vùng sâu, vùng xa có thể mất thêm 1-2 ngày</li>
              <li>• Phí vận chuyển có thể thay đổi tùy theo khu vực và trọng lượng đơn hàng</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShippingPolicy;
