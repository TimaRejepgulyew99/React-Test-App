import { Link } from "react-router-dom";
import CustomButton from "../../UI/CustomButton";

export default function Menu() {
  return (
    <nav className="menu-container">
      <Link to="/posts">Все посты</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
}
