"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "Usage", visitors: 20, fill: "var(--color-Usage)" },
  { browser: "Free", visitors: 10, fill: "var(--color-Free)" },
];

const chartConfig = {
  Usage: {
    label: "Usage",
    color: "var(--chart-3)",
  },
  Free: {
    label: "Free",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col bg-[#252525] border-0 border-[#383838]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white">Total Disk space</CardTitle>
        
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-white">
          <p>Total 30 GB</p>
        </div>
        <div className="leading-none text-muted-foreground">
          <p>20 GB used, 10 GB free</p>
        </div>
      </CardFooter>
    </Card>
  );
}
