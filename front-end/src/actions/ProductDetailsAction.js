import {
  productDetailsFail,
  productDetailsRequest,
  productDetailsSuccess,
} from "../reducers/ProductDetailsSlice";
import axios from "axios";

export const DetailsOfProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(productDetailsRequest());
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(productDetailsSuccess(data));
    } catch (error) {
      dispatch(
        productDetailsFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
};
