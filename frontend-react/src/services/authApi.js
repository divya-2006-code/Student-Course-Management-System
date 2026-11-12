import api from "./api";

export async function registerStudent(studentData) {
  const response = await api.post("/auth/register", studentData);
  return response.data;
}

export async function loginStudent(credentials) {
  const response = await api.post("/auth/login", credentials);
  return response.data;
}
