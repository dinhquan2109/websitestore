"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("🛍️ Chào mừng đến Đình Quân Store!", {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            Cửa hàng headless kết nối Shopify — giao diện tiếng Việt, hiển thị
            giá theo định dạng Việt Nam.
          </>
        ),
      });
    }
  }, []);

  return null;
}
