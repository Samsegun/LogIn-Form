import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/sign-in" />;
};

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/sign-in" />
//         );
//       }}
//     ></Route>
//   );
// };

export default PrivateRoute;
