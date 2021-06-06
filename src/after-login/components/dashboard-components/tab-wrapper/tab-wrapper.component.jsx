import React from 'react';
import classes from './tab-wrapper.module.scss';

const TabWrapper = props => {
	return <div className={classes.wrapper}>{props.children}</div>;
};

export default TabWrapper;
