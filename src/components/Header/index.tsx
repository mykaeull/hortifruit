import { Container, Content } from "./styles";
import { GiFruitBowl } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context";

export function Header() {
  const { cartList } = useCart();

  return (
    <Container>
      <Content>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="element-left">
            <GiFruitBowl color={"#FFF"} size={24} />
            <p>hortifruit</p>
          </div>
        </Link>
        <Link to="/cart">
          <button type="button">
            <div>
              Meu carrinho
              <BsCart4 size={20} />
            </div>
            <p>{`${cartList.length} itens`}</p>
          </button>
        </Link>
      </Content>
    </Container>
  );
}
