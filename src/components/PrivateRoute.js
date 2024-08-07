// import React from "react";
// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";

//  import { decodeString } from "../utils/encoding";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const clientKey = Cookies.get("clientKey");
//   const expirationTime = Cookies.get("expirationTime");
//   const isLoggedIn = clientKey && new Date(expirationTime) > new Date();

//   return isLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
// };

// export default PrivateRoute;
 
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const clientKey = Cookies.get("clientKey");
  const expirationTime = Cookies.get("expirationTime");
  const isLoggedIn = clientKey && new Date(expirationTime) > new Date();

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
