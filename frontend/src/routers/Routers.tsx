import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Update from "../pages/Update";
import Create from "../pages/Create";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/client" element={<Create />} />
      </Routes>
    </>
  )
}

export default Routers
