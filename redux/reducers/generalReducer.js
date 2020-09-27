const FIRST_INITIAL = {
	activeCompany: 0,
	openMenuNavigation: false,
	errorMessage: {
		show: false,
		message: ''
	}
};

 const generalRducer = (state = FIRST_INITIAL, action) => {
	switch (action.type) {
		case "SET_ACTIVE_COMPANY":
			state = {
				...state,
				activeCompany: action.data
			};
			break;
		case "SET_MENU_NAV":
			state = {
				...state,
				openMenuNavigation: action.data
			};
			break;
		case "SHOW_ERROR_MESSAGE":
			state = {
				...state,
				errorMessage: {
					show: true,
					message: action.data
				}
			};
			break;
		case "CLOSE_ERROR_MESSAGE":
			state = {
				...state,
				errorMessage: {
					show: false,
					message: ''
				}
			};
			break;
	}

	return state;
};

export default generalRducer;