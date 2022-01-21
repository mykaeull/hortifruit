import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useRef,
  useEffect,
} from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartItem {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
}

interface CartContextData {
  cartList: CartList[];
  addCartItem: (cartItem: CartItem) => void;
  removeCartItem: (cartItemId: number) => void;
  addQtdCartItem: (cartItemId: number) => void;
  removeQtdCartItem: (cartItemId: number) => void;
  closeCart: () => void;
}

interface CartList {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  qtd: number;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<CartList[]>(() => {
    const storagedCart = localStorage.getItem("@HortiFruti:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const prevCartRef = useRef<CartList[]>();

  useEffect(() => {
    prevCartRef.current = cartList;
  });

  const cartPreviousValue = prevCartRef.current ?? cartList;

  useEffect(() => {
    if (cartPreviousValue !== cartList) {
      localStorage.setItem("@HortiFruti:cart", JSON.stringify(cartList));
    }
  }, [cartList, cartPreviousValue]);

  function addCartItem(cartItem: CartItem) {
    if (
      cartList.length === 0 ||
      cartList.find((e) => e.id === cartItem.id) === undefined
    ) {
      setCartList([...cartList, { ...cartItem, qtd: 1 }]);
    } else {
      const cartItemFind = cartList.find((e) => e.id === cartItem.id);
      if (cartItemFind !== undefined) {
        // const cartItemQtd = { ...cartItemFind, qtd: cartItemFind.qtd + 1 };
        setCartList(
          cartList.map((e) => {
            if (e.id === cartItemFind.id) {
              return { ...e, qtd: e.qtd + 1 };
            } else {
              return e;
            }
          })
        );
      }
    }
  }

  function removeCartItem(cartItemId: number) {
    setCartList(cartList.filter((e) => e.id !== cartItemId));
  }

  function addQtdCartItem(cartItemId: number) {
    setCartList(
      cartList.map((e) => {
        if (e.id === cartItemId) {
          return { ...e, qtd: e.qtd + 1 };
        } else {
          return e;
        }
      })
    );
  }

  function removeQtdCartItem(cartItemId: number) {
    setCartList(
      cartList.map((e) => {
        if (e.id === cartItemId) {
          return { ...e, qtd: e.qtd - 1 };
        } else {
          return e;
        }
      })
    );
  }

  function closeCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        addQtdCartItem,
        removeQtdCartItem,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
