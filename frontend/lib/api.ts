import API from "./axios-client";

interface Login {
  email: string;
  password: string;
}

interface Register {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const loginMutationFn = async (data: Login) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: Register) =>
  await API.post("/auth/register", data);
