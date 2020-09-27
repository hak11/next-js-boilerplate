import axios from 'axios';

export function fetchCompany() {
	const token = localStorage.getItem('token');

	return async function (dispatch) {
		try {
			const url = `${process.env.API_URL}/contact/api/contact/0/`
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `jwt ${token}`,
				'X-API-Key': process.env.API_KEY
			};

			const response = await axios.get(url, { headers });
			if (response.status === 200) {
				dispatch({
					type: 'FETCH_COMPANIES',
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