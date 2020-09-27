
import {
	Avatar
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const AvatarGroupComponent = (props) => {
	const _avatar = props.item.map((trainer) => {
		return (
			<Avatar key={trainer.uid} alt={trainer.first_name} src={trainer.profile_picture_url} />
		)
	})

	return (
		<AvatarGroup max={props.max}>
			{_avatar}
		</AvatarGroup>
	)
}

export default AvatarGroupComponent;