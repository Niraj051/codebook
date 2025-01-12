import { CartList,CartEmpty } from "./../../pages/index";
import { useCart } from "../../Context";

export const CartPage = () => {
  
  const {cartList} =useCart();
 
  return (
    <main>       
    { cartList.length ? (<CartList />) : (<CartEmpty />) }   
  </main>
  )
}
