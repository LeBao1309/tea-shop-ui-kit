import MainLayout from "@/components/layout/MainLayout";
import { FileText, AlertCircle } from "lucide-react";

/**
 * TERMS OF SERVICE PAGE
 * PHP: resources/views/pages/terms.php
 */

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Điều Khoản Chung",
      content: `Bằng việc truy cập và sử dụng website Trà Việt (traviet.com), bạn đồng ý tuân thủ các điều khoản và điều kiện sử dụng được nêu dưới đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng website của chúng tôi.

Chúng tôi có quyền thay đổi, chỉnh sửa hoặc cập nhật các điều khoản này bất cứ lúc nào mà không cần thông báo trước. Việc bạn tiếp tục sử dụng website sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.`,
    },
    {
      title: "2. Tài Khoản Người Dùng",
      content: `Khi đăng ký tài khoản, bạn cam kết:
• Cung cấp thông tin chính xác, đầy đủ và cập nhật
• Bảo mật thông tin đăng nhập và chịu trách nhiệm về mọi hoạt động dưới tài khoản của mình
• Thông báo ngay cho chúng tôi nếu phát hiện truy cập trái phép

Chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản nếu phát hiện vi phạm điều khoản sử dụng.`,
    },
    {
      title: "3. Đặt Hàng & Thanh Toán",
      content: `Khi đặt hàng trên Trà Việt:
• Giá sản phẩm có thể thay đổi mà không cần thông báo trước
• Đơn hàng chỉ được xác nhận khi bạn nhận được email/SMS xác nhận từ chúng tôi
• Chúng tôi có quyền từ chối đơn hàng nếu phát hiện gian lận hoặc thông tin không chính xác
• Các phương thức thanh toán được hỗ trợ: COD, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ`,
    },
    {
      title: "4. Giao Hàng",
      content: `Thời gian giao hàng được tính từ khi đơn hàng được xác nhận:
• Nội thành TP.HCM, Hà Nội: 1-2 ngày
• Các tỉnh thành khác: 3-5 ngày
• Vùng sâu, vùng xa: 5-7 ngày

Thời gian giao hàng có thể thay đổi trong các dịp lễ, Tết hoặc do các yếu tố khách quan.`,
    },
    {
      title: "5. Đổi Trả & Hoàn Tiền",
      content: `Chính sách đổi trả áp dụng trong vòng 7 ngày kể từ ngày nhận hàng:
• Sản phẩm phải còn nguyên tem, nhãn mác
• Có hóa đơn mua hàng
• Không áp dụng cho sản phẩm khuyến mãi

Chi tiết vui lòng xem tại trang Chính sách Đổi trả.`,
    },
    {
      title: "6. Quyền Sở Hữu Trí Tuệ",
      content: `Tất cả nội dung trên website bao gồm nhưng không giới hạn: logo, hình ảnh, văn bản, thiết kế, phần mềm đều thuộc quyền sở hữu của Trà Việt hoặc các đối tác được ủy quyền.

Nghiêm cấm sao chép, phân phối, sửa đổi hoặc sử dụng bất kỳ nội dung nào cho mục đích thương mại mà không có sự đồng ý bằng văn bản của chúng tôi.`,
    },
    {
      title: "7. Giới Hạn Trách Nhiệm",
      content: `Trà Việt không chịu trách nhiệm về:
• Thiệt hại gián tiếp, ngẫu nhiên hoặc hậu quả phát sinh từ việc sử dụng website
• Gián đoạn dịch vụ do các yếu tố kỹ thuật hoặc bất khả kháng
• Nội dung của các website bên thứ ba được liên kết từ website của chúng tôi`,
    },
    {
      title: "8. Luật Áp Dụng",
      content: `Các điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh.`,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-secondary/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            Điều Khoản Sử Dụng
          </h1>
          <p className="text-muted-foreground mt-2">Cập nhật lần cuối: 01/01/2024</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <section key={index} className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}

          {/* Contact */}
          <section className="bg-primary/10 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Liên Hệ
            </h3>
            <p className="text-muted-foreground">
              Nếu bạn có bất kỳ câu hỏi nào về Điều khoản Sử dụng, vui lòng liên hệ:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Email:</strong> legal@traviet.com</li>
              <li><strong>Địa chỉ:</strong> 123 Đường Trà, Quận 1, TP. Hồ Chí Minh</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
