import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Paymob webhook handler is scaffolded and will be wired once credentials are available.",
  });
}
