import { useState } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { closeErrorMessage } from '../redux/actions/generalAction';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertComponent = (props) => {

	const handleClose = () => {
		props.closeErrorMessage()
	};

	return (
		<>
			<Snackbar open={props.general.errorMessage.show} autoHideDuration={10000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					{props.general.errorMessage.message}	
				</Alert>
			</Snackbar>
		</>
	)
}


const mapStateToProps = function (state) {
	return {
		general: state.generalReducer,
	}
}

const mapDispatchToProps = {
	closeErrorMessage,
};

const ConnectedAlertComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(AlertComponent);




export default ConnectedAlertComponent;