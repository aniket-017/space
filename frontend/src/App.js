import React from "react";
import { useSelector } from "react-redux";
import MultiStepForm from "./component/MultiStepForm.js";
import Header from "./component/layout/Header.js";
import Register from "./component/Register.js";
import Main from "./component/body/Main.js";
import Table from "./component/body/Table.js";
import Card from "./component/Card.js";
import VenueCard from "./component/VenueCard.js";
import Nav from "./component/body/Nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/body/PrivateRoute.js";
function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={isAuthenticated ? <Card/>: <Register />}/> */}
          <Route path="/" element={<Register />} />
          <Route
            path="/card"
            element={
              <PrivateRoute>
                <Card />
              </PrivateRoute>
            }
          />
           <Route
            path="/main"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          /> 
          {/* <Route path="/" element={<Main />} /> */}

        
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;

{
  /* <MultiStepForm /> */
}
{
  /* <Main /> */
}
{
  /* <Table/> */
}
{
  /* <Nav /> */
}
{
  /* // <Register /> */
}

{
  /* <Card /> */
}
{
  /* <VenueCard /> */
}
