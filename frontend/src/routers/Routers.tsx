import { Routes, Route } from "react-router-dom";
import App from "../pages/App";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  )
}

export default Routers
