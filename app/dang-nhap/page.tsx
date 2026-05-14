import { LoginForm } from "components/auth/login-form";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập tài khoản Đình Quân Store",
};

export default function LoginPage() {
  return (
    <div className="mx-auto my-10 max-w-md px-4">
      <h1 className="mb-6 text-3xl font-bold">Đăng nhập</h1>
      <LoginForm />
      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        <Link href="/" className="text-blue-600 underline">
          ← Về cửa hàng
        </Link>
      </p>
    </div>
  );
}
