import { ProductCard} from "../../../component/index"
import { useState,useEffect } from "react";
export const FeatureProduct = () => {
  const [products,setProducts]=useState([]);
  
  
  useEffect(()=>{
     async function fetchProduct() {
      const response = await fetch("http://localhost:8000/featured_products");
      const json=await response.json();
      setProducts(json);

      
    }
    fetchProduct();
  },[])
  return (
    <section className="py-20 ">
         <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
         <div className="flex flex-wrap justify-center">
            {products.map((product)=>(
              <ProductCard key={product.id} product={product} />
            ))}
         </div>
    </section>
  )
}
