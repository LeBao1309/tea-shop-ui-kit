import { useState } from "react";
import { User, Mail, Phone, MapPin, Camera, Save, Package, Heart, Settings, LogOut } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

/**
 * PROFILE PAGE - Thông tin cá nhân
 * PHP: resources/views/pages/profile.php
 * 
 * Lab 2 Requirements:
 * - Email/Phone (readonly)
 * - Editable: Name, Address, Phone
 * - Save button
 */

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "0901234567",
    address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh",
    city: "Hồ Chí Minh",
    district: "Quận 1",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // <?php 
    //   // Update user profile
    //   $user->update([
    //     'name' => $_POST['name'],
    //     'phone' => $_POST['phone'],
    //     'address' => $_POST['address'],
    //   ]);
    // ?>
    console.log("Profile updated:", formData);
    setIsEditing(false);
  };

  const menuItems = [
    { icon: User, label: "Thông tin cá nhân", href: "/profile", active: true },
    { icon: Package, label: "Đơn hàng của tôi", href: "/orders" },
    { icon: Heart, label: "Sản phẩm yêu thích", href: "/wishlist" },
    { icon: Settings, label: "Cài đặt", href: "/settings" },
  ];

  return (
    <MainLayout>
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
                {/* User Info */}
                <div className="text-center pb-6 border-b border-border">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto">
                      <User className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="font-display text-lg font-semibold mt-4">{formData.name}</h2>
                  <p className="text-sm text-muted-foreground">{formData.email}</p>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6 space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        item.active
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Đăng xuất</span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              <div className="form-container">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="font-display text-2xl font-bold text-foreground">
                      Thông Tin Cá Nhân
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Quản lý thông tin tài khoản của bạn
                    </p>
                  </div>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn-secondary text-sm"
                    >
                      Chỉnh sửa
                    </button>
                  )}
                </div>

                {/* PROFILE FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email (Readonly) */}
                  <div>
                    <label className="form-label flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      className="form-input bg-muted cursor-not-allowed"
                      disabled
                      readOnly
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Email không thể thay đổi
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="form-label flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {/* City & District */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="form-label">
                        Thành phố
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="form-input"
                        disabled={!isEditing}
                      >
                        <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Cần Thơ">Cần Thơ</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="district" className="form-label">
                        Quận/Huyện
                      </label>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="form-input"
                        disabled={!isEditing}
                      >
                        <option value="Quận 1">Quận 1</option>
                        <option value="Quận 2">Quận 2</option>
                        <option value="Quận 3">Quận 3</option>
                        <option value="Quận 7">Quận 7</option>
                      </select>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {isEditing && (
                    <div className="flex gap-3 pt-4">
                      <button type="submit" className="btn-primary flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        Lưu thay đổi
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary"
                      >
                        Hủy
                      </button>
                    </div>
                  )}
                </form>
              </div>

              {/* PASSWORD CHANGE SECTION */}
              <div className="form-container mt-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Đổi Mật Khẩu
                </h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="form-label">
                      Mật khẩu hiện tại
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="current_password"
                      className="form-input"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="newPassword" className="form-label">
                        Mật khẩu mới
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="new_password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmNewPassword" className="form-label">
                        Xác nhận mật khẩu mới
                      </label>
                      <input
                        type="password"
                        id="confirmNewPassword"
                        name="confirm_new_password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">
                    Cập nhật mật khẩu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
