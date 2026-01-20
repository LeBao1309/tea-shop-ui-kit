import { HelpCircle, Package, CreditCard, Truck, RotateCcw, Leaf, MessageCircle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

/**
 * FAQ PAGE - Câu hỏi thường gặp
 * PHP: resources/views/pages/faq.php
 */

const faqCategories = [
  {
    id: "products",
    title: "Sản phẩm",
    icon: Leaf,
    questions: [
      {
        question: "Trà của Trà Việt có nguồn gốc từ đâu?",
        answer: "Tất cả sản phẩm trà của chúng tôi được thu hoạch trực tiếp từ các vùng trà nổi tiếng như Thái Nguyên, Lâm Đồng, Mộc Châu và nhiều vùng núi cao khác trên khắp Việt Nam. Chúng tôi hợp tác trực tiếp với các hộ nông dân và hợp tác xã có kinh nghiệm lâu năm trong nghề trồng và chế biến trà.",
      },
      {
        question: "Làm sao để biết trà có phải là trà organic không?",
        answer: "Các sản phẩm trà organic của chúng tôi đều được dán nhãn rõ ràng và có chứng nhận từ các tổ chức uy tín. Trà organic được trồng theo phương pháp tự nhiên, không sử dụng thuốc trừ sâu hay phân bón hóa học. Bạn có thể kiểm tra thông tin chi tiết trên bao bì sản phẩm hoặc trang chi tiết sản phẩm.",
      },
      {
        question: "Thời hạn sử dụng của trà là bao lâu?",
        answer: "Trà khô thường có hạn sử dụng từ 12-24 tháng kể từ ngày sản xuất, tùy thuộc vào loại trà. Để bảo quản tốt nhất, bạn nên giữ trà ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và mùi lạ. Matcha nên được bảo quản trong tủ lạnh sau khi mở.",
      },
      {
        question: "Tôi nên pha trà như thế nào để đạt hương vị tốt nhất?",
        answer: "Mỗi loại trà có cách pha khác nhau. Trà xanh nên pha ở 70-80°C trong 2-3 phút. Trà Ô Long pha ở 85-95°C trong 3-5 phút. Trà đen pha ở 95-100°C trong 3-5 phút. Chúng tôi cung cấp hướng dẫn chi tiết trên bao bì mỗi sản phẩm và trên website.",
      },
      {
        question: "Các sản phẩm có chứa caffeine không?",
        answer: "Hầu hết các loại trà đều chứa caffeine tự nhiên, nhưng hàm lượng thấp hơn nhiều so với cà phê. Trà xanh và trà trắng có hàm lượng caffeine thấp nhất. Nếu bạn muốn tránh caffeine, chúng tôi có các dòng trà thảo mộc như trà hoa cúc, trà atiso hoàn toàn không chứa caffeine.",
      },
    ],
  },
  {
    id: "ordering",
    title: "Đặt hàng",
    icon: Package,
    questions: [
      {
        question: "Làm thế nào để đặt hàng trên website?",
        answer: "Bạn có thể đặt hàng dễ dàng theo các bước: (1) Chọn sản phẩm và thêm vào giỏ hàng, (2) Nhấn vào biểu tượng giỏ hàng để xem và kiểm tra, (3) Nhấn 'Thanh toán' và điền thông tin giao hàng, (4) Chọn phương thức thanh toán và xác nhận đơn hàng. Bạn sẽ nhận được email xác nhận ngay sau khi đặt hàng thành công.",
      },
      {
        question: "Tôi có cần tạo tài khoản để đặt hàng không?",
        answer: "Không bắt buộc. Bạn có thể đặt hàng với tư cách khách (guest checkout). Tuy nhiên, việc tạo tài khoản sẽ giúp bạn theo dõi đơn hàng dễ dàng hơn, lưu địa chỉ giao hàng, tích lũy điểm thưởng và nhận các ưu đãi đặc biệt dành riêng cho thành viên.",
      },
      {
        question: "Tôi có thể thay đổi hoặc hủy đơn hàng sau khi đặt không?",
        answer: "Bạn có thể thay đổi hoặc hủy đơn hàng trong vòng 2 giờ sau khi đặt, miễn là đơn hàng chưa được xử lý và giao cho đơn vị vận chuyển. Vui lòng liên hệ hotline 1900 xxxx hoặc gửi email đến support@traviet.vn ngay khi cần thay đổi.",
      },
      {
        question: "Đơn hàng tối thiểu là bao nhiêu?",
        answer: "Không có giá trị đơn hàng tối thiểu. Tuy nhiên, để được miễn phí vận chuyển, đơn hàng của bạn cần đạt từ 500.000đ trở lên. Với các đơn hàng dưới mức này, phí vận chuyển sẽ được tính theo bảng giá của đơn vị vận chuyển.",
      },
    ],
  },
  {
    id: "payment",
    title: "Thanh toán",
    icon: CreditCard,
    questions: [
      {
        question: "Trà Việt chấp nhận những phương thức thanh toán nào?",
        answer: "Chúng tôi chấp nhận đa dạng phương thức thanh toán: (1) Thanh toán khi nhận hàng (COD), (2) Chuyển khoản ngân hàng, (3) Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), (4) Ví điện tử (MoMo, ZaloPay, VNPay), (5) Trả góp 0% qua thẻ tín dụng với đơn hàng từ 3 triệu.",
      },
      {
        question: "Thanh toán online có an toàn không?",
        answer: "Hoàn toàn an toàn. Chúng tôi sử dụng cổng thanh toán được mã hóa SSL 256-bit và tuân thủ tiêu chuẩn PCI DSS. Thông tin thẻ của bạn không được lưu trữ trên hệ thống của chúng tôi mà được xử lý trực tiếp qua các đối tác thanh toán uy tín.",
      },
      {
        question: "Tôi có thể xuất hóa đơn VAT không?",
        answer: "Có, chúng tôi hỗ trợ xuất hóa đơn VAT (GTGT) cho tất cả đơn hàng. Vui lòng cung cấp thông tin xuất hóa đơn (tên công ty, mã số thuế, địa chỉ) khi đặt hàng hoặc liên hệ chúng tôi trong vòng 7 ngày kể từ ngày nhận hàng.",
      },
      {
        question: "Khi nào tôi sẽ bị trừ tiền sau khi đặt hàng?",
        answer: "Với thanh toán online (thẻ, ví điện tử), tiền sẽ được trừ ngay khi bạn xác nhận thanh toán. Với chuyển khoản ngân hàng, bạn cần chuyển khoản trong vòng 24 giờ sau khi đặt hàng. Với COD, bạn thanh toán khi nhận hàng.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Vận chuyển",
    icon: Truck,
    questions: [
      {
        question: "Thời gian giao hàng là bao lâu?",
        answer: "Thời gian giao hàng phụ thuộc vào khu vực: Nội thành Hà Nội và TP.HCM: 1-2 ngày làm việc. Các tỉnh thành khác: 2-5 ngày làm việc. Vùng sâu vùng xa: 5-7 ngày làm việc. Chúng tôi cũng có dịch vụ giao hàng nhanh trong ngày với phí phụ thu.",
      },
      {
        question: "Phí vận chuyển được tính như thế nào?",
        answer: "Miễn phí vận chuyển cho đơn hàng từ 500.000đ. Với đơn hàng dưới mức này, phí vận chuyển dao động từ 20.000đ - 50.000đ tùy khu vực. Phí vận chuyển cụ thể sẽ được hiển thị rõ ràng khi bạn nhập địa chỉ giao hàng.",
      },
      {
        question: "Tôi có thể theo dõi đơn hàng không?",
        answer: "Có, sau khi đơn hàng được giao cho đơn vị vận chuyển, bạn sẽ nhận được mã vận đơn qua email và SMS. Bạn có thể theo dõi trạng thái đơn hàng trong phần 'Lịch sử đơn hàng' khi đăng nhập tài khoản, hoặc tra cứu trực tiếp trên website đơn vị vận chuyển.",
      },
      {
        question: "Có ship quốc tế không?",
        answer: "Hiện tại chúng tôi chưa hỗ trợ giao hàng quốc tế trực tiếp. Tuy nhiên, nếu bạn ở nước ngoài, vui lòng liên hệ chúng tôi để được tư vấn các phương án gửi hàng phù hợp qua các dịch vụ chuyển phát quốc tế.",
      },
    ],
  },
  {
    id: "returns",
    title: "Đổi trả & Hoàn tiền",
    icon: RotateCcw,
    questions: [
      {
        question: "Chính sách đổi trả của Trà Việt như thế nào?",
        answer: "Bạn có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu: (1) Sản phẩm bị lỗi do nhà sản xuất, (2) Giao sai sản phẩm so với đơn đặt hàng, (3) Sản phẩm bị hư hỏng trong quá trình vận chuyển. Sản phẩm đổi trả phải còn nguyên seal, chưa qua sử dụng.",
      },
      {
        question: "Quy trình đổi trả như thế nào?",
        answer: "Bước 1: Liên hệ hotline hoặc email trong vòng 7 ngày kể từ ngày nhận hàng. Bước 2: Cung cấp mã đơn hàng, hình ảnh sản phẩm và lý do đổi trả. Bước 3: Chúng tôi sẽ xác nhận và hướng dẫn bạn gửi trả sản phẩm. Bước 4: Sau khi nhận và kiểm tra sản phẩm, chúng tôi sẽ gửi sản phẩm thay thế hoặc hoàn tiền.",
      },
      {
        question: "Thời gian hoàn tiền là bao lâu?",
        answer: "Sau khi yêu cầu đổi trả được chấp thuận và chúng tôi nhận được sản phẩm: Hoàn tiền vào ví điện tử: 1-2 ngày làm việc. Hoàn tiền qua chuyển khoản: 3-5 ngày làm việc. Hoàn tiền vào thẻ tín dụng: 7-14 ngày làm việc (tùy thuộc vào ngân hàng phát hành thẻ).",
      },
      {
        question: "Ai chịu phí vận chuyển khi đổi trả?",
        answer: "Nếu lỗi thuộc về chúng tôi (giao sai, lỗi sản phẩm), Trà Việt sẽ chịu toàn bộ phí vận chuyển đổi trả. Nếu bạn đổi ý hoặc đổi sang sản phẩm khác theo nhu cầu cá nhân, bạn sẽ chịu phí vận chuyển 2 chiều.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <MainLayout>
      {/* PAGE HEADER */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Hỗ trợ khách hàng</span>
              </div>
              <h1 className="section-title mb-4">Câu Hỏi Thường Gặp</h1>
              <p className="section-subtitle">
                Tìm câu trả lời nhanh chóng cho các thắc mắc phổ biến về sản phẩm, 
                đặt hàng, thanh toán và giao hàng
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {/* Category Navigation */}
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.title}</span>
                </a>
              ))}
            </div>
          </ScrollAnimation>

          {/* FAQ Categories */}
          <div className="space-y-10">
            {faqCategories.map((category, categoryIndex) => (
              <ScrollAnimation key={category.id} animation="fade-up" delay={categoryIndex * 100}>
                <div id={category.id} className="scroll-mt-24">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-display font-bold">{category.title}</h2>
                  </div>

                  {/* Questions Accordion */}
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="bg-card rounded-xl border border-border px-5 data-[state=open]:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4 [&[data-state=open]>svg]:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Still Have Questions */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mt-16 text-center bg-primary/5 rounded-3xl p-8 md:p-12">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">
                Vẫn còn thắc mắc?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi câu hỏi của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Liên hệ hỗ trợ
                </Link>
                <a href="tel:1900xxxx" className="btn-secondary">
                  Gọi hotline: 1900 xxxx
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;
