import { useEffect } from "react";
import Router from 'next/router'

function Logout() {

	useEffect(() => {
		window.localStorage.removeItem('token');
		Router.push({
			pathname: '/login',
		});
	})

	return (
		<>
		</>
	);
}

export default Logout;