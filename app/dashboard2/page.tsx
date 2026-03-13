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
import { Card, CardContent } from "@/components/ui/card";

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

      <div className="grid grid-cols-3 gap-x-5 round-lg bg-zinc-900 border-zinc-800 px-7">
        <section className="col-span-2">
          <ChartExample />
        </section>
        <section className="h-full">
          <Card className="bg-[#252525] border-0 border-[#383838] h-full">
            <CardContent className="text-white flex flex-col justify-between m-5 h-full">
              <div>
                <p className="text-md font-medium mb-1 opacity-80">CPU Usage</p>
                <span className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">67</p>
                  <p className="text-md font-medium mb-1 opacity-80">
                    %
                  </p>
                </span>
              </div>
              <div>
                <p className="text-md font-medium mb-1 opacity-80">
                  Memory Usage
                </p>
                <span className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">12.4</p>
                  <p className="text-md font-medium mb-1 opacity-80">
                    GB / 64GB
                  </p>
                </span>
              </div>
              <div>
                <p className="text-md font-medium mb-1 opacity-80">
                  Disk I/O Usage
                </p>
                <span className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">128</p>
                  <p className="text-md font-medium mb-1 opacity-80">
                    GB / 512GB
                  </p>
                </span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
