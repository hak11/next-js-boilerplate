import { useEffect, useRef } from 'react';
import { 
	AppBar, Toolbar, Typography,
	MenuItem, Grow, ClickAwayListener, 
	MenuList, Button, Popper, Paper, Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userAction';
import { fetchCompany } from '../../redux/actions/companyAction';
import { setMenuNavigation } from '../../redux/actions/generalAction';
import { Done, Person } from '@material-ui/icons';
import LisTrainingProvider from '../LisTrainingProvider';

import Link from 'next/link';
import { bindActionCreators } from 'redux';


const useStyles = makeStyles(() => ({
	grow: {
		flexGrow: 1,
	},
	setPointer: {
		cursor: 'pointer'
	}
}));

const AppBarComponent = (props) => {
	const classes = useStyles();
	const anchorRef = useRef(null);

	const handleToggle = () => {
		props.setMenuNavigation(true)
	};

	const handleClose = (event) => {
		props.setMenuNavigation(false)
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			props.setMenuNavigation(false)
		}
	}

	const prevOpen = useRef(props.general.openMenuNavigation);

	const nameOfUser = props.user.data.first_name ? props.user.data.first_name +' '+props.user.data.last_name : '';

	const _menuNavigation = (
		<Popper open={props.general.openMenuNavigation} anchorEl={anchorRef.current} transition disablePortal>
			{({ TransitionProps, placement }) => (
				<Grow
					{...TransitionProps}
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				>
					<Paper>
						<ClickAwayListener onClickAway={handleClose}>
							<MenuList autoFocusItem={props.general.openMenuNavigation} id="menu-list-grow" onKeyDown={handleListKeyDown}>
								<LisTrainingProvider list={props.company.list} activeId={props.general.activeCompany} />
								<Divider />
								<Link href="/logout">
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</Link>
							</MenuList>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	);

	useEffect(() => {
		if (prevOpen.current === true && props.general.openMenuNavigation === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = props.general.openMenuNavigation;
	}, [props.general.openMenuNavigation]);

	useEffect(() => {
		try {
			props.fetchUser();
			props.fetchCompany()
		} catch (err) {
			// do..
		}
	}, [])

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Link href="/">
						<Typography variant="h6" className={classes.setPointer} noWrap>
							Logo
						</Typography>
					</Link>
					<div className={classes.grow} />
					{
						nameOfUser && 
							<Button
								ref={anchorRef}
								aria-controls={open ? 'menu-list-grow' : undefined}
								aria-haspopup="true"
								color="inherit"
								startIcon={<Person />}
								onClick={handleToggle}
							> {nameOfUser} </Button>
					}
				</Toolbar>
			</AppBar>
			{_menuNavigation}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		company: state.companyReducer,
		user: state.userReducer,
		general: state.generalReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: bindActionCreators(fetchUser, dispatch),
		fetchCompany: bindActionCreators(fetchCompany, dispatch),
		setMenuNavigation: bindActionCreators(setMenuNavigation, dispatch)
	}
};

const ConnectedAppBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppBarComponent);


export default ConnectedAppBar;