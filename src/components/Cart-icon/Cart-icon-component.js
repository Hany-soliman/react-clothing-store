import {useContext} from "react";
import {CartContext} from "../../context/Cart-dorpdown.context";
import "./cart-icon-styles"
import {CartIconContainer, ItemCount, ShoppingIconC} from "./cart-icon-styles";


const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconC />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon

