import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={localStorage.getItem('user') ? '/home' : '/login'} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
