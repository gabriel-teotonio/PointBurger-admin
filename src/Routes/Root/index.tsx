import { Outlet, useNavigate } from "react-router-dom"
import { Container, Main, Nav, NavMenu } from "./styles"

export const Root = () => {
   const navigate = useNavigate()
   return (
      <Container>
         <Nav>
            <header>
               <p><img src="../src/icons/logo.svg" alt="logo" /></p>
            </header>
            <NavMenu>
               <li onClick={() => navigate("/")}>Burgers</li>
               <li>Pedidos</li>
            </NavMenu>
         </Nav>
         <Main>
            <Outlet />
         </Main>
      </Container>
   )
}