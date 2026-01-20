import MainLayout from "@/components/layout/MainLayout";
import { RotateCcw, CheckCircle, XCircle, AlertCircle, Clock, Package } from "lucide-react";

/**
 * RETURNS POLICY PAGE
 * PHP: resources/views/pages/returns.php
 */

const ReturnsPolicy = () => {
  return (
    <MainLayout>
      <div className="bg-secondary/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-foreground">Chính Sách Đổi Trả & Hoàn Tiền</h1>
          <p className="text-muted-foreground mt-2">Cập nhật lần cuối: 01/01/2024</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Return Policy Overview */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-primary" />
              Chính Sách Đổi Trả
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Trà Việt cam kết mang đến sự hài lòng tuyệt đối cho khách hàng. 
                Chúng tôi chấp nhận đổi trả sản phẩm trong vòng <strong className="text-foreground">7 ngày</strong> kể từ ngày nhận hàng.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Được chấp nhận đổi trả
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sản phẩm bị lỗi từ nhà sản xuất</li>
                    <li>• Sản phẩm không đúng mô tả</li>
                    <li>• Sản phẩm giao sai, thiếu</li>
                    <li>• Sản phẩm hư hỏng trong quá trình vận chuyển</li>
                    <li>• Sản phẩm hết hạn sử dụng</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    Không được đổi trả
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sản phẩm đã qua sử dụng</li>
                    <li>• Sản phẩm không còn nguyên tem, nhãn mác</li>
                    <li>• Sản phẩm khuyến mãi, giảm giá đặc biệt</li>
                    <li>• Quá thời hạn 7 ngày</li>
                    <li>• Hư hỏng do lỗi của khách hàng</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              Quy Trình Đổi Trả
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <ol className="space-y-4">
                {[
                  { step: 1, title: "Liên hệ CSKH", desc: "Gọi hotline 1900 1234 56 hoặc email support@traviet.com" },
                  { step: 2, title: "Xác nhận yêu cầu", desc: "Cung cấp mã đơn hàng, hình ảnh sản phẩm lỗi và mô tả vấn đề" },
                  { step: 3, title: "Gửi trả sản phẩm", desc: "Đóng gói cẩn thận và gửi về địa chỉ chúng tôi cung cấp" },
                  { step: 4, title: "Kiểm tra", desc: "Chúng tôi kiểm tra sản phẩm trong vòng 1-2 ngày làm việc" },
                  { step: 5, title: "Hoàn tất", desc: "Gửi sản phẩm mới hoặc hoàn tiền theo yêu cầu" },
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

          {/* Refund Policy */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              Chính Sách Hoàn Tiền
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Thanh toán COD</h4>
                  <p className="text-sm text-muted-foreground">
                    Hoàn tiền mặt khi nhân viên thu hồi sản phẩm hoặc chuyển khoản trong 3-5 ngày làm việc
                  </p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Chuyển khoản / Thẻ</h4>
                  <p className="text-sm text-muted-foreground">
                    Hoàn tiền về tài khoản gốc trong 5-7 ngày làm việc kể từ khi xác nhận
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Lưu ý:</strong> Phí vận chuyển đổi trả do Trà Việt chi trả nếu lỗi từ phía chúng tôi. 
                Trường hợp khách hàng đổi ý, khách hàng chịu phí vận chuyển 2 chiều.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary/10 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Cần hỗ trợ?
            </h3>
            <p className="text-muted-foreground mb-4">
              Liên hệ với chúng tôi để được hỗ trợ nhanh nhất:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Hotline:</strong> 1900 1234 56 (8:00 - 21:00)</li>
              <li><strong>Email:</strong> support@traviet.com</li>
              <li><strong>Zalo:</strong> 0901 234 567</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReturnsPolicy;
