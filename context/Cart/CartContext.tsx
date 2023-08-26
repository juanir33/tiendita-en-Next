import { createContext } from "react";
import { ICartProduct } from "../../interfaces";


export interface CartProps{
	cart: ICartProduct[];
}


export const CartContext = createContext({} as CartProps)