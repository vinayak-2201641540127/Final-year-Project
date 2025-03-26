import LeftNav from "../components/LeftNav";
import NavBar from "../components/NavBar";
import Center from "../components/UI/Center";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard w-full">
        <NavBar/>
      <div className="flex items-center">
        <LeftNav />
        <Center/>
      </div>
    </div>
  );
};

export default Dashboard;
