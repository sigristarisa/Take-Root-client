import { createContext } from "react";

export const userContext = createContext({});
export const raisedBedContext = createContext({});
export const initialUserState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
