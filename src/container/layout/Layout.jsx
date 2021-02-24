import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
const Layout = ({ children }) => {
  let [displayNote, setDisplayNote] = useState("hidden");
  const changeDisplayNote = () => {
    setDisplayNote(displayNote == "block" ? "hidden" : "block");
  };
  return (
    <div class="flex flex-col h-screen">
      <Header changeDisplayNote={changeDisplayNote} displayNote={displayNote} />
      <div class="my-12">{children}</div>
      <Footer changeDisplayNote={changeDisplayNote} />
    </div>
  );
};

export default Layout;
