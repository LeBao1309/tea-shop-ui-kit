import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Leaf, Mail, Lock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

/**
 * LOGIN PAGE - Đăng nhập
 * PHP: resources/views/pages/login.php
 * 
 * Lab 2 Requirements:
 * - Email/Phone login
 * - Password field
 * - Remember me option
 * - Link to register
 */

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // <?php 
    //   // Handle form submission
    //   $email = $_POST['email'];
    //   $password = $_POST['password'];
    //   // Validate and authenticate user
    // ?>
    console.log("Login submitted:", formData);
  };

  return (
    <MainLayout>
      <section className="min-h-[80vh] flex items-center py-12">
        <div className="container">
          <div className="max-w-md mx-auto">
            {/* FORM CONTAINER */}
            <div className="form-container">
              {/* Logo & Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Đăng Nhập
                </h1>
                <p className="text-muted-foreground mt-2">
                  Chào mừng bạn quay trở lại với Trà Việt
                </p>
              </div>

              {/* LOGIN FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                {/* 
                  PHP: <input type="email" name="email" value="<?= old('email') ?>">
                  <?php if (isset($errors['email'])): ?>
                    <span class="text-destructive"><?= $errors['email'] ?></span>
                  <?php endif; ?>
                */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Email hoặc Số điện thoại
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input pl-12"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="form-input pl-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                      className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">Ghi nhớ đăng nhập</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Quên mật khẩu?
                  </Link>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full">
                  Đăng Nhập
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-card text-muted-foreground">hoặc</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                </div>

                {/* Register Link */}
                <p className="text-center text-muted-foreground mt-6">
                  Chưa có tài khoản?{" "}
                  <Link to="/register" className="text-primary font-semibold hover:underline">
                    Đăng ký ngay
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Login;
