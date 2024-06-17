import axios from "axios";
import { User } from "./actions/user";


// async function User() {
//     const res=await axios.get("http://localhost:3000/api/user")

//   return res.data

// }



export default async function Home() {
  const {message}= await User()
  return (
<main>
      {message && message.length > 0 && message.map((p:any) =>
        <div key={p.id}> name :  { p.password}   email :  { p.email}</div>)
}
</main>
  );
}
