import si from "systeminformation"
import { NextResponse } from "next/server"

export async function GET() {
  const processes = await si.processes()
  return NextResponse.json(processes.list.slice(0, 10))
}
