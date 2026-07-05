import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Paymob integration is not configured yet. Add PAYMOB_SECRET_KEY and PAYMOB_INTEGRATION_ID_CARD to enable checkout.",
  });
}
