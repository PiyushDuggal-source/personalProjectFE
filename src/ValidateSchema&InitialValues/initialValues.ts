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
  showPassword: boolean;
}

export const signUpInitialValues: User = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "Male",
  showPassword: false,
};
