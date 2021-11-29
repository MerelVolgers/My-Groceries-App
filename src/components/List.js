import React from "react"
import ListItem from "./ListItem"

function List ({items, addToCart, readonly}){
    const ListItems = items ? items.map (item => (
        <ListItem
            key = {item.id}
            item = {item}
            readonly = {readonly}
            addToCart = {addToCart}
        />
    )) : " "

    return(
        <div>
            {ListItems}
        </div>
        
    )
}

export default List