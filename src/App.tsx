import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import Header from "components/header";
import Footer from "components/footer";
import SignIn from "pages/Login/SignIn";
import SignUp from "pages/Login/SignUp";
import Oauth from "pages/Oauth";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user/oauth2/kakao" element={<Oauth />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
