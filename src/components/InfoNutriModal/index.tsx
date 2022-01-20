import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface Fruit {
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

interface NewTransactionModalProps {
  isInfoNutriModalOpen: boolean;
  handleCloseInfoNutriModal: () => void;
  infoNutriFruit: Fruit | undefined;
}

export function InfoNutriModal({
  isInfoNutriModalOpen,
  handleCloseInfoNutriModal,
  infoNutriFruit,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isInfoNutriModalOpen}
      onRequestClose={handleCloseInfoNutriModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseInfoNutriModal}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Informações Nutricionais</h2>
        <p>{`Calorias: ${infoNutriFruit?.nutritions?.calories}`}</p>
        <p>{`Carboidrato: ${infoNutriFruit?.nutritions?.carbohydrates}`}</p>
        <p>{`Gordura: ${infoNutriFruit?.nutritions?.fat}`}</p>
        <p>{`Proteína: ${infoNutriFruit?.nutritions?.protein}`}</p>
        <p>{`Açúcar: ${infoNutriFruit?.nutritions?.sugar}`}</p>
      </Container>
    </Modal>
  );
}
