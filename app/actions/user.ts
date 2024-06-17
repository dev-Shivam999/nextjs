"use server"
import client from '@/db'
export default async function solve(email: string, Password: string) {
    // const daa = await req.json()
    // headers
    // const he=req.headers.get('Content-Type')

    // query

    // const query = req.nextUrl.searchParams.get("p")

    await client.nextUser.create({
        data: {
            email: String(email),
            password: String(Password)
        }
    })
    return ({
        success: true,
        message: "user successfully logged in",

    })
}

export async function User(){
 const data=await client.nextUser.findMany({
       
    })
    return ({
        success: true,
        message: data

    })
}