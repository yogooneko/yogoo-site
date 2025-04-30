import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: number;
    username: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}
