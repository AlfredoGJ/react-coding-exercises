import { useContext } from "react";
import { useLocation } from "react-router";
import { SessionContext } from "../../providers/SessionProvider";

export default function SessionHandler({ children }) {
    const {exchange, logged} = useContext(SessionContext)
    
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const code = search.get('code')
  console.log(code)
  if(code && !logged()) 
    exchange(code)

  return <>{children}</>;
}
