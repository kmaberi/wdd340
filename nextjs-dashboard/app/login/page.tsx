import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[400px] space-y-4">
        {/* Logo header */}
        <div className="flex h-20 items-end justify-start rounded-lg bg-blue-600 p-4 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>

        {/* Email / password form */}
        <LoginForm />

        <div className="rounded-3xl border border-gray-200 bg-white p-4 text-center shadow-sm">
          <p className="mb-3 text-sm text-gray-600">New here?</p>
          <Link
            href="/signup"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Sign up for an account
          </Link>
        </div>
      </div>
    </main>
  );
}
