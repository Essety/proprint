// import React from "react";

// import Header from "../components/Header";
// import Hero from "../components/HeroSlider";
// import ProductSlider from "../components/ProductSlider";
// import CategoryGrid from "../components/CategoryGrid";
// import FeatureSection from "../components/FeatureSection";
// import BannerSection from "../components/BannerSection";
// import BlogSection from "../components/BlogSection";
// import Footer from "../components/Footer";

// import {products} from "../data/products";
// import {categories} from "../data/categories";
// import {features} from "../data/features";
// import {blogs} from "../data/blogs";

// function Home(){

//   return(

//     <div>

//       <Header/>

//       <Hero/>

//       <ProductSlider products={products}/>

//       <CategoryGrid categories={categories}/>

//       <FeatureSection features={features}/>

//       <BannerSection/>

//       <BlogSection blogs={blogs}/>

//       <Footer/>

//     </div>

//   )

// }

// export default Home;

// import React from "react";

// import Hero from "../components/HeroSlider";
// import ProductSlider from "../components/ServicesCarousel";
// import CategoryGrid from "../components/CategoryGrid";
// import FeatureSection from "../components/FeatureSection";
// import BannerSection from "../components/BannerSection";
// import BlogSection from "../components/BlogSection";

// import { categories } from "../data/categories";
// import { features } from "../data/features";
// import { blogs } from "../data/blogs";

// function Home(){

//   return(

//     <div>

//       <Hero/>

//       <ServicesCarousel/>

//       <CategoryGrid categories={categories}/>

//       <FeatureSection features={features}/>

//       <BannerSection/>

//       <BlogSection blogs={blogs}/>

//     </div>

//   )

// }

// export default Home;

// import React from "react";

// import Hero from "../components/HeroSlider";
// import ServicesCarousel from "../components/ServicesCarousel";
// // import CategoryGrid from "../components/CategoryGrid";
// import FeatureSection from "../components/FeatureSection";
// import BannerSection from "../components/BannerSection";
// import BlogSection from "../components/BlogSection";
// import StationeryGrid from "../components/StationeryGrid";
// import SameDayDelivery from "../components/SameDayDelivery";
// import Newsletter from "../components/Newsletter";
// import ProductGallery from "../components/ProductGallery";
// import PrintingInfoSection from "../components/PrintingInfoSection";
// import Footer from "../components/Footer";

// import {categories} from "../data/categories";
// import {features} from "../data/features";
// import {blogs} from "../data/blogs";

// function Home(){

//   return(

//     <div>

//       <Hero/>

//       <ServicesCarousel/>

//       <StationeryGrid/>

//       {/* <CategoryGrid categories={categories}/> */}

//       <FeatureSection features={features}/>

//       <BannerSection/>
      
//       <SameDayDelivery/>

//       <BlogSection blogs={blogs}/>

//       <Newsletter/>

// <ProductGallery/>

// <PrintingInfoSection/>

// <Footer/>

//     </div>

//   )

// }

// export default Home;

import React from "react";

import Hero from "../components/HeroSlider";
import ServicesCarousel from "../components/ServicesCarousel";
import FeatureSection from "../components/FeatureSection";
import BannerSection from "../components/BannerSection";
import BlogSection from "../components/BlogSection";
import StationeryGrid from "../components/StationeryGrid";
import SameDayDelivery from "../components/SameDayDelivery";
import Newsletter from "../components/Newsletter";
import ProductGallery from "../components/ProductGallery";
import PrintingInfoSection from "../components/PrintingInfoSection";

import {features} from "../data/features";
import {blogs} from "../data/blogs";

function Home(){

  return(

    <div>

      <Hero/>

      <ServicesCarousel/>

      <StationeryGrid/>

      <FeatureSection features={features}/>

      <BannerSection/>
      
      <SameDayDelivery/>

      <BlogSection blogs={blogs}/>

      <Newsletter/>

      <ProductGallery/>

      <PrintingInfoSection/>

    </div>

  )

}

export default Home;