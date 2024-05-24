import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/utils/prisma';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john.doe@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        // Here we check if the email exists in the database
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (user && bcrypt.compareSync(password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }

        // Return null if user data is invalid
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;
      return session;
    },
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    error: '/auth/error', // Error page
  },
};
