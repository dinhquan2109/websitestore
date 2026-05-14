import { DEFAULT_OPTION } from "lib/constants";

const norm = (s: string) => s.trim().toLowerCase();

/** Bản dịch gợi ý cho tên sản phẩm mẫu Shopify (tiếng Anh). Mở rộng map này hoặc đổi tên trong Shopify Admin. */
const PRODUCT_TITLE_VI: Record<string, string> = {
  "the 3p fulfilled snowboard": "Ván trượt tuyết giao 3P",
  "the complete snowboard": "Ván trượt tuyết đầy đủ",
  "the archived snowboard": "Ván trượt tuyết đã lưu trữ",
  "the hidden snowboard": "Ván trượt tuyết ẩn",
  "the compare at price snowboard": "Ván trượt tuyết có giá so sánh",
  "the videographer snowboard": "Ván trượt tuyết quay phim",
  "the minimal snowboard": "Ván trượt tuyết tối giản",
  "the inventory not tracked snowboard":
    "Ván trượt tuyết không theo dõi tồn kho",
  "the out of stock snowboard": "Ván trượt tuyết hết hàng",
  "the collection snowboard: hydrogen": "Ván trượt tuyết bộ sưu tập: Hydrogen",
  "the collection snowboard: oxygen": "Ván trượt tuyết bộ sưu tập: Oxygen",
  "the multi-managed snowboard": "Ván trượt tuyết quản lý đa kênh",
  "the multi-location snowboard": "Ván trượt tuyết đa địa điểm",
  "the selling plans snowboard": "Ván trượt tuyết gói bán hàng",
  "selling plans ski wax": "Sáp trượt tuyết (gói bán hàng)",
  "gift card": "Thẻ quà tặng",
  "the automated collection snowboard": "Ván trượt tuyết bộ sưu tập tự động",
  "the default snowboard": "Ván trượt tuyết mặc định",
  "the clean crewneck sweater": "Áo len cổ tròn Clean",
  "the striped crewneck sweater": "Áo len cổ tròn sọc",
  "the cozy beanie": "Mũ len ấm",
  "the warm socks": "Tất ấm",
  "the warm mittens": "Găng tay ấm",
  "the warm scarf": "Khăn quàng ấm",
  "the warm hoodie": "Áo hoodie ấm",
};

const COLLECTION_TITLE_VI: Record<string, string> = {
  "automated collection": "Bộ sưu tập tự động",
  hydrogen: "Hydrogen",
  oxygen: "Oxygen",
  "home page": "Trang chủ",
  all: "Tất cả",
  frontpage: "Trang nhất",
};

const MENU_TITLE_VI: Record<string, string> = {
  all: "Tất cả",
  home: "Trang chủ",
  about: "Giới thiệu",
  search: "Tìm kiếm",
  contact: "Liên hệ",
  catalog: "Danh mục",
  products: "Sản phẩm",
  collections: "Bộ sưu tập",
};

export function toViProductTitle(title: string): string {
  const key = norm(title);
  return PRODUCT_TITLE_VI[key] ?? title;
}

export function toViCollectionTitle(title: string): string {
  const key = norm(title);
  return COLLECTION_TITLE_VI[key] ?? title;
}

export function toViMenuTitle(title: string): string {
  const key = norm(title);
  return MENU_TITLE_VI[key] ?? title;
}

const OPTION_NAME_VI: Record<string, string> = {
  title: "Phiên bản",
  size: "Kích cỡ",
  color: "Màu",
  material: "Chất liệu",
  style: "Kiểu dáng",
};

export function toViOptionName(name: string): string {
  const key = norm(name);
  return OPTION_NAME_VI[key] ?? name;
}

/** Hiển thị phụ kiện biến thể; logic so khớp vẫn dùng `DEFAULT_OPTION` tiếng Anh từ Shopify. */
export function toViVariantTitle(title: string): string {
  if (title === DEFAULT_OPTION) return "Mặc định";
  return title;
}
