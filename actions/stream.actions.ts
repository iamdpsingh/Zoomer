"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () =>{
    const user = await currentUser();

    if(!user) throw new Error("User not found or not authenticated");

    if(!apiKey) throw new Error("Stream api key not found || No api key");
    if(!apiSecret) throw new Error("Stream secret not found || No secret");


    const streamClient = new StreamClient(apiKey, apiSecret)

    // exp is optional (by default the token is valid for an hour)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const issued = Math.floor(Date.now()/1000) -60;

    const token = streamClient.createToken(user.id, exp, issued);

    return token;

}