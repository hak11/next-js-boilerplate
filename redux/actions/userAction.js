import axios from 'axios';

export const fetchUser = () => {
	return async function (dispatch) {
		try {
			const url = `${process.env.AUTH_API_URL}/token-info/`
			const token = localStorage.getItem('token');
			const response = await axios.post(url, { token });
			if (response.status === 200) {
				dispatch({
					type: 'FETCH_INFO_USER',
					data: response.data
				});
			}
		} catch (error) {
			dispatch({
				type: 'SHOW_ERROR_MESSAGE',
				data: 'Failed to get data (Please Refresh) ...'
			});
		}
	};
}