"use client";
import { Icon } from "@iconify/react";
import { TrendingUp } from "lucide-react";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { disksIO } from "systeminformation";

const chartData = [
  { month: "00:00", CPU: 186, Memory: 80, DisksIO: 50 },
  { month: "01:00", CPU: 305, Memory: 200, DisksIO: 120 },
  { month: "02:00", CPU: 237, Memory: 120, DisksIO: 90 },
  { month: "03:00", CPU: 73, Memory: 190, DisksIO: 70 },
  { month: "04:00", CPU: 209, Memory: 130, DisksIO: 100 },
  { month: "05:00", CPU: 214, Memory: 140, DisksIO: 110 },
  { month: "06:00", CPU: 178, Memory: 100, DisksIO: 80 },
  { month: "07:00", CPU: 290, Memory: 170, DisksIO: 130 },
  { month: "08:00", CPU: 250, Memory: 150, DisksIO: 90 },
  { month: "09:00", CPU: 320, Memory: 220, DisksIO: 140 },
  { month: "10:00", CPU: 260, Memory: 160, DisksIO: 100 },
  { month: "11:00", CPU: 310, Memory: 210, DisksIO: 120 },
  { month: "12:00", CPU: 280, Memory: 180, DisksIO: 110 },
  { month: "13:00", CPU: 330, Memory: 230, DisksIO: 150 },
  { month: "14:00", CPU: 290, Memory: 190, DisksIO: 120 },
  { month: "15:00", CPU: 350, Memory: 250, DisksIO: 160 },
  { month: "16:00", CPU: 300, Memory: 200, DisksIO: 130 },
  { month: "17:00", CPU: 370, Memory: 270, DisksIO: 170 },
  { month: "18:00", CPU: 320, Memory: 220, DisksIO: 140 },
  { month: "19:00", CPU: 380, Memory: 280, DisksIO: 180 },
  { month: "20:00", CPU: 340, Memory: 240, DisksIO: 150 },
  { month: "21:00", CPU: 400, Memory: 300, DisksIO: 200 },
  { month: "22:00", CPU: 360, Memory: 260, DisksIO: 160 },
  { month: "23:00", CPU: 420, Memory: 320, DisksIO: 220 },
];

const chartConfig = {
  CPU: {
    label: "CPU",
    color: "#FF928A",
  },
  Memory: {
    label: "Memory",
    color: "#8979FF",
  },
  DiskIO: {
    label: "Disk I/O",
    color: "#FFB86C",
  },
} satisfies ChartConfig;

export function ChartExample() {
  return (
    <Card className="w-[830px] bg-[#252525]">
      <CardHeader>
        <CardTitle className="text-white">System usage</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[150px] w-3xl">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={30}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="CPU"
              type="natural"
              fill="var(--color-CPU)"
              fillOpacity={0.4}
              stroke="var(--color-CPU)"
            />
            <Area
              dataKey="Memory"
              type="natural"
              fill="var(--color-Memory)"
              fillOpacity={0.4}
              stroke="var(--color-Memory)"
            />
            <Area
              dataKey="DiskIO"
              type="natural"
              fill="var(--color-DiskIO)"
              fillOpacity={0.4}
              stroke="var(--color-DiskIO)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium text-white">
              <Icon icon="tabler:cpu" className="inline-block mr-2/"/>
              CPU  
              <Icon icon="fa-solid:memory" className="inline-block mr-2/"/>
              MEMORY 
              <Icon icon="fluent:line-horizontal-1-dash-dot-dash-20-filled" className="inline-block mr-2/"/>
              DISK I/O
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
