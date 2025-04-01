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

export const checkEmail = async (email, excludeId) => {
  const res = await httpRequest.get(
    `auth/check-email?email=${email}&exclude_id=${excludeId}`
  );
  return res.exists;
};

export const checkPhone = async (phone, excludeId) => {
  const res = await httpRequest.get(
    `auth/check-phone?phone=${phone}&exclude_id=${excludeId}`
  );
  return res.exists;
};

export const checkUsername = async (username, excludeId) => {
  const res = await httpRequest.get(
    `auth/check-username?username=${username}&exclude_id=${excludeId}`
  );
  return res.exists;
};

export default {
  me,
  login,
  logout,
  register,
  checkEmail,
  checkPhone,
  checkUsername,
};
