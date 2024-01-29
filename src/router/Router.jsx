import { Outlet, Route, Routes, } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import Clients from "../pages/Clients/Clients";
import SettingsPage from "../pages/Settings/SettingsPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import CompanyPage from "../pages/Settings/Comany/CompanyPage";

export default function Router() {
 

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Outlet />}>
        <Route index element={<Orders />} />
      </Route>
      <Route path="/clients" element={<Clients />}/>
      <Route path="/settings" element={<SettingsPage />}/>
      <Route path="/settings-company" element={<CompanyPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
      

    </Routes>
  );
}
