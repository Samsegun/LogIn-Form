import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Form from "./Components/Form";
import SignInForm from "./Components/SignInForm";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route path="/sign-in" element={<SignInForm />} />

            <Route path="/Form" element={<Form />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
