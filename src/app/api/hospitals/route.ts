import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5000";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const params = url.searchParams;
  const backendUrl = `${BACKEND_URL}/api/hospitals?${params.toString()}`;

  try {
    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch hospitals" }, { status: 500 });
  }
}
