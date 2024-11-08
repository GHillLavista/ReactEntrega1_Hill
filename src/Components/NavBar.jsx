import Logo from "./Logo"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div>
        <Logo/>
        <ul>
            <li><a href="#">Jugos</a></li>
            <li><a href="#">Licuados</a></li>
            <li><a href="#">Sandwiches</a></li>    
        </ul>

        <CartWidget/>
    </div>
  )
}

export default NavBar