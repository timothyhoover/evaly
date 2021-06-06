import React, { useState, useEffect } from 'react';
import sprite from '../../../../assets/sprite.svg';
import { useAuth } from '../../../../context/auth-context';
import { userEvalResults } from '../../../../firebase.utils';
import './results.styles.scss';

const Results = () => {
	const { currentUser } = useAuth();
	const [results, setResults] = useState();

	const setUserResults = async () => {
		if (currentUser) {
			const userRef = await userEvalResults(currentUser);
			userRef.onSnapshot(doc => {
				setResults({
					...doc.data(),
				});
			});
		}

		if (!currentUser) {
			setResults(null);
		}
	};

	useEffect(() => {
		if (currentUser) {
			setUserResults();
		}

		if (!currentUser) {
			setResults(null);
		}

		return () => {};
	}, [currentUser]);

	return (
		<div className="results">
			<div className="results__title-wrapper">
				<h1 className="results__title">Results</h1>
			</div>
			<div className="results__container">
				<svg className="icon results__icon">
					<use href={sprite + '#card-icon-trophy'}></use>
				</svg>

				<div className="results__card">
					<div className="results__card-box">
						<h3 className="results__card-title">Eval History</h3>
						{results && (
							<table className="results__card-table">
								<thead>
									<tr className="results__card-table__header">
										<th>Date</th>
										<th>Result</th>
									</tr>
								</thead>

								<tbody className="results__card-table__body">
									{results.evals &&
										results.evals
											.map(
												({
													results: {
														level,
														date,
														id,
													},
												}) => (
													<tr
														key={id}
														className="results__card-table__body-data"
													>
														<td>{date}</td>
														<td>{level}</td>
													</tr>
												)
											)
											.reverse()}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
