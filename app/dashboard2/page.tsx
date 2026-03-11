import Image from "next/image";
import { Icon } from "@iconify/react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { ChartExample } from "@/components/charts/ChartExample";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const processes = [
  { pid: 1234, name: "node", cpu: 12, memory: 150, status: "running" },
  { pid: 2345, name: "nginx", cpu: 5, memory: 50, status: "sleeping" },
  { pid: 3456, name: "postgres", cpu: 18, memory: 300, status: "running" },
];

export default function Page() {
  return (
    <div>
      <div className="p-7 flex space-x-2.5">
        <p className="text-white text-3xl">Dashboard</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" bg-[#FEA951] hover:bg-[#f59c3d] text-white border-none">
              time
              <Icon icon="mingcute:down-fill" className="ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white">
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-[#f59c3d]">
                day
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#f59c3d]">
                week
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#f59c3d]">
                month
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-7 round-lg bg-zinc-900 border-zinc-800">
        <div className="">
          <ChartExample />
        </div>
      </div>
    </div>
  );
}
