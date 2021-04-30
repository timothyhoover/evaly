import React from 'react';
import sprite from '../../../../assets/sprite.svg';
import './results.styles.scss';

const Results = () => {
	return (
		<div className="results">
			<h1 className="results__title">Results</h1>
			<div className="results__container">
				<svg className="icon results__icon">
					<use href={sprite + '#card-icon-trophy'}></use>
				</svg>
				<div className="results__card">
					<div className="results__card-box">
						<h3 className="results__card-title">Eval History</h3>
						<table className="results__card-table">
							<thead className="results__card-table__header">
								<th>Date</th>
								<th>Result</th>
							</thead>
							<tbody className="results__card-table__body">
								<tr className="results__card-table__body-data">
									<td>11/06/2022</td>
									<td>B2</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>08/11/2021</td>
									<td>B1</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>17/03/2022</td>
									<td>B2</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>11/06/2022</td>
									<td>B2</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>08/11/2021</td>
									<td>B1</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>17/03/2022</td>
									<td>B2</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>11/06/2022</td>
									<td>B2</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>08/11/2021</td>
									<td>B1</td>
								</tr>
								<tr className="results__card-table__body-data">
									<td>17/03/2022</td>
									<td>B2</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
