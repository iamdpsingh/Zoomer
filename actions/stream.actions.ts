"use server";

import { currentUser } from "@clerk/nextjs/server";
import crypto from "crypto";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

/**
 * Generates an authenticated JWT user token for the Stream Video SDK.
 * Matches Stream Video's specification (HS256 HMAC-SHA256 signed with STREAM_SECRET_KEY)
 * using Node.js native crypto to eliminate archaic buffer/jwa dependency crashes in Node 22/26+.
 */
function createStreamUserToken(secret: string, userId: string, exp: number, iat: number): string {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { user_id: userId, exp, iat };

  const base64Url = (obj: object): string =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const headerB64 = base64Url(header);
  const payloadB64 = base64Url(payload);
  const data = `${headerB64}.${payloadB64}`;

  const signature = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${data}.${signature}`;
}

export const tokenProvider = async () => {
  const user = await currentUser();

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_SECRET_KEY;

  if (!user) throw new Error("User not found or not authenticated");
  if (!apiKey) throw new Error("Stream api key not found || No api key");
  if (!apiSecret) throw new Error("Stream secret not found || No secret");

  // exp is optional (token is valid for 1 hour by default)
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  return createStreamUserToken(apiSecret, user.id, exp, issued);
};