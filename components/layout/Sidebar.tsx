"use client";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import path from "path";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-64 p-4 bg-[#252525] text-white min-h-screen">
      <h2 className="text-xl font-bold mb-4">MeMoni</h2>
      <div className="bg-white pb-0.5 opacity-16"></div>
      <div className="my-4 opacity-25 text-bold">Menu</div>

      <ul className="space-y-2 bg-[#252525]">
        <li>
          <a
            href="/dashboard2"
            className={`block rounded-lg px-3 py-2 transition
            ${
              pathname === "/dashboard2" ? "bg-[#FEA951]" : "hover:bg-[#FEA951]"
            }`}
          >
            <Icon icon="octicon:graph-16" className="inline-block mr-2" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/server"
            className={`block rounded-lg px-3 py-2 transition
            ${pathname === "/server" ? "bg-[#FEA951]" : "hover:bg-[#FEA951]"}`}
          >
            <Icon icon="tabler:server" className="inline-block mr-2" />
            Server
          </a>
        </li>
        <li>
        <a
            href="/server"
            className={`block rounded-lg px-3 py-2 transition
            ${pathname === "/sertting" ? "bg-[#FEA951]" : "hover:bg-[#FEA951]"}`}
          >
            <Icon
              icon="mdi:chart-timeline-variant-shimmer"
              className="inline-block mr-2"
            />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}
