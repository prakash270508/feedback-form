import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./components/context/feedBackContex";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feed back" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
