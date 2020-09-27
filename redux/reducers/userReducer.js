const FIRST_INITIAL = {
	data: {},
	token: ''
};

const userReducer = (state = FIRST_INITIAL, action) => {
	switch (action.type) {
		case "FETCH_INFO_USER":
			state = {
				...state,
				data: action.data
			};
			break;
		case "REMOVE_INFO_USER":
			state = FIRST_INITIAL;
			break;
	}

	return state;
};

export default userReducer;