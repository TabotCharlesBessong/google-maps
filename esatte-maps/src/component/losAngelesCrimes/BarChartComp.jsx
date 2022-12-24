import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { useWindowSize } from "../useWindowSize"

export default function BarChartComp({ data, height, yAxisWidth }) {
  const size = useWindowSize()

  return (
    <>
      <BarChart
        width={size.width < 380 ? 340 : 380}
        height={height}
        data={data}
        layout="vertical"
        margin={{
          top: 10,
          right: 0,
          left: 15,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis
          type="category"
          dataKey={"value"}
          width={yAxisWidth}
          interval={0}
          minTickGap={Number(100)}
        />
        <Tooltip
          wrapperStyle={{ backgroundColor: "transparent" }}
          contentStyle={{ color: "#333" }}
        />
        <Bar dataKey={"count"} fill="#0EA7BC" barSize={10} />
      </BarChart>
    </>
  )
}
