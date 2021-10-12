import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });

        // const user = await res.json();
        // if (res.ok && user) {
        //   return user;
        // }
        // return null;

        const user = { email: credentials.username };
        if (user.email !== "test") {
          throw Error("No user");
        }
        return user;
      },
    }),
  ],
  // callbacks: {
  //   async redirect({ url, baseUrl }: any) {
  //     console.log(baseUrl);
  //     return baseUrl;
  //   },
  // },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    //error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  session: {
    jwt: true,
  },
});
