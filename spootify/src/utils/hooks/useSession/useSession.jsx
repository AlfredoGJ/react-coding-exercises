import { useContext } from "react";
import { SessionContext } from "../../../common/providers/SessionProvider";


export default function useSession(){
    const context = useContext(SessionContext)
    if(!context)
        throw new Error('useSession ')
    const[session, exchange] = context
    exchange(code)

    return session

}