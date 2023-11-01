import type { IAuhResponse, ILoginUser, IUser } from "./../types.d";

export const loginUser = async (user: ILoginUser): Promise<IAuhResponse> => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as IUser[];
  const userResp = users.find((u) => u.username === user.username);

  if (!user || userResp?.password !== user.password) {
    return { ok: false, data: null, message: "Error with user or password" };
  }

  return { ok: true, data: userResp, message: "Login success!" };
};

export const registerUser = async (user: IUser): Promise<IAuhResponse> => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as IUser[];
  const userResp = users.find((u) => u.username === user.username);

  if (userResp) return { ok: false, data: null, message: "Error user with username exist" };

  localStorage.setItem("users", JSON.stringify([...users, user]));

  return { ok: true, data: user, message: "Register success!" };
};
