import { FC, useReducer } from "react";
import { UiContex } from "./UiContex";
import { uiReducer } from "./uiReducer";

export interface UiState {
	isMenuOpen: boolean;
}

const INITIAL_STATE: UiState = {
	isMenuOpen: false,
};

const UiProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

	const toggleMenu = ()=>{
		
		
		dispatch({type: '[UI] - ToggleMenu'})
	}

	return (
		<UiContex.Provider
			value={{
				...state,
				toggleMenu
			}}
			
		>
			{children}
		</UiContex.Provider>
	);
};

export default UiProvider;
