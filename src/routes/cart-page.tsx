import Order from "../components/order";

interface CartPageProps {
  handleUserChange: (userName: string) => void;
}

const CartPage = ({ handleUserChange }: CartPageProps) => (
  <Order isCart handleUserChange={handleUserChange} />
);
export default CartPage;
