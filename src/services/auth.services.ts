import axios from "axios";

enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "Male" | "Female" | "Others";

  comparePass: (pass: string) => Promise<Boolean>;
}

export const createNewUser = (body: Partial<User>) => {
  return axios.post("http://localhost:4000/api/signup", body);
};
