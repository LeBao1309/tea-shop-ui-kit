import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Package, Eye, ChevronDown, ChevronUp, Truck, CheckCircle, Clock, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import combo1 from "@/assets/combo-1.jpg";

/**
 * ORDER HISTORY PAGE
 * PHP Usage:
 * <?php
 *   require_once 'includes/auth.php';
 *   requireLogin(); // Redirect if not logged in
 *   
 *   $userId = $_SESSION['user_id'];
 *   $orders = $orderModel->getOrdersByUser($userId);
 * ?>
 */

// Mock orders data - PHP sẽ thay thế bằng dữ liệu từ database
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 850000,
    shippingFee: 0,
    paymentMethod: "COD",
    shippingAddress: "123 Nguyễn Văn A, Quận 1, TP.HCM",
    items: [
      { id: 1, name: "Trà Ô Long Đặc Biệt", price: 350000, quantity: 2, image: product1 },
      { id: 2, name: "Trà Xanh Thái Nguyên", price: 150000, quantity: 1, image: product2 },
    ],
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-18",
    status: "shipping",
    total: 520000,
    shippingFee: 30000,
    paymentMethod: "Bank Transfer",
    shippingAddress: "456 Lê Văn B, Quận 3, TP.HCM",
    items: [
      { id: 3, name: "Combo Trà Thượng Hạng", price: 490000, quantity: 1, image: combo1 },
    ],
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-20",
    status: "processing",
    total: 280000,
    shippingFee: 30000,
    paymentMethod: "Credit Card",
    shippingAddress: "789 Trần Văn C, Quận 7, TP.HCM",
    items: [
      { id: 4, name: "Trà Xanh Thái Nguyên", price: 150000, quantity: 1, image: product2 },
      { id: 5, name: "Trà Ô Long Đặc Biệt", price: 100000, quantity: 1, image: product1 },
    ],
  },
  {
    id: "ORD-2024-004",
    date: "2024-01-10",
    status: "cancelled",
    total: 450000,
    shippingFee: 0,
    paymentMethod: "COD",
    shippingAddress: "321 Phạm Văn D, Quận 5, TP.HCM",
    items: [
      { id: 6, name: "Trà Ô Long Đặc Biệt", price: 350000, quantity: 1, image: product1 },
      { id: 7, name: "Trà Xanh Thái Nguyên", price: 100000, quantity: 1, image: product2 },
    ],
  },
];

const statusConfig = {
  pending: {
    label: "Chờ xác nhận",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: Clock,
  },
  processing: {
    label: "Đang xử lý",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Package,
  },
  shipping: {
    label: "Đang giao hàng",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Truck,
  },
  delivered: {
    label: "Đã giao hàng",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle,
  },
  cancelled: {
    label: "Đã hủy",
    color: "bg-red-100 text-red-800 border-red-200",
    icon: XCircle,
  },
};

const OrderHistory = () => {
  const [orders] = useState(mockOrders);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <MainLayout>
      <div className="bg-secondary/30 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                <Package className="w-8 h-8 text-primary" />
                Lịch sử đơn hàng
              </h1>
              <p className="text-muted-foreground mt-1">
                Theo dõi và quản lý các đơn hàng của bạn
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Lọc theo:</span>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tất cả trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="pending">Chờ xác nhận</SelectItem>
                  <SelectItem value="processing">Đang xử lý</SelectItem>
                  <SelectItem value="shipping">Đang giao hàng</SelectItem>
                  <SelectItem value="delivered">Đã giao hàng</SelectItem>
                  <SelectItem value="cancelled">Đã hủy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Orders List */}
          {filteredOrders.length === 0 ? (
            <div className="bg-card rounded-xl p-12 text-center">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Không có đơn hàng nào
              </h2>
              <p className="text-muted-foreground mb-6">
                {filterStatus === "all" 
                  ? "Bạn chưa có đơn hàng nào. Hãy khám phá các sản phẩm của chúng tôi!"
                  : "Không có đơn hàng nào với trạng thái này."}
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/products">Khám phá sản phẩm</a>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => {
                const status = statusConfig[order.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                const isExpanded = expandedOrder === order.id;

                return (
                  <div
                    key={order.id}
                    className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
                  >
                    {/* Order Header */}
                    <div
                      className="p-4 md:p-6 cursor-pointer hover:bg-secondary/50 transition-colors"
                      onClick={() => toggleOrderDetails(order.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {/* Order Images Preview */}
                          <div className="flex -space-x-2">
                            {order.items.slice(0, 3).map((item, index) => (
                              <img
                                key={index}
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-cover border-2 border-card"
                              />
                            ))}
                            {order.items.length > 3 && (
                              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border-2 border-card text-sm font-medium">
                                +{order.items.length - 3}
                              </div>
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">
                                {order.id}
                              </span>
                              <Badge
                                variant="outline"
                                className={`${status.color} flex items-center gap-1`}
                              >
                                <StatusIcon className="w-3 h-3" />
                                {status.label}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Ngày đặt: {formatDate(order.date)} • {order.items.length} sản phẩm
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-bold text-lg text-primary">
                              {formatPrice(order.total)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {order.paymentMethod}
                            </p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Order Details (Expandable) */}
                    {isExpanded && (
                      <div className="border-t border-border">
                        {/* Order Items */}
                        <div className="p-4 md:p-6 bg-secondary/20">
                          <h3 className="font-semibold text-foreground mb-4">
                            Chi tiết sản phẩm
                          </h3>
                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center gap-4 bg-card p-3 rounded-lg"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                  <p className="font-medium text-foreground">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Số lượng: {item.quantity}
                                  </p>
                                </div>
                                <p className="font-semibold text-foreground">
                                  {formatPrice(item.price * item.quantity)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Order Info */}
                        <div className="p-4 md:p-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Địa chỉ giao hàng
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {order.shippingAddress}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Thông tin thanh toán
                            </h4>
                            <div className="text-sm space-y-1">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Tạm tính:</span>
                                <span>{formatPrice(order.total - order.shippingFee)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Phí vận chuyển:</span>
                                <span>{order.shippingFee === 0 ? "Miễn phí" : formatPrice(order.shippingFee)}</span>
                              </div>
                              <div className="flex justify-between font-semibold pt-1 border-t">
                                <span>Tổng cộng:</span>
                                <span className="text-primary">{formatPrice(order.total)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Order Actions */}
                        <div className="p-4 md:p-6 border-t border-border bg-secondary/10 flex flex-wrap gap-3">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="w-4 h-4" />
                            Xem chi tiết
                          </Button>
                          {order.status === "delivered" && (
                            <Button variant="outline" size="sm" className="gap-2">
                              <RotateCcw className="w-4 h-4" />
                              Mua lại
                            </Button>
                          )}
                          {(order.status === "pending" || order.status === "processing") && (
                            <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive">
                              <XCircle className="w-4 h-4" />
                              Hủy đơn hàng
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Order Statistics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(statusConfig).map(([key, config]) => {
              const count = orders.filter(o => o.status === key).length;
              const Icon = config.icon;
              return (
                <div
                  key={key}
                  className="bg-card rounded-xl p-4 border border-border text-center"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${
                    key === "delivered" ? "text-green-600" :
                    key === "shipping" ? "text-purple-600" :
                    key === "processing" ? "text-blue-600" :
                    key === "cancelled" ? "text-red-600" : "text-yellow-600"
                  }`} />
                  <p className="text-2xl font-bold text-foreground">{count}</p>
                  <p className="text-sm text-muted-foreground">{config.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderHistory;
