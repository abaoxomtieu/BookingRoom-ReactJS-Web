import { Tooltip } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const BarChartView = () => {
  const data = [
    {
      name: "Tháng 1",
      invest: 4000,
      profit: 2400,
      amt: 2400,
    },
    {
      name: "Tháng 2",
      invest: 3000,
      profit: 1398,
      amt: 2210,
    },
    {
      name: "Tháng 3",
      invest: 2000,
      profit: 9800,
      amt: 2290,
    },
    {
      name: "Tháng 4",
      invest: 2780,
      profit: 3908,
      amt: 2000,
    },
    {
      name: "Tháng 5",
      invest: 1890,
      profit: 4800,
      amt: 2181,
    },
    {
      name: "Tháng 6",
      invest: 2390,
      profit: 3800,
      amt: 2500,
    },
  ];
  return (
    
<>
        <h2>Example draw chart with Rechart</h2>
        <ResponsiveContainer width={500} height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="profit"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="invest"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
</>
  );
};

export default BarChartView;
