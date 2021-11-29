import React, {Component} from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            groceryInput: "",
            groceryItems: [
                {id:1, title: "Avocado"},
                {id:2, title: "Zucchini"},
                {id:3, title: "Tomato"},
                {id:4, title: "Aubergine"},
                {id:5, title: "Tofu"},
            ],
            shoppingListItems: []
        }
        this.emptyCart = this.emptyCart.bind(this)
        this.emptyList = this.emptyList.bind(this)
        this.addToList = this.addToList.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

// functie voor toevoegen nieuwe item in groceryList via input (submit)

    addToList (newInput) {
        const newItem = { 
            id: this.state.groceryItems.length +1, 
            title: newInput, 
            amount:1 }
        this.setState ({groceryItems: this.state.groceryItems.concat(newItem)})
    }

// functie waarbij de cart/lijst wordt geleegd wanneer je op de knop drukt:
    emptyList(){
        this.setState({
            groceryItems: []
        })
    }

    emptyCart(){
        this.setState({
            shoppingListItems: []
        })
    }

//////////handleClik event: addToCart. Wanneer item aangeklikt, komt het in de winkelwagen

addNewShoppingListItem (itemTitle){
    console.log("clicked item")

    const newShoppingItem = { 
        id: this.state.shoppingListItems.length +1,
        title: itemTitle,
        amount: 1
    }

    this.setState (prevState => {
        const newShoppingList = prevState.shoppingListItems.concat(newShoppingItem)
        return{
            shoppingListItems: newShoppingList
        }
    })
}

addAmountToItem (itemTitle) {
    console.log("clicked Amount++")

    const shoppingList = [...this.state.shoppingListItems]
    const updatedShoppingList = shoppingList.map(shoppingItem =>{
        if (shoppingItem.title === itemTitle){
            shoppingItem.amount++
        }
        return shoppingItem
    })
    this.setState({shoppingListItems: updatedShoppingList})
}

addToCart (event) {
    const clickedItem = event.target.getAttribute("value")
    const currentShoppingList = this.state.shoppingListItems
    const shoppingListItem = currentShoppingList.filter (
        item => item.title === clickedItem
    )
    shoppingListItem.length === 0
    ? this.addNewShoppingListItem(clickedItem)
    : this.addAmountToItem(clickedItem)
}


/////////////////////////////////////////////////////////////////////
    render(){
        return(
            <div className="container">
                <GroceryList 
                    items = {this.state.groceryItems}
                    addToList = {this.addToList}
                    emptyList = {this.emptyList}
                    addToCart = {this.addToCart}

                />
                <ShoppingCart 
                    items = {this.state.shoppingListItems}
                    emptyCart = {this.emptyCart}
                />
            </div>
        )
    }
    
}
export default Container