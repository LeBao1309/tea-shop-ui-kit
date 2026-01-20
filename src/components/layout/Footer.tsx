import { Leaf, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * FOOTER COMPONENT
 * PHP Usage: <?php include 'layout/footer.php'; ?>
 */

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">Trà Việt</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Mang đến hương vị trà Việt Nam tinh túy nhất, từ những vùng trà nổi tiếng như Thái Nguyên, Lâm Đồng.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-primary transition-colors">
                  Blog trà
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-background/70 hover:text-primary transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-background/70 hover:text-primary transition-colors">
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-background/70 hover:text-primary transition-colors">
                  Đổi trả & Hoàn tiền
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/70 hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Đường Trà, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:0901234567" className="text-background/70 hover:text-primary transition-colors">
                  0901 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@traviet.vn" className="text-background/70 hover:text-primary transition-colors">
                  info@traviet.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Trà Việt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-background/50 text-sm hover:text-primary transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link to="/privacy" className="text-background/50 text-sm hover:text-primary transition-colors">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
