import React from 'react'
import banner from "../assets/bg5.jpg"
import {Link} from 'react-router-dom'
import '../Styles/Home.css'
const Home = () => {
  return (
   <div className="home" style={{backgroundImage:`url(${banner})`}}>
    <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <Link>
        <button>Order Now</button>
        </Link>
    </div>
   </div>
  )
}

export default Home