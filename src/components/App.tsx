import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";
import { store } from "../store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
