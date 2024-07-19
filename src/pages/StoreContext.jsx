import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) =>{

    const [cartItem,setCartItem] = useState({});
    const addtoCart = (itemID) =>{
        if(!cartItem[itemID]){
            setCartItem((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }
    }
    const removefromCart = (itemID) =>{
        setCartItem((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider