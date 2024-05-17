import "./tortaChartBox.scss";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function TortaChartBox() {
  const data = [
    { name: "Alkosto", value: 700, color: "#0088FE" },
    { name: "Ktronix", value: 300, color: "#00C49F" },
    { name: "UN", value: 300, color: "#FFBB28" },
    { name: "Exito", value: 100, color: "#FF8042" },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="torta-chart-box">
      <div className="boxInfo">
        <div className="title">
          <h2>Distribucion de reseñas</h2>
        </div>
        <div className="desc">
          <p>Analiza la cantidad de reseñas vinculadas a cada empresa</p>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height={250}>
            <Tooltip
              contentStyle={{ backgroundColor: "#f5f5f5", border: "none" }}
            ></Tooltip>
            <PieChart>
              <Pie
                data={data}
                innerRadius={"50%"}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="convenciones">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }}>
                  <span>{item.name}</span>
                </div>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TortaChartBox;
