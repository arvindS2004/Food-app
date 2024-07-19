import React from 'react'
import './Explore.css'
import { menu_list } from '../assets/assets'
const Explore = ({cat,setcat}) => {
 
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our Menu</h2>
      <p className='explore-menutxt' style={{color:'black'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos tenetur nam rerum nobis dicta hic ea cumque, illum, labore libero unde beatae provident ipsa iure esse cupiditate temporibus. Distinctio, sint!</p>
      <div className="explore-menulst">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setcat(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menulstit">
              <img className={cat===item.menu_name?"active":""} src={item.menu_image} alt=""/>
              <p style={{color:'grey'}}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Explore