import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import OAuthButtons from '@/app/ui/oauth-buttons';
import { lusitana } from '@/app/ui/fonts';

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

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className={`${lusitana.className} bg-gray-50 px-3 text-gray-500`}>
              Or continue with
            </span>
          </div>
        </div>

        {/* OAuth buttons */}
        <OAuthButtons />
      </div>
    </main>
  );
}
