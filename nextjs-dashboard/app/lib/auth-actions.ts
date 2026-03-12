'use server';

import { signIn } from '@/auth';

export async function signInWithGoogle() {
  await signIn('google', { redirectTo: '/dashboard' });
}

export async function signInWithGitHub() {
  await signIn('github', { redirectTo: '/dashboard' });
}

export async function signInWithMicrosoft() {
  await signIn('microsoft-entra-id', { redirectTo: '/dashboard' });
}

export async function signInWithDiscord() {
  await signIn('discord', { redirectTo: '/dashboard' });
}
