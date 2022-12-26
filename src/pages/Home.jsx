import React from "react"
import Announcemets from "../components/Announcements"
import Categories from "../components/Categories"
import CustomerCompany from "../components/CustomerCompany"
import CustomerReview from "../components/CustomerReview"
import Description from "../components/Description"
import ExtraFeatures from "../components/ExtraFeatures"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import PopularProducts from "../components/PopularProducts"
import Products from "../components/Products"

 const Home = () => {
  return (
    <div>
    <Announcemets/>
    <Navbar/>
    <Hero/>
    <CustomerCompany/>
    <Features/>
    <PopularProducts/> 
    <ExtraFeatures/>
    <CustomerReview/>
    <Categories/>
     {/* <Products/> */}
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home