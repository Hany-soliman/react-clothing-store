import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/buy-discount-shoe-svgrepo-com.svg";


const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const TopLogoContainer = styled.div`
  width: 163px;
  display: inline-block;
  position: relative;
  margin-top: -24px;
  padding: 24px 0;
`

const LogoContainer = styled(Link)`
  position: absolute;
  left: 25px;
`
const LogoC = styled(Logo)`
  max-width: 75px;
  max-height: 75px;
`

const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavLinks = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`


export {
    NavigationContainer,
    TopLogoContainer,
    LogoContainer,
    LogoC,
    NavLinksContainer,
    NavLinks
}