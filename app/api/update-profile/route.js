import { NextResponse } from "next/server";
import { updateProfile } from "@/app/_libs/actions";

export async function POST(request) {
  try {
    const data = await request.json();

    await updateProfile(data);

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
