import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const UpdateProfilePrivate = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/sign-in" />;
};

export default UpdateProfilePrivate;
