import { CartState } from "./CartProvider";
import { ICartProduct } from '../../interfaces/cart';


type CartActionType = { type: "[CART] - AddProduct" , payload:  ICartProduct} |
{ type: "[CART] - LoadCart from Cookie", payload: ICartProduct[] };

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case "[CART] - AddProduct":
			
			
			return {
				...state,
				
			};
		case "[CART] - LoadCart from Cookie":
			
			
			return {
				...state,
				
			};

		default:
			return state;
	}
};
