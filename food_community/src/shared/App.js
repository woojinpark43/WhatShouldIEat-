import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { PostList, Login, Signup } from "../pages";
import Header from "./Header";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <>
        <Header></Header>
        <BrowserRouter history={history}>
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
