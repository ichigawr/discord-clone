import httpRequest from "@/utils/httpRequest";

export const me = async () => {
  const res = await httpRequest.get("/auth/me");
  return res;
};

export const login = async (loginInfo) => {
  const res = await httpRequest.post("/auth/login", loginInfo);
  return res;
};

export const logout = async () => {
  const res = await httpRequest.post("/auth/logout");
  return res;
};

export const register = async (registerInfo) => {
  const res = await httpRequest.post("/auth/register", registerInfo);
  return res;
};

export const checkInfo = async (type, value, excludeId = "") => {
  const res = await httpRequest.get(
    `auth/check-${type}?${type}=${value}&exclude_id=${excludeId}`
  );
  return res.exists;
};

export default {
  me,
  login,
  logout,
  register,
  checkInfo,
};
