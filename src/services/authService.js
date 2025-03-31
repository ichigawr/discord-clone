import httpRequest from "@/utils/httpRequest";

export const me = async () => {
  const res = await httpRequest.get("/auth/me");
  return res;
};

export const login = async (loginInfo) => {
  const res = await httpRequest.post("/auth/login", loginInfo);
  return res;
}

export const logout = async () => {
  const res = await httpRequest.post("/auth/logout");
  return res;
}

export const register = async (registerInfo) => {
  const res = await httpRequest.post("/auth/register", registerInfo);
  return res;
}

export const checkEmail = async (email) => {
  const res = await httpRequest.get(`auth/check-email?email=${email}`);
  return res.exists;
};

export default {
  me,
  login,
  logout,
  register,
  checkEmail,
};
