import { useEffect } from 'react';
import Router from 'next/router';

const CheckAuth = (props) => {
	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (!token) {
			Router.push({
				pathname: '/login',
			});
		}
	}, [])

	return (
		<></>
	)
}


export default CheckAuth;