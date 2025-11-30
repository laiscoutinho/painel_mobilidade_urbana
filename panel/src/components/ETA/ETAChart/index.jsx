import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function ETAChart({ data }) {
  const chartData = data.map((item) => ({
    linha: item.linha,
    tempo: Number(String(item.chegadaPrevista).replace(/[^0-9.-]/g, "")),
  }));

  return (
    <div style={{ width: "100%", height: 450 }}>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="linha" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="tempo" stroke="#75D707" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  );
}
