import axios from 'axios';
export function fetchCourse(companyId, page = 0, limit = 20) {
	return async function (dispatch) {
		try {
			dispatch({
				type: 'SET_FETCH_LOADING',
				data: true
			});
			const url = `${process.env.API_URL}/course/api/course/admin/?index=${page}&size=${limit}`
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `jwt ${token}`,
				'X-API-Key': process.env.API_KEY,
				'X-Company-ID': companyId
			};

			const response = await axios.get(url, { headers });
			if (response.status === 200) {
				dispatch({
					type: 'FETCH_COURSE',
					data: response.data
				});
			} else {
				dispatch({
					type: 'REMOVE_LIST_COURSE',
				});
			}

			dispatch({
				type: 'SET_FETCH_LOADING',
				data: false
			});
		} catch (error) {
			dispatch({
				type: 'REMOVE_LIST_COURSE',
			});

			dispatch({
				type: 'SET_FETCH_LOADING',
				data: false
			});
		}
	};
}