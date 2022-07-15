import { cartAddItem, cartRemoveItem } from "../../reducers/Cart/CartSlice";
import axios from "axios";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(
      cartAddItem({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      })
    );
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
export const removeFromCart = (id, qty) => {
  return async (dispatch, getState) => {
    dispatch(cartRemoveItem(id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
