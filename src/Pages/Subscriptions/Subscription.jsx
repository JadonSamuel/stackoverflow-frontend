import React, { useState} from "react";
import PaymentDialog from "./Paymentdialog"; // Import the PaymentDialog component



const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  

  const handleSubscription = async (paymentInfo) => {
    try {
      // Send payment information and selected plan to your backend
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...paymentInfo }),
      });

      const data = await response.json();
      console.log(data); // Handle the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closePaymentDialog = () => {
    setShowPaymentDialog(false);
    setSelectedPlan(null); // Deselect the plan when closing the dialog
  };

  const inputStyle = {
    marginRight: "8px",
  };

  const priceStyle = {
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const planContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
  };

  const planDetailsStyle = {
    backgroundColor: "#f6f6f6",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const showPlanDetails = (plan) => {
    if (plan === selectedPlan) {
      // If the selected plan is clicked again, deselect it
      setSelectedPlan(null);
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <div>
      <h1>Subscription Plans</h1>
      <div>
        <div style={planContainerStyle}>
          <div>
            <label>
              <input
                type="radio"
                value="Free"
                onChange={() => showPlanDetails("Free")}
                checked={selectedPlan === "Free"}
                style={inputStyle}
              />
              Free Plan
            </label>
            <span style={priceStyle}> - $0.00</span>
          </div>
          <button
            onClick={() => handleSubscription("Free")}
            style={buttonStyle}
          >
            Subscribe
          </button>
        </div>
        {selectedPlan === "Free" && (
          <div style={planDetailsStyle}>
            <h3>Free Plan Details</h3>
            <p>Users can post only one question a day with this free plan.</p>
          </div>
        )}
      </div>

      {/* Silver Plan */}
      <div>
        <div style={planContainerStyle}>
          <div>
            <label>
              <input
                type="radio"
                value="Silver"
                onChange={() => showPlanDetails("Silver")}
                checked={selectedPlan === "Silver"}
                style={inputStyle}
              />
              Silver Plan
            </label>
            <span style={priceStyle}> - $8.80</span>
          </div>
          <button
            onClick={() => handleSubscription("Silver")}
            style={buttonStyle}
          >
            Subscribe
          </button>
        </div>
        {selectedPlan === "Silver" && (
          <div style={planDetailsStyle}>
            <h3>Silver Plan Details</h3>
            <p>Users can post up to 5 questions a day with the Silver plan.</p>
          </div>
        )}
      </div>

      {/* Gold Plan */}
      <div>
        <div style={planContainerStyle}>
          <div>
            <label>
              <input
                type="radio"
                value="Gold"
                onChange={() => showPlanDetails("Gold")}
                checked={selectedPlan === "Gold"}
                style={inputStyle}
              />
              Gold Plan
            </label>
            <span style={priceStyle}> - $18.80</span>
          </div>
          <button
            onClick={() => handleSubscription("Gold")}
            style={buttonStyle}
          >
            Subscribe
          </button>
        </div>
        {selectedPlan === "Gold" && (
          <div style={planDetailsStyle}>
            <h3>Gold Plan Details</h3>
            <p>Users can post unlimited questions with the Gold plan.</p>
          </div>
        )}
      </div>

      {/* Payment Dialog */}
      {showPaymentDialog && (
        <PaymentDialog
          selectedPlan={selectedPlan}
          handleSubscription={handleSubscription}
          closePaymentDialog={closePaymentDialog}
        />
      )}
    </div>
  );
};

export default SubscriptionPage;
