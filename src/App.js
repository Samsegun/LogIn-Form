import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Form from "./Components/Form";
import SignInForm from "./Components/SignInForm";
import UpdateProfile from "./Components/UpdateProfile";
import ForgotPassword from "./Components/ForgotPassword";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
// import UpdateProfilePrivate from "./Components/UpdateProfilePrivate";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/updateProfile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            />

            <Route path="/sign-in" element={<SignInForm />} />

            <Route path="/Form" element={<Form />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
