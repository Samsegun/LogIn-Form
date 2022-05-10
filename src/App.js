import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Form from "./Components/Form";
import SignInForm from "./Components/SignInForm";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/sign-in" element={<SignInForm />} />

            <Route path="/HomePage" element={<Homepage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
