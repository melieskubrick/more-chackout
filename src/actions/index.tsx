export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const FINALIZE = 'FINALIZE';

export function GetNumberCart() {
  return {
    type: 'GET_NUMBER_CART',
  };
}

export function FinalizeCart() {
  return {
    type: 'FINALIZE',
  };
}

export function AddCart(payload: IProduct) {
  return {
    type: 'ADD_CART',
    payload,
  };
}

export function DeleteCart(payload: number) {
  return {
    type: 'DELETE_CART',
    payload,
  };
}

export function IncreaseQuantity(payload: number) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  };
}

export function DecreaseQuantity(payload: number) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  };
}
