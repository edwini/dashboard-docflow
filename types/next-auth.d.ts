import { LoginType } from "./LoginType";

declare module "next-auth" {
  type Session = {
    user: LoginType;
  };
}
/*
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {

  type JWT = LoginType;
}*/
