export function setActiveCompany(uid) {
	return {
		type: 'SET_ACTIVE_COMPANY',
		data: uid
	};
}

export function setMenuNavigation(condition) {
	return {
		type: 'SET_MENU_NAV',
		data: condition
	};
}

export function closeErrorMessage() {
	return {
		type: 'CLOSE_ERROR_MESSAGE',
	};
}