import React from "react";
import Data from "../data/Data";
import MenuItemCard from "../components/MenuItemCard"
import '../Styles/Menu.css'
function Menu(){
    return(
        <div className="menu">
            <div className="menuTitle">
                <h1>Our Menu</h1>
                <div className="menuList">
                    {Data.map((MenuItem, key)=>{
                        return(
                                <MenuItemCard
                                key={key}
                                image={MenuItem.image}
                                name={MenuItem.name}
                                price={MenuItem.price}
                                
                                />
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Menu;