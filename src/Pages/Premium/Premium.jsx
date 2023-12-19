import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./premium.css";
import free from "../../assets/free.png";
import silver from "../../assets/silver.jpg";
import gold from "../../assets/gold.png";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const Premium = () => {
  const handleClick = () => {
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="premium">
        <div>
          <Card
            style={{ width: "10rem", textAlign: "center", padding: "100px" }}
          >
            <Card.Img variant="top" src={free} />
            <Card.Body>
              <Card.Title>
                <b>FREE</b>
              </Card.Title>
              <Card.Text>
                <h3>Free</h3>
                Ask 1 Question per day
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
                Free
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "10rem", textAlign: "center", padding: "100px" }}
          >
            <Card.Img variant="top" src={silver} />
            <Card.Body>
              <Card.Title>
                <b>SILVER</b>
              </Card.Title>
              <Card.Text>
                <h3>Rs. 500/month</h3>
                <br />
                Ask 5 Questions per day
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
                Buy Silver
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{ width: "10rem", textAlign: "center", padding: "100px" }}
          >
            <Card.Img variant="top" src={gold} />
            <Card.Body>
              <Card.Title>
                <b>GOLD</b>
              </Card.Title>
              <Card.Text>
                <h3>Rs. 1000/month</h3>
                <br />
                Ask unlimited questions per day
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
                Buy Gold
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Premium;
