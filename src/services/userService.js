import httpRequest from "@/utils/httpRequest";

export const getAllUsers = async () => httpRequest.get("/users");
export const getUserById = async (id) => httpRequest.get(`/users/${id}`);
export const getUserByUsername = async (username) =>
  httpRequest.get(`/users/${username}`);

export default {
  getAllUsers,
  getUserById,
  getUserByUsername,
};
