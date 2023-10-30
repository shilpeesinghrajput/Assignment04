
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UiPage from "./Pages/UiPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/uiPage" element={<UiPage />} />
      <Route path="*" element={<UiPage />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
