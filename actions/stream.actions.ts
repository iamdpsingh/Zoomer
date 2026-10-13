"use server";

import { currentUser } from "@clerk/nextjs/server";

// Polyfill SlowBuffer for Node 22+ / 26+ runtime compatibility with buffer-equal-constant-time
if (typeof globalThis !== "undefined") {
  try {
    const buf = require("node:buffer");
    if (buf && !buf.SlowBuffer) {
      buf.SlowBuffer = buf.Buffer;
    }
    const buf2 = require("buffer");
    if (buf2 && !buf2.SlowBuffer) {
      buf2.SlowBuffer = buf2.Buffer;
    }
  } catch {
    // Ignore in browser or non-Node contexts
  }
}

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not found or not authenticated");
  if (!apiKey) throw new Error("Stream api key not found || No api key");
  if (!apiSecret) throw new Error("Stream secret not found || No secret");

  // Dynamically import StreamClient after buffer compatibility patch is guaranteed
  const { StreamClient } = await import("@stream-io/node-sdk");

  const streamClient = new StreamClient(apiKey, apiSecret);

  // exp is optional (by default the token is valid for an hour)
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, exp, issued);

  return token;
};