import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Footer(){
    const {userName, changeUser} = useContext(UserContext)

    return(
        <footer>
            <button onClick={changeUser}>{userName}</button>
        </footer>
    )
}