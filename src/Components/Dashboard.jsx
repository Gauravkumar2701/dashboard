import React from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import SummaryCards from "./SummaryCards.jsx";
import RequestTypeChart from "./RequestTypeChart.jsx";
import BrowserChart from "./BrowserChart.jsx";
import RequestTable from "./RequestTable.jsx";
import "./Dashboard.css";
import { MdDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";

const data = [
  {
    icon: MdDashboard,
    title: "Dasboard",
  },
  {
    icon: MdProductionQuantityLimits,
    title: "Product",
  },
  {
    icon: IoPersonSharp,
    title: "Customers",
  },
  {
    icon: CiWallet,
    title: "Income",
  },
  {
    icon: CiDiscount1,
    title: "Promotes",
  },
  {
    icon: MdHelpOutline,
    title: "Helps",
  }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar data={data} />
      <div className="main-content">
        <Header />
        <SummaryCards />
        <div className="charts">
          <RequestTypeChart />
          <BrowserChart />
        </div>
        <RequestTable />
      </div>
    </div>
  );
};

export default Dashboard;
