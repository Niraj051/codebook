import {Routes,Route, } from "react-router-dom";
import { HomePage,ProductList,ProductDetail,Login,Register,Dashboard,CartPage } from "../pages";



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
            <Route path="cart" element={<CartPage />} />
        </Routes>
    </main>
  )
}
