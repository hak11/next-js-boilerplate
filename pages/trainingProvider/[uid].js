import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import AppBarComponent from '../../components/layout/AppBarComponent';
import { 
	Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Container
} from '@material-ui/core';
import { connect } from 'react-redux';
import { setActiveCompany, setMenuNavigation } from '../../redux/actions/generalAction';
import { fetchCourse } from '../../redux/actions/courseActions';
import AuthRequired from '../../components/AuthRequired';
import AlertComponent from '../../components/AlertComponent';
import AvatarGroupComponent from '../../components/AvatarGroupComponent';

function TrainingProvider(props) {
	const router = useRouter()
	const [currentCompanyId, setCurrentCompanyId] = useState();
	let uid = router.query.uid;

	useEffect(() => {
		if (uid) {
			uid = parseInt(uid, 10);
			props.fetchCourse(uid);
			props.setActiveCompany(uid, 10);
			props.setMenuNavigation(false);
		}
	}, [currentCompanyId])

	useEffect(() => {
		return (
			() => {
				props.setActiveCompany(0, 10);
			}
		)
	}, [])


	if (currentCompanyId !== uid) {
		setCurrentCompanyId(router.query.uid)
	}

	let _rowTable = (
		<TableRow>
			<TableCell align="center" colSpan={6}> { 
				props.course.loadingFetch ? 'Loading...' : 'Data Not Found...'
			} </TableCell>
		</TableRow>
	);

	if (props.course.list.length > 0) {
		_rowTable = props.course.list.map((item) => {
			return (
				<TableRow key={item.uid}>
					<TableCell>
						{
							item.images[0] && <img src={item.images[0].image_s_url} height={50}></img>
						}
					</TableCell>
					<TableCell>{item.name}</TableCell>
					<TableCell align="right">{item.visibility}</TableCell>
					<TableCell align="right">{item.ready_to_sell ? 'Ready To Sell' : 'Incomplete'}</TableCell>
					<TableCell align="right">{item.training_days}</TableCell>
					<TableCell>
						<AvatarGroupComponent item={item.trainers} max={4} />
					</TableCell>
				</TableRow>
			)
		})
	}

	return (
		<div className="app">
			<AuthRequired />
			<AppBarComponent />
			<Container>
				<Box m={4}>
					<TableContainer>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell>Name</TableCell>
									<TableCell align="right">Visibility</TableCell>
									<TableCell align="right">Status</TableCell>
									<TableCell align="right">Price List</TableCell>
									<TableCell>Trainers</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{_rowTable}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Container>
			<AlertComponent />
		</div>
	)
}

const mapStateToProps = function (state) {
	return {
		course: state.courseReducer,
	}
}

const mapDispatchToProps = {
	setActiveCompany,
	setMenuNavigation,
	fetchCourse
};

const ConnectedTrainingProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrainingProvider);


export default ConnectedTrainingProvider;