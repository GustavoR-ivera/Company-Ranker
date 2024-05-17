import "./barChartBox.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartBox() {
  const data = [
    {
      name: "Alkosto",
      Excelente: 40,
      Regular: 24,
      amt: 2400,
    },
    {
      name: "Ktronix",
      Excelente: 30,
      Regular: 13,
      amt: 2210,
    },
    {
      name: "Exito",
      Excelente: 20,
      Regular: 98,
      amt: 2290,
    },
    {
      name: "Carulla",
      Excelente: 27,
      Regular: 39,
      amt: 2000,
    },
    {
      name: "UN",
      Excelente: 18,
      Regular: 48,
      amt: 2181,
    },
  ];
  return (
    <div className="bar-chart-box">
      <div className="boxInfo">
        <div className="title">
          <h2>Valoracion reseñas</h2>
        </div>
        <div className="desc">
          <p>
            Observa la cantidad de reseñas valoradas como excelentes y regulares
            por empresa
          </p>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={400} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Excelente"
                fill="#8884d8"
                //background={{ fill: "#eee" }}
              />
              <Bar dataKey="Regular" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BarChartBox;
