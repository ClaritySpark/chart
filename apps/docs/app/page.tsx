import { BasicChart } from "@clarityspark/chart";

const MOCK_CHART = [
  { x: "React", value: 100 },
  { x: "Svelt", value: 80 },
  { x: "Remix", value: 60 },
  { x: "Next", value: 100 },
  { x: "Solid", value: 50 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold text-gray-500">Docs</h1>
      <h3 className="text-xl font-bold text-gray-400">
        Incomplete, Coming Soon
      </h3>
      <BasicChart variant="secondary" data={MOCK_CHART} />
    </main>
  );
}
