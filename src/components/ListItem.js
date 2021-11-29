import React from "react"

function ListItem ({addToCart, item, readonly}) {

    return(
        <li
            className = "singleItem" 
            key = {item.id}
            onClick = {addToCart}
            value = {item.title}
        >
            <span className = "itemTitle"> {item.title || ""} </span> 
            <span className = "itemAmount"> {readonly ? `Amount: ${item.amount}` : ""} </span>

        </li>
    )
}

export default ListItem