"use client";
import React from "react";
import { cn } from "@clarityspark/shared";
import { cva, type VariantProps } from "class-variance-authority";
import { useAnimatedValue } from "../../hooks/useAnimatedValue";
import { getRandomColor } from "../../utils/getRandomColor";

const basicChartVariants = cva("flex flex-col gap-4 rounded-lg p-6", {
  variants: {
    variant: {
      default: "bg-white shadow-lg",
      secondary: "bg-gray-100 shadow-md",
      destructive: "bg-red-50 shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BasicChartDataSetsType = {
  label: string;
  value: number;
  color?: string;
}[];

interface BasicChartType {
  title?: string;
  disableAnimation?: boolean;
  datasets: BasicChartDataSetsType;
}

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof basicChartVariants>,
    BasicChartType {}

export const BasicChart = ({
  variant,
  title,
  datasets,
  disableAnimation = false,
  ...props
}: Props) => {
  const maxValue = Math.max(...datasets.map((item) => item.value));

  const animatedValues = useAnimatedValue({
    datasets,
    duration: disableAnimation ? 0 : 100,
  });

  return (
    <div
      role="region"
      className={cn(basicChartVariants({ variant }), "min-w-[300px]")}
      {...props}
    >
      {title && (
        <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>
      )}
      <div className="space-y-4">
        {animatedValues.map(({ label, value, color, currentValue }, index) => (
          <div key={`${label}${index}`} className="space-y-2" role="listitem">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{label}</span>
              <span className="text-sm font-semibold text-gray-800">
                {value}
              </span>
            </div>
            <div
              className="h-4 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
            >
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(currentValue / maxValue) * 100}%`,
                  backgroundColor: color || getRandomColor(),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
