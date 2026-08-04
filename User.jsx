import { useContext } from "react"
import { UserContext } from "../App"

export default function User() {
   const user = useContext(UserContext);
  return (
    <div>
     Name is {user.name}
     Email is {user.email}
     Class is {user.class}
    </div>
  )
}
