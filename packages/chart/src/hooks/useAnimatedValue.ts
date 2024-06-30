import { useState, useEffect } from "react";
import { BasicChartDataSetsType } from "../ui";

interface Props {
  datasets: BasicChartDataSetsType;
  duration?: number;
}

export function useAnimatedValue({ datasets, duration = 100 }: Props) {
  const [animatedDatasets, setAnimatedDatasets] = useState(
    datasets.map((item) => ({ ...item, currentValue: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedDatasets(
        datasets.map((item) => ({ ...item, currentValue: item.value }))
      );
    }, duration || 100);

    return () => clearTimeout(timer);
  }, [datasets]);

  return animatedDatasets;
}
