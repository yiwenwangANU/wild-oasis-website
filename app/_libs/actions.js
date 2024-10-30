"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { supabase } from "./supabase";

export async function updateProfile(data) {
  const session = await auth();
  if (!session) throw new Error("Client must logged in to update profile.");
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

export async function deleteReservation(id) {
  const session = await auth();
  if (!session) throw new Error("Client must logged in to delete reservation.");

  let { data, error: guestIdError } = await supabase
    .from("bookings")
    .select("guestId")
    .eq("id", id)
    .limit(1)
    .single();
  if (guestIdError) {
    console.log(guestIdError);
    throw new Error("Could not fetch guest Id.");
  }

  if (session.user?.guestId !== data.guestId)
    throw new Error("Client can only delete his/her own reservation.");

  const { error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Reservation could not be deleted.");
  }
  revalidatePath("account/reservations");
}

export async function updateReservation(id, reservation) {
  const session = await auth();
  if (!session) throw new Error("Client must logged in to update reservation.");

  let { data: guestData, error: guestIdError } = await supabase
    .from("bookings")
    .select("guestId")
    .eq("id", id)
    .limit(1)
    .single();
  if (guestIdError) {
    console.log(guestIdError);
    throw new Error("Could not fetch guest Id.");
  }

  if (session.user?.guestId !== guestData.guestId)
    throw new Error("Client can only update his/her own reservation.");

  const { startDate, endDate, numNights, numGuests, observations } =
    reservation;
  const { error } = await supabase
    .from("bookings")
    .update({ startDate, endDate, numNights, numGuests, observations })
    .eq("id", id)
    .select();
  if (error) {
    console.log(error);
    throw new Error("Reservation could not be updated.");
  }
}
