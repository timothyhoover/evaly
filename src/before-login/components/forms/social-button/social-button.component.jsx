import React from 'react';

import sprite from '../../../../assets/sprite.svg';
import styles from './social-button.module.scss';

const SocialButton = ({ button, ...otherProps }) => {
	const handleStyles = () => {
		if (button === 'google') {
			return styles.google_btn;
		}

		if (button === 'facebook') {
			return styles.fb_btn;
		}
	};

	return (
		<button className={handleStyles()} {...otherProps}>
			<svg className={`icon ${styles.icon_social}`}>
				<use href={sprite + '#' + button}></use>
			</svg>
			{button}
		</button>
	);
};

export default SocialButton;
