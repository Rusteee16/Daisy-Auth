import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request: NextRequest){
    try {        
        const {email} = await request.json();

        console.log(email);

        const user = await User.findOne({email})

        console.log(user);

        await sendEmail({email, emailType: "RESET", userId: user._id})
        
        const response = NextResponse.json(user);

        response.cookies.set("token", user.forgotPasswordToken, {httpOnly: true});

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}