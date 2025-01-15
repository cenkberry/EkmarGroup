import SliderComp from "@/components/home/slider/Slider";
import About from "@/components/home/about/About";
import Partners from "@/components/home/partners/Partners";
import Offers from "@/components/home/offers/Offers";
import Products from "@/components/home/products/Products";

export default function Page() {
  return (
    <>
      <SliderComp />
      <About />
      <Products />
      <Offers />
      <Partners />
    </>
  );
}
