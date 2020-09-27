const FIRST_INITIAL = {
	total: 0,
	list: [],
	loadingFetch: false
};

const courseReducer = (state = FIRST_INITIAL, action) => {
	switch (action.type) {
		case "FETCH_COURSE":
			if (action.data.total > 0) {
				state = {
					...state,
					list: action.data.courses,
					total: action.data.total
				};
			}
			break;
		case "REMOVE_LIST_COURSE":
			state = FIRST_INITIAL;
			break;
		case "SET_FETCH_LOADING":
			state = {
				...state,
				loadingFetch: action.data
			};
			break;
	}

	return state;
};

export default courseReducer;