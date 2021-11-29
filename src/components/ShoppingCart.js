import React from "react"
import List from "./List"

function ShoppingCart ({items, emptyCart}) {
    return(
        <div className="shoppingCartList">
            <h2> Shopping Cart: </h2>
            
            <List 
                items = {items} 
                readonly = {true}
                // deleteItem = {deleteItem}
            />
            
            <button 
                onClick={emptyCart}> Empty Cart 
            </button>
        </div>
    )
}

export default ShoppingCart