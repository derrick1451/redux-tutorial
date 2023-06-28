import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import CartContainer from "./components/cartContainer";
import { calculateTotals} from "./features/cart/catSlice";
import { useEffect } from "react";
import Modal from "./components/modal";
function App() {
  const { cartItems } = useSelector((state)=>state.cart)
  const { isOpen } = useSelector((state)=>state.modal)
  let dispatch = useDispatch()
  
 useEffect(()=>{
  dispatch(calculateTotals());
 },[cartItems])
  return (
    <main>
     {isOpen && <Modal/>}
    <NavBar/>
    <CartContainer/>

  </main>
  )
}
export default App;
