
import {
	MenuItem, Button
} from '@material-ui/core';
import Link from 'next/link';
import { Done } from '@material-ui/icons';

const ListTrainingProvider = (props) => {
	let _listTrainingProvider = (
		<MenuItem>
			<Button variant="outlined" size="small" color="secondary">
				Create Training
			</Button>
		</MenuItem>
	)

	if (props.list.length > 0) {
		_listTrainingProvider = props.list.map((item, key) => {
			return (
				<Link key={key} href="/trainingProvider/[uid]" as={`/trainingProvider/${item.uid}`} color="inherit" style={{ textDecoration: 'none' }}>
					<MenuItem>
						{props.activeId === item.uid ? <Done /> : ''} {item.name}
					</MenuItem>
				</Link>
			)
		})
	}

	return (
		<div>
			{ _listTrainingProvider }
		</div>
	)

}

export default ListTrainingProvider;