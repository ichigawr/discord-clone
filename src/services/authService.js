import httpRequest from "@/utils/httpRequest";

export const getCurrentUser = async () => {
  // TODO: replace url with actual endpoint
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

export default {
  getCurrentUser,
  login,
  logout,
  register,
};
