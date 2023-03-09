import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { LandingLayout, Layout } from "./components";
import { About, DetailArticle, Home, Login, Register, Character } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<LandingLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="character" element={<Character />} />
            <Route path="articles">
              <Route path="detail/:id" element={<DetailArticle />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
