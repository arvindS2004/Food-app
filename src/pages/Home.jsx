import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import Explore from '../components/Explore'
import FoodDis from '../components/FoodDis'
const Home = () => {

  const [cat,setcat] = useState("All");


  return (
    <div>
     <Header/>
     <Explore cat={cat} setcat={setcat}/>
     <FoodDis cat={cat}/>
    </div>
  )
}

export default Home