import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { PostList, Login, Signup } from "../pages";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PostList />} />
        </Routes>
      </BrowserRouter>
      <>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<PostList />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </>
    </React.Fragment>
  );
}
export default App;
