import React, { FC, useReducer } from 'react'
import { CartContext, CartProps } from './CartContext'
import { ICartProduct } from '../../interfaces'
import { cartReducer } from './CartReducer';

export interface CartState  {
	cart: ICartProduct[];

}

const initState : CartState = {
	cart:  []
}


const CartProvider : FC = ({children}) => {

	const [state, dispatch] = useReducer(cartReducer, initState, )
  return (
	<CartContext.Provider value={{...state}}>
		{children}
	</CartContext.Provider>
  )
}

export default CartProvider