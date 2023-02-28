import { LoginType } from "./LoginType";

declare module "next-auth" {
  type Session = {
    user: LoginType;
  };
}
