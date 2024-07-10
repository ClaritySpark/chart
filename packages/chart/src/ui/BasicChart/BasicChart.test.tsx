import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicChart, BasicChartDataSetsType } from "./BasicChart";

// Mock the hooks and utilities
jest.mock("../../hooks/useAnimatedValue", () => ({
  useAnimatedValue: (props: {
    datasets: BasicChartDataSetsType;
    duration: number;
  }) => props.datasets.map((item) => ({ ...item, currentValue: item.value })),
}));

jest.mock("../../utils/getRandomColor", () => ({
  getRandomColor: () => "#000000",
}));

describe("BasicChart", () => {
  const mockDatasets: BasicChartDataSetsType = [
    { label: "A", value: 10, color: "#ff0000" },
    { label: "B", value: 20, color: "#00ff00" },
    { label: "C", value: 30, color: "#0000ff" },
  ];

  it("renders without crashing", () => {
    render(<BasicChart datasets={mockDatasets} />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("displays the title when provided", () => {
    const title = "Test Chart";
    render(<BasicChart title={title} datasets={mockDatasets} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders a list item for each dataset entry", () => {
    render(<BasicChart datasets={mockDatasets} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockDatasets.length);
  });

  it("displays correct labels and values", () => {
    render(<BasicChart datasets={mockDatasets} />);
    mockDatasets.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });

  it("applies correct variant class", () => {
    render(<BasicChart datasets={mockDatasets} variant="secondary" />);
    expect(screen.getByRole("region")).toHaveClass("bg-gray-100");
  });

  it("renders chart bars with correct widths", () => {
    render(<BasicChart datasets={mockDatasets} disableAnimation />);
    const bars = screen.getAllByRole("progressbar");
    expect(bars).toHaveLength(mockDatasets.length);

    const maxValue = Math.max(...mockDatasets.map((item) => item.value));
    bars.forEach((bar, index) => {
      const expectedWidth = (mockDatasets[index].value / maxValue) * 100;
      const innerBar = bar.children[0] as HTMLElement;
      const actualWidth = parseFloat(innerBar.style.width);
      expect(actualWidth).toBeCloseTo(expectedWidth, 1);
    });
  });
});
