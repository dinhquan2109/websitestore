"use client";

import { createClient } from "lib/supabase/client";
import { isSupabaseConfigured } from "lib/supabase/env";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isSupabaseConfigured()) {
    return (
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Thêm biến môi trường Supabase vào file{" "}
        <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
          .env
        </code>{" "}
        để bật đăng nhập.
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: signError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signError) {
        setError(signError.message);
        return;
      }
      router.refresh();
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-black dark:border-neutral-600 dark:bg-black dark:text-white"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span>Mật khẩu</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-black dark:border-neutral-600 dark:bg-black dark:text-white"
        />
      </label>
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Đang xử lý…" : "Đăng nhập"}
      </button>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Chưa có tài khoản?{" "}
        <Link href="/dang-ky" className="text-blue-600 underline">
          Đăng ký
        </Link>
      </p>
    </form>
  );
}
