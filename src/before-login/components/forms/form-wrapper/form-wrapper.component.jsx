import React from 'react';

import styles from './form-wrapper.module.scss';

const FormWrapper = props => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperBox}>{props.children}</div>
		</div>
	);
};

export default FormWrapper;
