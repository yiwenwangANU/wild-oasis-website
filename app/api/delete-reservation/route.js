import { deleteReservation } from "@/app/_libs/actions";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const id = await request.json();
    await deleteReservation(id);

    return NextResponse.json(
      { message: "Reservation deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
