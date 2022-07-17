import {orderCreateRequest,orderCreateSuccess,orderCreateFail} from '../../reducers/Order/OrderSlice'
import  axios  from 'axios';
export const createOrder = (order) => async (dispatch,getState) => {
    try {
      dispatch(orderCreateRequest());
      const {userLogin:{ userInfo }} = getState()
      const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${userInfo.token}`
        },
      }
      
      const { data } = await axios.post(`/api/orders`,order,config);
      dispatch(orderCreateSuccess(data));
    } catch (error) {
      dispatch(
        orderCreateFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };