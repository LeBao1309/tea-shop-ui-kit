import MainLayout from "@/components/layout/MainLayout";
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";

/**
 * PRIVACY POLICY PAGE
 * PHP: resources/views/pages/privacy.php
 */

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "1. Thông Tin Chúng Tôi Thu Thập",
      content: `Chúng tôi thu thập các loại thông tin sau:

**Thông tin cá nhân:**
• Họ tên, địa chỉ email, số điện thoại
• Địa chỉ giao hàng và thanh toán
• Thông tin tài khoản đăng nhập

**Thông tin tự động:**
• Địa chỉ IP, loại trình duyệt, thiết bị
• Cookies và dữ liệu duyệt web
• Lịch sử mua hàng và tương tác trên website`,
    },
    {
      icon: Eye,
      title: "2. Mục Đích Sử Dụng Thông Tin",
      content: `Chúng tôi sử dụng thông tin của bạn để:

• Xử lý và giao hàng đơn đặt hàng
• Liên lạc về đơn hàng, khuyến mãi (nếu bạn đồng ý)
• Cải thiện trải nghiệm mua sắm và dịch vụ khách hàng
• Phát hiện và ngăn chặn gian lận
• Tuân thủ các yêu cầu pháp lý`,
    },
    {
      icon: UserCheck,
      title: "3. Chia Sẻ Thông Tin",
      content: `Chúng tôi KHÔNG bán hoặc cho thuê thông tin cá nhân của bạn. Thông tin chỉ được chia sẻ với:

• Đối tác vận chuyển để giao hàng
• Đối tác thanh toán để xử lý giao dịch
• Cơ quan pháp luật khi được yêu cầu
• Nhà cung cấp dịch vụ hỗ trợ hoạt động kinh doanh (đã ký cam kết bảo mật)`,
    },
    {
      icon: Lock,
      title: "4. Bảo Mật Thông Tin",
      content: `Chúng tôi áp dụng các biện pháp bảo mật:

• Mã hóa SSL/TLS cho tất cả giao dịch
• Lưu trữ dữ liệu trên máy chủ bảo mật
• Giới hạn quyền truy cập cho nhân viên được ủy quyền
• Kiểm tra bảo mật định kỳ
• Không lưu trữ thông tin thẻ tín dụng đầy đủ`,
    },
    {
      icon: Shield,
      title: "5. Quyền Của Bạn",
      content: `Bạn có quyền:

• Truy cập và xem thông tin cá nhân của mình
• Yêu cầu chỉnh sửa thông tin không chính xác
• Yêu cầu xóa tài khoản và dữ liệu (tuân thủ luật định)
• Từ chối nhận email marketing
• Rút lại sự đồng ý đã cho trước đó

Để thực hiện các quyền này, vui lòng liên hệ: privacy@traviet.com`,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-secondary/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Chính Sách Bảo Mật
          </h1>
          <p className="text-muted-foreground mt-2">Cập nhật lần cuối: 01/01/2024</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-card rounded-xl p-6 border border-border mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Trà Việt ("chúng tôi") cam kết bảo vệ quyền riêng tư của bạn. 
              Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, 
              chia sẻ và bảo vệ thông tin cá nhân khi bạn sử dụng website và dịch vụ của chúng tôi.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <section key={index} className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <section.icon className="w-6 h-6 text-primary" />
                  {section.title}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed prose prose-sm max-w-none">
                  {section.content.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-semibold text-foreground mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
                    }
                    return <span key={i}>{line}<br /></span>;
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Cookies */}
          <section className="bg-card rounded-xl p-6 border border-border mt-6">
            <h2 className="text-xl font-bold text-foreground mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Website sử dụng cookies để cải thiện trải nghiệm của bạn. Bạn có thể:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Cookies cần thiết:</strong> Bắt buộc để website hoạt động</li>
              <li>• <strong>Cookies phân tích:</strong> Giúp chúng tôi hiểu cách bạn sử dụng website</li>
              <li>• <strong>Cookies marketing:</strong> Hiển thị quảng cáo phù hợp</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Bạn có thể tắt cookies trong cài đặt trình duyệt, nhưng một số tính năng có thể không hoạt động.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary/10 rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Liên Hệ Về Bảo Mật
            </h3>
            <p className="text-muted-foreground mb-4">
              Nếu bạn có câu hỏi hoặc lo ngại về chính sách bảo mật, vui lòng liên hệ:
            </p>
            <ul className="space-y-1 text-sm">
              <li><strong>Email:</strong> privacy@traviet.com</li>
              <li><strong>Hotline:</strong> 1900 1234 56</li>
              <li><strong>Địa chỉ:</strong> 123 Đường Trà, Quận 1, TP. Hồ Chí Minh</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
