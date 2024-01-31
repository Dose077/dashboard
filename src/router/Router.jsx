import { Outlet, Route, Routes, } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import SettingsPage from "../pages/Settings/SettingsPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import OrderForm from "../pages/Orders/OrderForm";
import Clients from "../pages/Orders/Clients/Clients";
import ClientsForm from "../pages/Orders/Clients/ClientsForm";
import ReviewsPage from "../pages/Reviews/ReviewsPage";
import BannersPage from "../pages/Reviews/Banners/BannersPage";
import MailingsPage from "../pages/Reviews/Mailings/MailingsPage";
import SharesPage from "../pages/Reviews/Shares/SharesPage";
import RewiewsPage from "../pages/Reviews/Rewiews/RewiewsPage";

export default function Router() {
 

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Outlet />}>
        <Route index element={<Orders />} />
      </Route>
      <Route path="/orders/orders-form" element={<OrderForm />}/>
      <Route path="/clients" element={<Clients />}/>
      <Route path="/clients/clients-form" element={<ClientsForm/>}/>
      <Route path="/settings" element={<SettingsPage />}/>
      <Route path="/reviews" element={<ReviewsPage />}/>
      <Route path="/banners" element={<BannersPage />}/>
      <Route path="/mailings" element={<MailingsPage />}/>
      <Route path="/rewiews" element={<RewiewsPage />}/>
      <Route path="/shares" element={<SharesPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
      

    </Routes>
  );
}
