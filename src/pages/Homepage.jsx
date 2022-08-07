import React from 'react'
import Nav from '../sections/Nav/Nav'
import CategoriesNav from '../sections/Categories-nav/CategoriesNav'
import Details from '../sections/Details/Details'
import Model from '../sections/Model/Model'
import Products from '../sections/Products/Products'
import Footer from '../sections/Footer/Footer'
export default function Homepage() {
  return (
    <>
    <Nav/>
    <CategoriesNav/>
    <Details/>
    <Model/>
    <Products/>
    <Footer/>
    </>
  )
}
