import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import Chatbot from "./components/Chatbot/chatbot";
import { Toaster } from "react-hot-toast";




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false); 
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
   

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar setIsOpen={setIsOpen}/>
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
        {isOpen ? (
          <Chatbot
            setIsOpen={setIsOpen}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        ) : (
          <button
            className="open-chatbot"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Have Doubts? Click here!
          </button>
        )}
      </Router>
    </div>
  );
}

export default App;
