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

export interface BasicChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof basicChartVariants> {
  data: { x: string; value: number }[];
}

export const BasicChart = ({
  className,
  variant,
  data,
  ...props
}: BasicChartProps) => {
  return (
    <div className={cn(basicChartVariants({ variant }), className)} {...props}>
      {data.map((item) => (
        <div key={item.x} className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-black" />
          <span>{item.x}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};
