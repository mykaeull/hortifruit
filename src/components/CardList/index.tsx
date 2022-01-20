import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { api } from "../../services/api";
import hortifruit from "../../assets/hortifruit.png";
import { BsFillBagPlusFill, BsInfoCircle } from "react-icons/bs";
import { toast } from "react-toastify";
import { useCart } from "../../context";
import { InfoNutriModal } from "../InfoNutriModal";

interface Fruits {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions?: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
  };
}

export function CardList() {
  const { addCartItem } = useCart();

  const [fruits, setFruits] = useState<Fruits[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalFruits, setTotalFruits] = useState<Fruits[]>([]);
  const [infoNutriFruit, setInfoNutriFruit] = useState<Fruits>();

  useEffect(() => {
    const responseFruits = async () => {
      const { data } = await api.get("fruit/all");
      setTotalFruits(data);
      setFruits(data.filter((e: Fruits, i: number) => i < 12));
      setLoading(false);
    };
    responseFruits();
    // api.get("fruit/all").then((data) => console.log(data));
  }, []);

  function handleClickShowMore() {
    const arrayFruits = totalFruits.filter(
      (e: Fruits, i: number) => i >= fruits.length && i < fruits.length + 12
    );
    setFruits(fruits.concat(arrayFruits));
  }

  function handleClickShowLess() {
    setFruits(totalFruits.filter((e: Fruits, i: number) => i < 12));
    window.scrollTo(0, 0);
  }

  const [isInfoNutriModalOpen, setIsInfoNutriModalOpen] = useState(false);

  function handleOpenNewTransictionModal(infoNutriFruit: Fruits) {
    setInfoNutriFruit(infoNutriFruit);
    setIsInfoNutriModalOpen(true);
  }

  function handleCloseInfoNutriModal() {
    setIsInfoNutriModalOpen(false);
  }

  return (
    <>
      <Container>
        <Content>
          {loading ? (
            <div>Carregando...</div>
          ) : fruits.length === 0 ? (
            <div>0 itens encontrados</div>
          ) : (
            <>
              <ul>
                {fruits.map((fruit) => {
                  return (
                    <li key={fruit.id}>
                      <img
                        src={hortifruit}
                        alt="Frutas"
                        width={120}
                        height={120}
                      />
                      <p>{fruit.name}</p>
                      <p>{fruit.family}</p>
                      <p>{fruit.genus}</p>
                      <p>{fruit.order}</p>
                      <button
                        type="button"
                        onClick={() => {
                          addCartItem(fruit);
                          toast.success("Item adicionado ao carrinho!");
                        }}
                      >
                        <div data-testid="cart-product-quantity">
                          <BsFillBagPlusFill size={16} color="#FFF" />
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                      </button>
                      <div
                        className="info-nutri"
                        onClick={() => handleOpenNewTransictionModal(fruit)}
                      >
                        <BsInfoCircle />
                        <p className="info-nutri">
                          Ver informações nutricionais
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {fruits.length !== totalFruits.length ? (
                <p onClick={handleClickShowMore}>Ver mais...</p>
              ) : (
                <p onClick={handleClickShowLess}>Voltar pro início</p>
              )}
            </>
          )}
        </Content>
      </Container>
      <InfoNutriModal
        infoNutriFruit={infoNutriFruit}
        isInfoNutriModalOpen={isInfoNutriModalOpen}
        handleCloseInfoNutriModal={handleCloseInfoNutriModal}
      />
    </>
  );
}
