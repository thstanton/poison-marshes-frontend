import { createContext, useContext } from "react";
import { UserContextType } from "./UserProvider";

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};
