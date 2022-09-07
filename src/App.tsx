import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Toolbar } from "./components/Navigation/Toolbar/Toolbar";
import "../node_modules/table-for-react/dist/tailwind.css";

import { Home } from "./components/Home/Home";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { Login } from "./components/auth/Login";
import { ProtectedRoute } from "./components/auth/PrivateRoutes";
import { Project } from "./components/Projects/Project";
import { Shops } from "./components/Shops/Shops";
import { Shop } from "./components/shop/Shop";
import { Payment } from "./components/Payments/Payment";
import { PrintPreview } from "./components/Print/PrintPreview";
import { Test } from './components/test/Test';
import { HomeSvg } from "./assets/Homesvg";

function App() {
  const query = useAuthUser("user", auth);



  const user = query.data;
  if (query.isLoading) {
    return <div className="w-full h-screen flex-center ">
      <HomeSvg/>
    </div>;
  }

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <BrowserRouter>
        <div className="fixed top-[0px] w-[100%] z-50">
          <Toolbar user={user} />
        </div>
        <div className="w-full h-full mt-16 overflow-y-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute user={user}>
                  <Home user={user} />
                </ProtectedRoute>
              }
            />

            <Route path="/project" element={<Project user={user} />} />

            <Route
              path="/shops"
              element={
                <ProtectedRoute user={user}>
                  <Shops user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/shop"
              element={
                <ProtectedRoute user={user}>
                  <Shop user={user} floor={"ground"} shopId={"G-01"} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payments"
              element={
                <ProtectedRoute user={user}>
                  <Payment user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/print-preview"
              element={<PrintPreview user={user} />}
            />
            {/* @ts-ignore */}
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
