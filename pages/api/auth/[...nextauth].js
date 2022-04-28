import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'ID & PW',
      credentials: {
        id: { label: 'ID', type: 'text', placeholder: 'ID' },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, req) {
        const data = { id: credentials.id, password: credentials.password };
        const config = {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            corsOrigin: '*',
            'Access-Control-Allow-Origin': '*',
          },
        };

        const res = await fetch(
          process.env.REACT_APP_BACKEND + '/auth/signin',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        const { user } = await res.json();

        const userInfo = { id: user.id, name: user.name, email: user.email };

        if (userInfo) {
          return userInfo;
        }
        return null;
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
