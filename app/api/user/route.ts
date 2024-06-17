
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import client from "@/db"
export async function GET() {

   const data= await client.nextUser.findMany({})
    return Response.json({
       data: data
    })
}
export async function POST(req: NextRequest) {
    // body
     
}