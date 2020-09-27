const FIRST_INITIAL = {
	list: []
};

const companyReducer = (state = FIRST_INITIAL, action) => {
	switch (action.type) {
		case "FETCH_COMPANIES":
			state = {
				...state,
				list: action.data.companies
			};
			break;
		case "REMOVE_LIST_COMPANIES":
			state = FIRST_INITIAL;
			break;
	}

	return state;
};

export default companyReducer;