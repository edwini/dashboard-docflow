import { UserType } from "./UserType";

declare module "next-auth" {
  type Session = {
    user: UserType;
  };
}
