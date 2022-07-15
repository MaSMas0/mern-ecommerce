import {
  productListRequest,
  productListSuccess,
  productListFail,
} from "../../reducers/Product/ProductListSlice";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productListRequest());
    const { data } = await axios.get("/api/products");
    dispatch(productListSuccess(data));
  } catch (error) {
    dispatch(
      productListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
