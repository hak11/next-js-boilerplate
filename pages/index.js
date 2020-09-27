import React from 'react';
import AppBarComponent from '../components/layout/AppBarComponent';
import AuthRequired from '../components/AuthRequired';
import AlertComponent from '../components/AlertComponent';
import { Typography, Box } from '@material-ui/core';

function Home() {
	return (
		<div className="app">
			<AuthRequired />
			<AppBarComponent />
			<AlertComponent />
			<Box m={4}>
				<Typography variant="h3" align="center">
						Dashboard
				</Typography>
			</Box>
		</div>
	)
}

export default Home
