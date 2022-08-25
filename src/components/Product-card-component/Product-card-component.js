import {useContext} from "react";
import Button from "../button-component/Button.component";
import {CartContext} from "../../context/Cart-dorpdown.context";
import "./product-card-styles"
import {
    ProductCardContainer,
    ProductCardFooter,
    ProductName,
    ProductPrice
} from "./product-card-styles";

const ProductCard = ({product})=>{
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = ()=> addItemToCart(product)

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <ProductCardFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </ProductCardFooter>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}


export default ProductCard