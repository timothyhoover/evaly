import React from 'react';
import { Link } from 'react-router-dom';
import styles from './form-footer.module.scss';

const FormFooter = props => {
	return (
		<div className={styles.container}>
			<p>{props.text}</p>
			<Link to={props.link}>
				<button className="btn-secondary" type="submit">
					{props.button}
				</button>
			</Link>
		</div>
	);
};

export default FormFooter;
