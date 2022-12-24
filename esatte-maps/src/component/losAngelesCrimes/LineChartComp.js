import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { useWindowSize } from "../useWindowSize"

export default function LineChartComp({ data, height, yAxisWidth }) {
  const size = useWindowSize()

  return (
    <>
      <LineChart
        width={size.width < 380 ? 340 : 380}
        height={height}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 15,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="value" allowDuplicatedCategory={false} />
        <YAxis width={yAxisWidth} />
        <Tooltip contentStyle={{ color: "#333" }} />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#0EA7BC"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  )
}
