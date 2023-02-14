import { createContext } from "react";

const AppContext = createContext();
function Productcontext({ children }) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}
export { Productcontext };
