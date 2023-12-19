import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import SubscriptionPage from "./Subscription";
import "./Subscription.css";

const Subscriptions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <SubscriptionPage />
      </div>
    </div>
  );
};

export default Subscriptions;
