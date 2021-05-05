import React from 'react';

import styles from './form-header.module.scss';

const FormHeader = props => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>{props.heading}</h1>
			<div className={styles.social_buttons}>{props.children}</div>
			<p className={styles.or}>or</p>
		</div>
	);
};

export default FormHeader;
