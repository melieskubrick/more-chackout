import { combineReducers } from 'redux';
import {
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  FINALIZE,
} from '../actions';

const initProduct: IProductState = {
  numberCart: 0,
  carts: [],
  products: [],
};

const product = (
  state = initProduct,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case FINALIZE:
      return {
        numberCart: 0,
        carts: [],
        products: [],
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        carts: state.carts.filter((item) => {
          return item.id != state.carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
};
const MoreShop = combineReducers({
  product: product,
});
export default MoreShop;
