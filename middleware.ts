import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { BLOCKED_ROUTES } from "./utils/fomaters";
/*
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    //return NextResponse.next();+
  },
  {
    callbacks: {
      // rome-ignore lint/suspicious/noExplicitAny: <explanation>
      authorized: ({ req, token }: any) => {
        console.log(req.nextUrl.pathname);
        if (
          req.nextUrl.pathname.startsWith("/users") &&
          token.content.roleId !== ROLES.USER
        ) {
          console.log("NO AUTORIZADO");
          return false;
        }

        return true;
      },
    },
    pages: {
      error: "/auth-denied",
    },
  },
);*/
// middleware.ts
export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const res = NextResponse.next();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const token: any = await getToken({ req });

    console.log("MIDD");
    if (
      BLOCKED_ROUTES.some((route) => pathname.startsWith(route)) &&
      token.content.taxpayer
    ) {
      console.log("NO AUTORIZADO");
      const url = new URL("/auth-denied", req.url);
      url.searchParams.set(
        "error",
        "No tiene permisos para accesar a este recurso.",
      );
      return NextResponse.redirect(url);
    }

    return res;
  },
  {
    callbacks: {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      authorized: ({ token }: any) => !token?.content.taxpayer,

    },
  },
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/users/:path*",
    "/roles/:path*",
    "/operationlicense/:path*",
  ],
};

interface Authentication {
  messages: {
    successMessage: string;
    errorMessage: string | null;
    infoMessage: string | null;
  };
  content: {
    createdBy: string;
    updatedBy: string | null;
    createdDate: string;
    updatedDate: string;
    id: number;
    username: string;
    name: string;
    phone: string;
    taxpayer: boolean;
    status: string;
    roleId: number;
    rtn: string;
    dni: string;
  };
  token: string;
}
