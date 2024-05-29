import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate("/test");
  };

  return (
    <div>
      <h1>Добро пожаловать в систему тестирования</h1>
      <Button variant="contained" color="primary" onClick={startTest}>
        Начать тест
      </Button>
    </div>
  );
};

export default HomePage;
