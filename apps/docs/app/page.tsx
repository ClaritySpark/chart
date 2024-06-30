"use client";
import { BasicChart, type BasicChartDataSetsType } from "@clarityspark/chart";

const MOCK_CHART: BasicChartDataSetsType = [
  { label: "React", value: 100 },
  { label: "Svelt", value: 80 },
  { label: "Remix", value: 60 },
  { label: "Next", value: 100 },
  { label: "Solid", value: 50 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold text-gray-500">Docs</h1>
      <h3 className="text-xl font-bold text-gray-400">
        Incomplete, Coming Soon
      </h3>
      <BasicChart
        title="Framework Usage (%)"
        variant="secondary"
        datasets={MOCK_CHART}
      />
    </main>
  );
}
