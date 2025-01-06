import {Routes,Route} from "react-router-dom";
import { HomePage,ProductList } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
        </Routes>
    </main>
  )
}
