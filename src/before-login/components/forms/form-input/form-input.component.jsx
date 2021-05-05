import React from 'react';

import styles from './form-input.module.scss';

const Input = ({ label, ...otherProps }, ref) => {
	return (
		<label className={styles.formLabel}>
			{label}
			<input {...otherProps} ref={ref} className={styles.formInput} />
		</label>
	);
};

const FormInput = React.forwardRef(Input);

export default FormInput;
