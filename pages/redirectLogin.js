import { useEffect } from "react";
import Router, { useRouter } from 'next/router'

function RedirectLogin() {
	const router = useRouter();
	const { auth_token, auth_success } = router.query;

	useEffect(() => {
		if (auth_token && auth_success) {
			window.localStorage.setItem('token', auth_token);
			Router.push({
				pathname: '/',
			});
		}
	})

	return (
		<div>
			<h3>Redirect.....</h3>
		</div>
	);
}

export default RedirectLogin;