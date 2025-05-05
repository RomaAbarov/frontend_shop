import { IUser } from "./user";

export interface IAuthForm {
  name: string;
  email: string;
  password: string;
}

export interface IAuthResponse extends IUser {
  access_token: string;
}
