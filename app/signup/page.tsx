"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import solve from "../actions/user";

export default function Sign() {
    const [email,SetEmail]=useState('')
    const [Password,SetPassword]=useState('')
const router=useRouter()
    async function send(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const Data=await solve(email,Password)
    //    const {data}=await axios.post(`http://localhost:3000/api/user`,{email,Password})
    //    console.log(data);
        if ( Data.success) {
        router.push('/')
       }
       
    }
    return (
        <div className='h-screen w-[100%] text-sm  flex justify-center flex-col'>
            <div className='text-center font-bold text-xl sm:text-3xl'>
                <div className='text-gray-400 text-sm'>
            Create an account
                 
                </div>

           
           <form className="" onSubmit={(e)=>send(e)} >

            <input type="text" onChange={(e)=>SetEmail(e.target.value)} placeholder="email" />
            <br />
            <input type="password" onChange={(e)=>SetPassword(e.target.value)} placeholder="password" />
            <br />
            <button>Sign up</button>
           </form>
            </div>
        </div>
    );
}
