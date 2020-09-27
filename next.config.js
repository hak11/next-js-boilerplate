module.exports = {
	env: {
		BASE_URL: process.env.BASE_URL || 'http://localhost:8000',
		API_URL: process.env.API_URL || 'http://localhost:8070',
		AUTHORIZE_URL: process.env.AUTHORIZE_URL || 'http://localhost:8060',
		AUTH_API_URL: process.env.AUTH_API_URL || 'http://localhost:8050',
		API_KEY: process.env.API_KEY || '123456',
		NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '123456'
	}
}