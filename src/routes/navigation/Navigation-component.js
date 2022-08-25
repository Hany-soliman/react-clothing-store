import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {UserContext} from "../../context/User.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/Cart-icon/Cart-icon-component";
import CartDorpdown from "../../components/cart-dropdown/Cart-dorpdown-component";
import {CartContext} from "../../context/Cart-dorpdown.context";
import {
    NavigationContainer,
    TopLogoContainer,
    LogoContainer,
    LogoC,
    NavLinksContainer,
    NavLinks
} from './navigation.styles'


const NavigationComponent = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <TopLogoContainer>
                    <LogoContainer to='/'>
                        <LogoC/>
                    </LogoContainer>
                </TopLogoContainer>
                <NavLinksContainer>
                    <NavLinks to='/shop'>
                        SHOP
                    </NavLinks>
                    {currentUser ? (
                        <NavLinks as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLinks>
                    ) : (
                        <NavLinks to='/auth'>
                            Sign In
                        </NavLinks>
                    )}
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDorpdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationComponent