import { createContext } from "react";

export const initialStateUser = {
  user: { name: "" },
};

export const { Provider, Consumer } = createContext(initialStateUser);
