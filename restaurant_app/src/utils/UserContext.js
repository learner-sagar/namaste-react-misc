import { createContext, useContext } from "react";
export const UserContext = createContext({
  loggedInUser: "Default User",
});
