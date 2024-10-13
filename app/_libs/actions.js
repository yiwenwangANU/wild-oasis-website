"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { supabase } from "./supabase";

export async function updateProfile(data) {
  const session = await auth();
  if (!session) throw new Error("Client must logged in to update profile.");
  console.log("Received data:", data);
  const { fullName, country, nationalID } = data;
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid nationalID.");

  const { data: guestData, error } = await supabase
    .from("guests")
    .update(data)
    .eq("id", session.user.guestId)
    .select();
  if (error) {
    console.log(error);
    throw new Error("Guest could not be updated.");
  }
  revalidatePath("/account/profile");
}
