import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id';
import Discord from 'next-auth/providers/discord';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    MicrosoftEntraID({
      tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID ?? 'common',
    }),
    Discord,
  ],
  pages: {
    signIn: '/login',
  },
});
