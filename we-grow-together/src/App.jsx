import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;