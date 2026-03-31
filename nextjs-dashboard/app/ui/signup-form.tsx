'use client';

import { lusitana } from '@/app/ui/fonts';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function SignUpForm() {
    return (
        <div className="space-y-5">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
                <p className={`${lusitana.className} mb-3 text-lg font-semibold text-slate-900`}>
                    Sign up with GitHub
                </p>
                <p className="text-sm text-gray-500">
                    Create your account using GitHub authentication only.
                </p>
            </div>

            <a
                href="/api/auth/signin/github"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
                Continue with GitHub
            </a>

            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Only GitHub sign-up is enabled on this page.
            </div>
        </div>
    );
}
