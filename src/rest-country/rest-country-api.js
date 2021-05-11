import React, { useEffect, useState } from 'react';

const url = 'https://restcountries.eu/rest/v2/all';

const Countries = ({ ...otherProps }, ref) => {
	const [countries, setCountries] = useState([]);

	const fetchCountryData = async () => {
		const res = await fetch(url);
		const countries = await res.json();
		setCountries(countries);
	};

	useEffect(() => {
		fetchCountryData();
	}, []);

	return (
		<React.Fragment>
			{countries.map(country => {
				const { numericCode, name } = country;
				return (
					<option
						{...otherProps}
						ref={ref}
						key={numericCode}
						value={name}
					>
						{name}
					</option>
				);
			})}
		</React.Fragment>
	);
};

const CountryOption = React.forwardRef(Countries);

export default CountryOption;
