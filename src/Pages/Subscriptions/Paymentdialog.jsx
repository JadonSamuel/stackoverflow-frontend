import React, { useState } from "react";

const PaymentDialog = ({
  selectedPlan,
  handleSubscription,
  closePaymentDialog,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCheckout = () => {
    // You can send this payment information to your backend
    const paymentInfo = {
      name,
      phoneNumber,
      address,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      selectedPlan, // Include the selected plan in the payment info
    };

    // Call the handleSubscription function with paymentInfo
    handleSubscription(paymentInfo);

    // Close the payment dialog
    closePaymentDialog();
  };

  return (
    <div className="payment">
      <h1 className="payTitle">Personal Information</h1>
      <label>Name and Surname</label>
      <input
        type="text"
        placeholder="John Doe"
        className="payInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Phone Number</label>
      <input
        type="text"
        placeholder="+1 234 5678"
        className="payInput"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label>Address</label>
      <input
        type="text"
        placeholder="Elton St 21 22-145"
        className="payInput"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <h1 className="payTitle">Card Information</h1>
      <div className="cardIcons">
        <img src="./img/visa.png" width="40" alt="" className="cardIcon" />
        <img src="./img/master.png" alt="" width="40" className="cardIcon" />
      </div>
      <input
        type="password"
        className="payInput"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <div className="cardInfo">
        <input
          type="text"
          placeholder="mm"
          className="payInput sm"
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value)}
        />
        <input
          type="text"
          placeholder="yyyy"
          className="payInput sm"
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="cvv"
          className="payInput sm"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
      <button className="payButton" onClick={handleCheckout}>
        Checkout!
      </button>
      <span className="close" onClick={closePaymentDialog}>
        X
      </span>
    </div>
  );
};

export default PaymentDialog;
