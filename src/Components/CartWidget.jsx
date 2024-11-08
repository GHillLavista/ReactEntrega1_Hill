import { GrCart } from "react-icons/gr";
import "./NavBar.css"


function CartWidget() {
  return (
    <div className="carrito">
        <GrCart size="45px"/>
        <span className="badge">3</span>
    </div>
  )
}

export default CartWidget