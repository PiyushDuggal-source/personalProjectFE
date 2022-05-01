enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "Male" | "Female" | "Others";
  showPassword: boolean;
}

export const signUpInitialValues: User = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "Male",
  showPassword: false,
};

export interface LoginInterface {
  email: string;
  password: string;
}

export const loginInitialValues: LoginInterface = {
  email: "",
  password: "",
};

export const commentInitialValues = {
  comment: "",
};
