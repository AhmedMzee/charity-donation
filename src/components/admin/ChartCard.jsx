import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 1200 },
  { name: "May", value: 900 },
];

const ChartCard = () => (
  <div className="bg-white p-6 rounded-2xl shadow mt-6">
    <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartCard;
