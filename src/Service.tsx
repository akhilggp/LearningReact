import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";

function Service() {
  const [isLogin, setIsLogin] = useState(false);

  const clickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login onToggle={clickHandler} />
      ) : (
        <Register onToggle={clickHandler} />
      )}
    </div>
  );
}
export default Service;
