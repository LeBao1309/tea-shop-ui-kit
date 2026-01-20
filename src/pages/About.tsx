import MainLayout from "@/components/layout/MainLayout";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { 
  Leaf, 
  Award, 
  Users, 
  Heart,
  Target,
  Eye,
  CheckCircle,
  MapPin
} from "lucide-react";

import heroTea from "@/assets/hero-tea.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

/**
 * ABOUT PAGE
 * PHP Usage: resources/views/pages/about.php
 */

const About = () => {
  const milestones = [
    { year: "2010", title: "Thành lập", description: "Khởi đầu từ một tiệm trà nhỏ tại Thái Nguyên" },
    { year: "2015", title: "Mở rộng", description: "Mở rộng ra thị trường Hà Nội và TP.HCM" },
    { year: "2018", title: "Chứng nhận", description: "Đạt chứng nhận ISO 22000 về an toàn thực phẩm" },
    { year: "2020", title: "Online", description: "Ra mắt website thương mại điện tử" },
    { year: "2024", title: "Phát triển", description: "Phục vụ hơn 100,000 khách hàng trên toàn quốc" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Chất lượng",
      description: "Chọn lọc những lá trà tươi ngon nhất từ các vùng trồng trà nổi tiếng",
    },
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Phục vụ khách hàng với sự nhiệt tình và chu đáo nhất",
    },
    {
      icon: Award,
      title: "Uy tín",
      description: "Cam kết mang đến sản phẩm chính hãng, nguồn gốc rõ ràng",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description: "Hỗ trợ nông dân và phát triển cộng đồng trồng trà Việt Nam",
    },
  ];

  const team = [
    {
      name: "Nguyễn Văn A",
      role: "Founder & CEO",
      image: product1,
      description: "15 năm kinh nghiệm trong ngành trà",
    },
    {
      name: "Trần Thị B",
      role: "Trưởng phòng Sản phẩm",
      image: product2,
      description: "Chuyên gia thẩm định trà",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTea})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Câu Chuyện Trà Việt
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Hơn 14 năm đồng hành cùng người yêu trà Việt Nam, chúng tôi tự hào 
              mang đến những sản phẩm trà chất lượng cao, kết nối giá trị truyền thống 
              với cuộc sống hiện đại.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fade-right">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sứ mệnh</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mang hương vị trà Việt Nam đến mọi gia đình, góp phần bảo tồn và 
                  phát triển văn hóa trà truyền thống của dân tộc. Chúng tôi cam kết 
                  cung cấp những sản phẩm trà chất lượng cao nhất với giá cả hợp lý.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Tầm nhìn</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trở thành thương hiệu trà hàng đầu Việt Nam, được yêu thích và 
                  tin dùng bởi hàng triệu khách hàng. Đưa trà Việt Nam vươn ra 
                  thị trường quốc tế, khẳng định vị thế trên bản đồ trà thế giới.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Giá Trị Cốt Lõi
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hành Trình Phát Triển
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những cột mốc quan trọng trong hành trình của chúng tôi
              </p>
            </div>
          </ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <ScrollAnimation key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                  <div className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 border border-border inline-block">
                        <span className="text-primary font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="font-semibold text-foreground mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
                    
                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tại Sao Chọn Trà Việt?
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "100% trà nguyên chất từ các vùng trồng nổi tiếng",
              "Quy trình sản xuất đạt chuẩn ISO 22000",
              "Đội ngũ chuyên gia thẩm định chất lượng",
              "Giá cả cạnh tranh, minh bạch",
              "Giao hàng nhanh chóng toàn quốc",
              "Chính sách đổi trả linh hoạt 30 ngày",
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <div className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border h-full">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Đội Ngũ Của Chúng Tôi
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những người đam mê trà, tận tâm phục vụ khách hàng
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <ScrollAnimation key={index} animation="zoom-in" delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden border border-border text-center group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Hệ Thống Cửa Hàng</h2>
              <p className="opacity-90">Ghé thăm cửa hàng gần bạn nhất</p>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { city: "TP. Hồ Chí Minh", address: "123 Nguyễn Huệ, Quận 1" },
              { city: "Hà Nội", address: "456 Phố Huế, Hai Bà Trưng" },
              { city: "Đà Nẵng", address: "789 Nguyễn Văn Linh, Hải Châu" },
            ].map((location, index) => (
              <ScrollAnimation key={index} animation="zoom-in" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <h3 className="font-semibold text-lg">{location.city}</h3>
                  <p className="text-sm opacity-80 mt-1">{location.address}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
