import {Routes,Route, } from "react-router-dom";
import { HomePage,ProductList,ProductDetail,Login,Register,Dashboard,CartPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";


export const AllRoutes = () => {
 
  return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList title="Explore eBooks Collection" />}  />
            <Route path="/products/:id" element={<ProductDetail />}  />
            <Route path="login" element={<Login />}  />
            <Route path="register" element={<Register />}  />
            <Route path="dashboard" element={<Dashboard />}  />
            <Route path="cart" element={<ProtectedRoute> <CartPage /> </ProtectedRoute>} />
        </Routes>
    </main>
  )
}
