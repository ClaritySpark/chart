import React from "react";
import { cn } from "@clarityspark/shared";
import { cva, type VariantProps } from "class-variance-authority";

const basicChartVariants = cva("flex flex-col gap-4 rounded-lg p-4", {
  variants: {
    variant: {
      default: "bg-black",
      secondary: "bg-gray-200",
      destructive: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BasicChartDataSetsType = {
  label?: string;
  value: number;
  color?: string;
}[];

interface BasicChartType {
  title?: string;
  datasets: BasicChartDataSetsType;
}

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof basicChartVariants>,
    BasicChartType {}

export const BasicChart = ({ variant, title, datasets, ...props }: Props) => {
  return (
    <div className={cn(basicChartVariants({ variant }))} {...props}>
      {title && <h2 className={cn("font-bold text-gray-900")}>{title}</h2>}
      {datasets.map(({ label, value, color }) => (
        <div
          key={label}
          className="flex items-center gap-2"
          style={{
            backgroundColor: color,
          }}
        >
          <div className="size-4 rounded-full bg-black" />
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
