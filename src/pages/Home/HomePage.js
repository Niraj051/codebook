import { Hero } from "./components/Hero";
import {FeatureProduct} from "./components/FeatureProduct";
import { Testimonial } from "./components/Testimonial";
import { Faq } from "./components/Faq";


export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeatureProduct />
      <Testimonial />
      <Faq />
    </main>
  )
}
