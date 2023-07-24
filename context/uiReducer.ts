import { UiState } from "./UiProvider";

type UiActionType = { type: "[UI] - ToggleMenu" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
	switch (action.type) {
		case "[UI] - ToggleMenu":
			console.log('hilow');
			
			return {
				...state,
				isMenuOpen: !state.isMenuOpen,
			};

		default:
			return state;
	}
};
