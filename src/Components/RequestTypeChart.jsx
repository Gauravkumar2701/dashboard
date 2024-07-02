import React from "react";
import "./RequestTypeChart.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { name: "Post", count: 4000 },
  { name: "Get", count: 4000 },
  { name: "Put", count: 4000 },
  { name: "Delete", count: 4000 },
  { name: "Patch", count: 4000 }
];

const renderCustomLabel = (props) => {
  const { x, y, value, width } = props;
  return (
    <text x={x + width / 2} y={y} dy={20} textAnchor="middle" fill="#8884d8">
      {value}
    </text>
  );
};

const RequestTypeChart = () => {
  return (
    <div className="request-type-chart">
      <div className="card-title">Request Type</div>
      <div className="card-sub-title">Number of requests based on type</div>
      <div className="chart">
        <ResponsiveContainer width="40%" height={200}>
          <BarChart data={data}>
            
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8">
              <LabelList dataKey="count" content={renderCustomLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RequestTypeChart;
