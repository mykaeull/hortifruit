import { Container, Content } from "./styles";
import hortifruit from "../../assets/hortifruit.png";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useCart } from "../../context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function CartList() {
  const {
    cartList,
    removeCartItem,
    addQtdCartItem,
    removeQtdCartItem,
    closeCart,
  } = useCart();

  return (
    <Container>
      <Content>
        {cartList.length === 0 ? (
          <div className="vazio">Carrinho vazio</div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th aria-label="product image" />
                  <th>Produto</th>
                  <th>QTD</th>
                  <th aria-label="delete icon" />
                </tr>
              </thead>
              <tbody>
                {cartList.map((cartItem) => {
                  return (
                    <tr key={cartItem.id}>
                      <td>
                        <img
                          src={hortifruit}
                          alt="Frutas"
                          width={120}
                          height={120}
                        />
                      </td>
                      <td className="product">
                        <p>{cartItem.name}</p>
                        <p>{cartItem.family}</p>
                        <p>{cartItem.genus}</p>
                        <p>{cartItem.order}</p>
                      </td>
                      <td>
                        <div>
                          <button
                            type="button"
                            disabled={cartItem.qtd <= 1}
                            onClick={() => removeQtdCartItem(cartItem.id)}
                          >
                            <MdRemoveCircleOutline size={20} />
                          </button>
                          <input type="text" readOnly value={cartItem.qtd} />
                          <button
                            type="button"
                            onClick={() => addQtdCartItem(cartItem.id)}
                          >
                            <MdAddCircleOutline size={20} />
                          </button>
                        </div>
                      </td>
                      <td className="delete-icon">
                        {
                          <MdDelete
                            size={20}
                            onClick={() => {
                              removeCartItem(cartItem.id);
                              toast.success("Item removido do carrinho!");
                            }}
                          />
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <footer>
              <Link to="/">
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    toast.success("Compra realizada com sucesso!");
                  }}
                >
                  Finalizar pedido
                </button>
              </Link>
            </footer>
          </>
        )}
      </Content>
    </Container>
  );
}
