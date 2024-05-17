import "./lineChartBox.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LineChartBox() {
  const data = [
    {
      name: "enero",
      Exito: 40,
      Alkosto: 24,
      amt: 2400,
    },
    {
      name: "febrero",
      Exito: 30,
      Alkosto: 13,
      amt: 2210,
    },
    {
      name: "marzo",
      Exito: 20,
      Alkosto: 98,
      amt: 2290,
    },
    {
      name: "abril",
      Exito: 27,
      Alkosto: 39,
      amt: 2000,
    },
    {
      name: "mayo",
      Exito: 18,
      Alkosto: 48,
      amt: 2181,
    },
  ];
  return (
    <div className="line-chart-box">
      <div className="boxInfo">
        <div className="title">
          <h2>Numero de reseñas por empresa</h2>
        </div>
        <div className="desc">
          <p>
            Observa la cantidad de reseñas publicadas para las empresas en los
            ultimos meses.
          </p>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Alkosto"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Exito" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default LineChartBox;
