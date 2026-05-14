import type { User } from "@supabase/supabase-js";
import Link from "next/link";

export function NavbarAuth({ user }: { user: User | null }) {
  if (!user) {
    return (
      <div className="hidden items-center gap-3 text-sm md:flex">
        <Link
          href="/dang-nhap"
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          Đăng nhập
        </Link>
        <Link
          href="/dang-ky"
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          Đăng ký
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden max-w-[200px] flex-col items-end gap-1 text-right text-xs md:flex">
      <span className="truncate text-neutral-600 dark:text-neutral-400">
        {user.email}
      </span>
      <Link
        href="/auth/dang-xuat"
        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        Đăng xuất
      </Link>
    </div>
  );
}
