import "./dashboard.scss";
import LineChartBox from "../../components/lineChartBox/LineChartBox";
import TortaChartBox from "../../components/tortaChartBox/TortaChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="box box1">
        <BarChartBox />
      </div>
      <div className="box box2">
        <TortaChartBox />
      </div>
      <div className="box box3">
        <LineChartBox />
      </div>
    </div>
  );
};

export default Dashboard;
