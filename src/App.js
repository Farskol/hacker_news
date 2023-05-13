import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import PageOfNews from "./components/PageOfNews";
import "./css/index.css";

function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<News />}/>
              <Route path="/item/:id" element={<PageOfNews />}/>
          </Routes>
      </>
  );
}

export default App;
