import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../context/Cart-dorpdown.context";
import Button from "../button-component/Button.component";
import CartItem from "../cart-item/Cart-item-component";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";


const CartDorpdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutPage = ()=> navigate('/checkout')
    return (
        <CartDropDownContainer>
                <CartItems>
                {cartItems.length? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
        </CartItems>
            <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDorpdown