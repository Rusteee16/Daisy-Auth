import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/UserModel";
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        console.log(reqBody);

        const user = await User.findOne({email})
        
        const validPassword = await bcryptjs.compare(password, user.password) 
        if (!validPassword){
            return NextResponse.json({error: "Password does not match"},{status: 400})
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn: "1d"});

        const response = NextResponse.json({message: "Login Successfull!", success: true});

        response.cookies.set("token", token,{httpOnly: true});

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}