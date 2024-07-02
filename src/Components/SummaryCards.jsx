import React from "react";
import "./SummaryCards.css";
import { MdSmsFailed } from "react-icons/md";

const SummaryCards = () => {
  return (
    <div className="summary-cards">
      <div className="card">
        <div className="card-image">
          <MdSmsFailed size={30}/>
        </div>
        <div className="card-content">
          <div className="card-title">Total Request</div>
          <div className="card-ans">120k</div>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <MdSmsFailed size={30} />
        </div>
        <div className="card-content">
          <div className="card-title">Avg. Response Time</div>
          <div className="card-ans">1.2s</div>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <MdSmsFailed size={30} />
        </div>
        <div className="card-content">
          <div className="card-title">Failed Requests</div>
          <div className="card-ans">170</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
