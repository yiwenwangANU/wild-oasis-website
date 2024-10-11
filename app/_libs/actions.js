"use server";

import { auth } from "./auth";

export async function updateProfile(data) {
  const session = await auth();
  if (!session) throw new Error("Client must logged in to update profile.");
  console.log("Received data:", data);
  const { fullName, country, nationalID } = data;
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid nationalID.");
}
