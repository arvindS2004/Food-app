import React, { useContext } from 'react'
import './FoodDis.css'
import { StoreContext } from '../pages/StoreContext'
import Foodit from './Foodit'

const FoodDis = ({cat}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display'>
      <h1>Top Dishes near you</h1>
      <div className="food-displaylst">
        {food_list.map((item,index)=>{
          if(cat = "All" || cat === item.cat){
            return <Foodit key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
          }
        })} 
      </div>
    </div>
  )
}

export default FoodDis
