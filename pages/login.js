import { useEffect } from "react";
import Router from 'next/router';

function Login() {
	const url = `${process.env.AUTHORIZE_URL}?business=45104640091720&callback=${process.env.BASE_URL}redirectLogin`;
	useEffect(() => {
		Router.push(url);
	})
	return (
		<>
		</>
	);
}

export default Login;