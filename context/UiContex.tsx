import { createContext } from "react";


interface ContextProps {
	isMenuOpen: boolean,
	toggleMenu: ()=> void,
}


export const UiContex = createContext({} as ContextProps);
