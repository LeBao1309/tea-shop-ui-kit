import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Facebook,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * CONTACT PAGE
 * PHP Usage:
 * <?php
 *   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 *     $contactModel->create($_POST);
 *     // Send email notification
 *   }
 * ?>
 */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // <?php
    //   $contact = new Contact($_POST);
    //   $contact->save();
    //   Mail::send('admin@traviet.com', 'New Contact', $_POST);
    // ?>
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Đường Trà Việt, Quận 1, TP. Hồ Chí Minh",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "1900 1234 56",
      subContent: "Hotline: 0901 234 567",
      link: "tel:19001234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@traviet.com",
      subContent: "support@traviet.com",
      link: "mailto:info@traviet.com",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 7: 8:00 - 21:00",
      subContent: "Chủ nhật: 9:00 - 18:00",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/50 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi 
              qua bất kỳ kênh nào bên dưới.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <ScrollAnimation key={index} animation="fade-right" delay={index * 100}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                        {info.subContent && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.subContent}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}

              {/* Social Media */}
              <ScrollAnimation animation="fade-right" delay={400}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Kết nối với chúng tôi
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <ScrollAnimation animation="fade-left" className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Cảm ơn bạn đã liên hệ!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Gửi tin nhắn khác
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Họ và tên *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Số điện thoại
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0901 234 567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Chủ đề *
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Tư vấn sản phẩm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nội dung tin nhắn *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Gửi tin nhắn
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>

          {/* Map */}
          <ScrollAnimation animation="fade-up" className="mt-12">
            <div className="bg-card rounded-xl overflow-hidden border border-border">
              <div className="aspect-[21/9] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Google Maps sẽ được nhúng tại đây
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
