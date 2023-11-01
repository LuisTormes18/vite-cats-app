export interface IUser {
  name: string;
  username: string;
  password: string;
}
export interface ILoginUser {
  username: IUser["username"];
  password: IUser["password"];
}
export interface IAuhResponse {
  ok: boolean;
  data: IUser | null;
  message: string;
}
