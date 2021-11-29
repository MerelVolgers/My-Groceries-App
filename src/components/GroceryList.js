import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList ({items, addToList, emptyList, addToCart}){

    return(
        <div className="groceryList"> 
            <h2> Grocery List: </h2>

            <InputField 
                onSubmit = {addToList} />

            <List 
                items = {items}
                addToCart = {addToCart}
            />

            <button onClick={emptyList}> Empty List </button>
        </div>
    )
}
export default GroceryList