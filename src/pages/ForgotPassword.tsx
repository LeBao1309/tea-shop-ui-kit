import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Mail, ArrowLeft, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * FORGOT PASSWORD PAGE
 * PHP Usage:
 * <?php
 *   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 *     $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
 *     if ($email) {
 *       $user = $userModel->findByEmail($email);
 *       if ($user) {
 *         $token = bin2hex(random_bytes(32));
 *         $userModel->saveResetToken($user->id, $token);
 *         Mail::send($email, 'Reset Password', $resetLink);
 *       }
 *       // Always show success to prevent email enumeration
 *     }
 *   }
 * ?>
 */

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Vui lòng nhập địa chỉ email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Địa chỉ email không hợp lệ");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - PHP sẽ xử lý gửi email reset password
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <MainLayout>
      <section className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <div className="container max-w-md px-4">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            {submitted ? (
              /* Success State */
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-3">
                  Email đã được gửi!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Chúng tôi đã gửi link đặt lại mật khẩu đến{" "}
                  <span className="font-medium text-foreground">{email}</span>.
                  Vui lòng kiểm tra hộp thư (và thư mục spam) của bạn.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Không nhận được email?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                    }}
                    className="w-full"
                  >
                    Gửi lại email
                  </Button>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại đăng nhập
                  </Link>
                </div>
              </div>
            ) : (
              /* Form State */
              <>
                <div className="text-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Quên mật khẩu?
                  </h1>
                  <p className="text-muted-foreground">
                    Nhập địa chỉ email của bạn và chúng tôi sẽ gửi link để đặt lại mật khẩu
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Địa chỉ email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="email@example.com"
                      className={error ? "border-destructive" : ""}
                      autoComplete="email"
                      autoFocus
                    />
                    {error && (
                      <p className="text-sm text-destructive mt-2">{error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Gửi link đặt lại mật khẩu
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại đăng nhập
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Cần hỗ trợ?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Liên hệ chúng tôi
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default ForgotPassword;
