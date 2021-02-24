import { Router } from "next/router";

const checkLogin = (e) => {
  e.target();
};
const login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-tomato via-coral to-yellow-400 text-white">
      <p>Welcome back, my dear :3 </p>
      <input type="password" placeholder="Type our password" />
    </div>
  );
};
